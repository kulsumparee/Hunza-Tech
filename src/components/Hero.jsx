import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { company } from "../data/company";

const orbitStarts = ["0deg", "90deg", "180deg", "270deg"];

export default function Hero() {
  return (
    <section className="relative bg-ht-ink text-ht-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 82% 42%, rgba(245,139,30,0.35), transparent 42%), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "auto, 72px 72px, 72px 72px",
        }}
      />

      <div className="container-site relative grid items-center gap-8 pt-28 pb-14 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8 lg:pb-20">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow">Nasirabad, Hunza · Digital services & training</p>
          <h1 className="display mt-6 max-w-[14ch] text-[2.65rem] text-ht-paper sm:text-6xl lg:text-[4.1rem]">
            Empowering Businesses. Building Digital Futures.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ht-paper/75">
            From professional digital solutions to practical technology training, Hunza Technologies
            helps businesses and individuals turn ideas into meaningful digital progress.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-primary">
              Explore Our Services
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19.25rem] sm:max-w-[22.5rem] lg:col-span-6 lg:max-w-[25.5rem]">
          <div className="hero-orbit" role="presentation">
            {company.heroQuotes.map((quote, index) => (
              <div
                key={quote}
                className={`hero-orbit-ring hero-orbit-ring-${index + 1}`}
                style={{ "--orbit-start": orbitStarts[index] }}
              >
                <span className="hero-orbit-planet" aria-hidden="true" />
                <p className="hero-orbit-quote">{quote}</p>
              </div>
            ))}
            <img
              src="/logo.png"
              alt="Official Hunza Technologies logo"
              width={512}
              height={512}
              className="hero-orbit-sun"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-ht-line-dark">
        <div className="container-site grid gap-6 py-5 text-sm text-ht-paper/65 sm:grid-cols-3">
          <p className="m-0">Website development, design, marketing and video.</p>
          <p className="m-0">Practical training in the same disciplines.</p>
          <p className="m-0 sm:text-right">{company.location.short}</p>
        </div>
      </div>
    </section>
  );
}
