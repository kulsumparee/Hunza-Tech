import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import SmartImage from "../components/SmartImage";

export default function Services() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Website development, UI/UX design, graphic design, digital marketing and video editing from Hunza Technologies in Nasirabad, Hunza."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Digital work for businesses that need it done well."
        text="Five service lines, described as we actually deliver them. Enquire about a single piece of work or a combination."
        image="/images/workspace.jpg"
        imageAlt="A development workspace with code on a laptop"
      />

      <section className="bg-ht-cream py-16">
        <div className="container-site flex flex-wrap gap-3">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="border border-ht-line px-4 py-2 text-sm text-ht-ink no-underline hover:border-ht-orange"
            >
              {service.number} {service.name}
            </a>
          ))}
        </div>
      </section>

      {services.map((service, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-20 md:py-24 ${index % 2 === 0 ? "bg-ht-paper" : "bg-ht-cream"}`}
          >
            <div className="container-site grid items-center gap-10 md:grid-cols-12">
              <Reveal className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
                <SmartImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-[22rem] w-full object-cover md:h-[28rem]"
                />
              </Reveal>
              <Reveal className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`} delay={80}>
                <p className="eyebrow">
                  {service.number} / 05
                </p>
                <h2 className="display mt-3 text-4xl">{service.name}</h2>
                <p className="mt-4 text-lg text-ht-stone">{service.description}</p>

                <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.14em] text-ht-orange uppercase">
                  What this includes
                </h3>
                <ul className="mt-3 space-y-2 p-0 text-ht-stone">
                  {service.offerings.map((item) => (
                    <li key={item} className="list-none border-l-2 border-ht-orange pl-3">
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.14em] text-ht-orange uppercase">
                  Why it helps
                </h3>
                <ul className="mt-3 space-y-2 p-0 text-ht-stone">
                  {service.benefits.map((item) => (
                    <li key={item} className="list-none">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={`/contact?type=${encodeURIComponent(service.name)}`}
                    className="btn btn-primary"
                  >
                    Enquire about {service.name}
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn btn-line">
                    General contact
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Need more than one service? Say so in the brief."
        text="Website, design, marketing and video often belong together. Send one enquiry and we will tell you what we can take on."
        secondary={{ to: "/training", label: "Training programmes" }}
      />
    </>
  );
}
