import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection({
  eyebrow = "Start a conversation",
  title = "Tell us what you need to build, design or learn.",
  text = "Whether you are looking for a website, a visual identity, a marketing piece, a video, or a training place, send a short brief. We will reply with the next practical step.",
  primary = { to: "/contact", label: "Get in Touch" },
  secondary = { to: "/training", label: "Explore Training" },
  dark = true,
}) {
  return (
    <section className={dark ? "bg-ht-ink text-ht-paper" : "bg-ht-paper text-ht-ink"}>
      <div className="container-site grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 max-w-[18ch] text-4xl md:text-5xl">{title}</h2>
          <p className={`mt-5 max-w-2xl text-lg ${dark ? "text-ht-paper/70" : "text-ht-stone"}`}>
            {text}
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-4 md:items-end">
          <Link to={primary.to} className="btn btn-primary">
            {primary.label}
            <ArrowRight size={16} />
          </Link>
          {secondary ? (
            <Link to={secondary.to} className={dark ? "btn btn-ghost" : "btn btn-line"}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
