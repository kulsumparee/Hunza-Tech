import { useEffect, useMemo, useState } from "react";
import { company, inquiryTypes } from "../data/company";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GMAIL_ENDPOINT = `https://formsubmit.co/ajax/${company.email.address}`;

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
    errors.inquiryType = "Select an inquiry type.";
  }
  if (!values.message.trim() || values.message.trim().length < 12) {
    errors.message = "Add a short message so we know how to help.";
  }
  return errors;
}

export default function ContactForm({ defaultType = "" }) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT || GMAIL_ENDPOINT;
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: defaultType && inquiryTypes.includes(defaultType) ? defaultType : "",
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
    const text = encodeURIComponent(
      `Hello Hunza Technologies. My name is ${values.name || "(name)"}. Inquiry: ${
        values.inquiryType || "(type)"
      }.\n\n${values.message || ""}`,
    );
    return `${company.phone.whatsapp}?text=${text}`;
  }, [values]);

  function onChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
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

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || "Not provided",
          inquiryType: values.inquiryType,
          message: values.message.trim(),
          _subject: `Hunza Technologies enquiry — ${values.inquiryType}`,
          _replyto: values.email.trim(),
          _captcha: "false",
          _template: "table",
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.message || "Request failed");
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
        message: "",
        honey: "",
      });
    } catch {
      setStatus("error");
      setStatusMessage(
        `The enquiry could not be delivered just now. Email ${company.email.address} or use WhatsApp. If this is the first message to this inbox, Hunza Technologies may need to confirm a one-time activation email from FormSubmit.`,
      );
    }
  }

  const fieldClass =
    "mt-2 w-full border border-ht-line bg-ht-cream px-4 py-3 text-ht-ink outline-none transition-colors focus:border-ht-orange";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <label className="sr-only" aria-hidden="true">
        Leave blank
        <input name="honey" value={values.honey} onChange={onChange} tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Full name
          <input
            name="name"
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
            name="phone"
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
          Inquiry type
          <select
            name="inquiryType"
            value={values.inquiryType}
            onChange={onChange}
            className={fieldClass}
            aria-invalid={Boolean(errors.inquiryType)}
          >
            <option value="">Select a topic</option>
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

      <label className="block text-sm font-medium">
        Message
        <textarea
          name="message"
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
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit enquiry"}
        </button>
        <a href={waHref} className="btn btn-line" target="_blank" rel="noreferrer">
          Or send via WhatsApp
        </a>
      </div>
    </form>
  );
}
