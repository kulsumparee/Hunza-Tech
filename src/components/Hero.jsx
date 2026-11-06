import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { company } from "../data/company";

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-ht-ink text-ht-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 82% 42%, rgba(245,139,30,0.35), transparent 42%), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "auto, 72px 72px, 72px 72px",
        }}
      />

      <div className="container-site relative grid items-end gap-12 pt-28 pb-16 lg:min-h-[100svh] lg:grid-cols-12 lg:items-center lg:pb-24">
        <div className="lg:col-span-7">
          <p className="eyebrow">Nasirabad, Hunza · Digital services & training</p>
          <h1 className="display mt-6 max-w-[14ch] text-[2.65rem] text-ht-paper sm:text-6xl lg:text-[4.35rem]">
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
          <img
            src="/logo.png"
            alt=""
            width={160}
            height={160}
            className="mt-8 w-24 rounded-full lg:hidden"
          />
        </div>

        <div className="relative hidden lg:col-span-5 lg:block lg:justify-self-end">
          <div className="relative mx-auto w-44 sm:w-72 lg:w-[22rem]">
            <div className="absolute -inset-6 rounded-full border border-ht-orange/25 sm:-inset-8" aria-hidden="true" />
            <div className="absolute -inset-14 hidden rounded-full border border-ht-orange/10 lg:block" aria-hidden="true" />
            <img
              src="/logo.png"
              alt="Official Hunza Technologies logo"
              width={512}
              height={512}
              className="relative w-full rounded-full object-cover"
            />
          </div>
          <p className="mt-6 text-center text-sm text-ht-paper/55 lg:text-right">
            {company.tagline}
          </p>
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
