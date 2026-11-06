import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { company, navLinks } from "../data/company";
import { services } from "../data/services";

export default function Footer() {
  return (
    <footer className="bg-ht-ink-deep text-ht-paper">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 no-underline">
              <img src="/logo.png" alt="" className="h-12 w-12 rounded-full object-cover" width={512} height={512} />
              <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ht-paper">
                Hunza Technologies
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-ht-paper/70">
              {company.tagline} Professional digital services and technology training from Software
              Technology Park, Nasirabad, Hunza.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {company.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-ht-paper/80 no-underline hover:text-ht-orange"
                >
                  {item.name}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Site</p>
            <ul className="mt-4 space-y-2 p-0 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ht-paper/75 no-underline hover:text-ht-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Services</p>
            <ul className="mt-4 space-y-2 p-0 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-ht-paper/75 no-underline hover:text-ht-orange"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 p-0 text-sm text-ht-paper/75">
              <li>
                <a href={company.phone.href} className="no-underline hover:text-ht-orange">
                  {company.phone.display}
                </a>
              </li>
              <li>
                <a href={company.phone.whatsapp} className="no-underline hover:text-ht-orange">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={company.email.href} className="break-all no-underline hover:text-ht-orange">
                  {company.email.address}
                </a>
              </li>
              <li>{company.location.label}</li>
            </ul>
          </div>
        </div>

        <hr className="hairline mt-14 border-0 bg-ht-line-dark" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-ht-mute sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {new Date().getFullYear()} Hunza Technologies. All rights reserved.</p>
          <p className="m-0">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
