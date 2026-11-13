import { useEffect, useMemo, useState } from "react";
import { company, inquiryTypes } from "../data/company";
import { trainingPrograms } from "../data/training";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || company.email.formEndpoint;
const TRAINING_TYPE = "Training Services";

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (values.phone.trim() && digits.length < 7) {
    errors.phone = "Enter a phone number with at least 7 digits, or leave this blank.";
  }
  if (!values.inquiryType) {
    errors.inquiryType = "Select the skill or service you want.";
  }
  if (values.inquiryType === TRAINING_TYPE && !values.programme) {
    errors.programme = "Select the training programme you want to learn.";
  }
  if (!values.message.trim() || values.message.trim().length < 12) {
    errors.message = "Add a short message so we know how to help.";
  }
  return errors;
}

function enquiryCopy(values) {
  const skill =
    values.inquiryType === TRAINING_TYPE && values.programme
      ? `${values.programme} (training)`
      : values.inquiryType;
  return [
    `Full name: ${values.name.trim()}`,
    `Visitor email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "Not provided"}`,
    `Skill or service they want: ${skill}`,
    values.inquiryType === TRAINING_TYPE ? `Training programme: ${values.programme}` : null,
    "",
    "Message:",
    values.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export default function ContactForm({ defaultType = "" }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: defaultType && inquiryTypes.includes(defaultType) ? defaultType : "",
    programme: "",
    message: "",
    honey: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (defaultType && inquiryTypes.includes(defaultType)) {
      setValues((current) => ({ ...current, inquiryType: defaultType }));
    }
  }, [defaultType]);

  const waHref = useMemo(() => {
    const text = encodeURIComponent(enquiryCopy(values) || "Hello Hunza Technologies.");
    return `${company.phone.whatsapp}?text=${text}`;
  }, [values]);

  function onChange(event) {
    const field = event.target.getAttribute("data-field") || event.target.name;
    const { value } = event.target;
    setValues((current) => ({
      ...current,
      [field]: value,
      ...(field === "inquiryType" && value !== TRAINING_TYPE ? { programme: "" } : {}),
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (values.honey) {
      setStatus("sent");
      setStatusMessage("Thank you. Your enquiry has been sent.");
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    const skillWanted =
      values.inquiryType === TRAINING_TYPE && values.programme
        ? values.programme
        : values.inquiryType;
    const details = enquiryCopy(values);
    const body = new FormData();
    body.append("Full Name", values.name.trim());
    body.append("email", values.email.trim());
    body.append("Visitor Email", values.email.trim());
    body.append("_replyto", values.email.trim());
    body.append("Phone", values.phone.trim() || "Not provided");
    body.append("Skill or service they want", skillWanted);
    body.append("Inquiry type", values.inquiryType);
    if (values.inquiryType === TRAINING_TYPE) {
      body.append("Training programme they want to learn", values.programme);
    }
    body.append("Message", values.message.trim());
    body.append("Enquiry details", details);
    body.append("_subject", `Hunza Technologies enquiry — ${skillWanted}`);
    body.append("_lang", "en");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || payload.success === false) {
        throw new Error(payload.error_msg || payload.message || "Request failed");
      }

      setStatus("sent");
      setStatusMessage(
        "Thank you. Your enquiry has been sent to Hunza Technologies. We will reply to the email you provided.",
      );
      setValues({
        name: "",
        email: "",
        phone: "",
        inquiryType: defaultType || "",
        programme: "",
        message: "",
        honey: "",
      });
    } catch {
      setStatus("error");
      setStatusMessage(
        `The enquiry could not be delivered just now. Email ${company.email.address} or use WhatsApp.`,
      );
    }
  }

  const fieldClass =
    "mt-2 w-full border border-ht-line bg-ht-cream px-4 py-3 text-ht-ink outline-none transition-colors focus:border-ht-orange";
  const wantsTraining = values.inquiryType === TRAINING_TYPE;
  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <label className="sr-only" aria-hidden="true">
        Leave blank
        <input
          name="_honeypot"
          data-field="honey"
          value={values.honey}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Full name
          <input
            name="Full Name"
            data-field="name"
            value={values.name}
            onChange={onChange}
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="mt-1 block text-sm text-red-700">{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-medium">
          Email address
          <input
            name="email"
            data-field="email"
            type="email"
            value={values.email}
            onChange={onChange}
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="mt-1 block text-sm text-red-700">{errors.email}</span> : null}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Phone number
          <input
            name="Phone"
            data-field="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            autoComplete="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <span className="mt-1 block text-sm text-red-700">{errors.phone}</span> : null}
        </label>
        <label className="block text-sm font-medium">
          Skill or service you want
          <select
            name="Skill or service they want"
            data-field="inquiryType"
            value={values.inquiryType}
            onChange={onChange}
            className={fieldClass}
            aria-invalid={Boolean(errors.inquiryType)}
          >
            <option value="">Select a skill or service</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.inquiryType ? (
            <span className="mt-1 block text-sm text-red-700">{errors.inquiryType}</span>
          ) : null}
        </label>
      </div>

      {wantsTraining ? (
        <label className="block text-sm font-medium">
          Which skill do you want to learn?
          <select
            name="Training programme they want to learn"
            data-field="programme"
            value={values.programme}
            onChange={onChange}
            className={fieldClass}
            aria-invalid={Boolean(errors.programme)}
          >
            <option value="">Select a training programme</option>
            {trainingPrograms.map((program) => (
              <option key={program.slug} value={program.name}>
                {program.name}
              </option>
            ))}
          </select>
          {errors.programme ? (
            <span className="mt-1 block text-sm text-red-700">{errors.programme}</span>
          ) : null}
        </label>
      ) : null}

      <label className="block text-sm font-medium">
        Message
        <textarea
          name="Message"
          data-field="message"
          rows={6}
          value={values.message}
          onChange={onChange}
          className={`${fieldClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <span className="mt-1 block text-sm text-red-700">{errors.message}</span> : null}
      </label>

      {statusMessage ? (
        <div
          role="status"
          className={`border px-4 py-3 text-sm ${
            status === "error"
              ? "border-red-300 bg-red-50 text-red-800"
              : "border-ht-orange/40 bg-ht-paper text-ht-ink"
          }`}
        >
          {statusMessage}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Sending…" : "Submit enquiry"}
        </button>
        <a href={waHref} className="btn btn-line" target="_blank" rel="noreferrer">
          Or send via WhatsApp
        </a>
      </div>
    </form>
  );
}
