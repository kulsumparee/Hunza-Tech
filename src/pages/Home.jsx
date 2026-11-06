import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import PageMeta from "../components/PageMeta";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Reveal from "../components/Reveal";
import { company } from "../data/company";
import { services } from "../data/services";
import { trainingPrograms } from "../data/training";
import { homeFaqs } from "../data/faq";
import SmartImage from "../components/SmartImage";

export default function Home() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <>
      <PageMeta
        title="Hunza Technologies | Empower Ideas Through Technology"
        description="Hunza Technologies provides website development, UI/UX, graphic design, digital marketing, video editing and practical technology training from Nasirabad, Hunza."
        path="/"
      />
      <Hero />

      <section className="bg-ht-cream py-20 md:py-24">
        <div className="container-site grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-6">
            <div className="relative overflow-hidden">
              <SmartImage
                src="/images/gallery/itpark-04.jpg"
                alt="IT Park building in Nasirabad, Hunza"
                className="h-[22rem] w-full object-cover md:h-[28rem]"
                loading="eager"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-ht-ink/70 px-4 py-3 text-xs text-ht-paper">
                IT Park, Nasirabad — our office
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-6 md:pl-8" delay={90}>
            <p className="eyebrow">About us</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">A digital studio at IT Park, Nasirabad.</h2>
            <p className="mt-5 text-lg text-ht-stone">{company.positioning}</p>
            <p className="mt-4 text-ht-stone">{company.officialDescription}</p>
            <p className="mt-4 text-ht-stone">
              We work from the Software Technology Park in Nasirabad, Hunza. From this office we
              deliver digital work for businesses and run practical training in the same disciplines.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ht-orange-ink no-underline"
            >
              Read the company introduction <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ht-paper py-20 md:py-24">
        <div className="container-site">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display mt-4 max-w-[16ch] text-4xl md:text-5xl">
                Five services. One straightforward studio.
              </h2>
            </div>
            <Link to="/services" className="btn btn-dark self-start">
              All services
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <ServiceCard service={featured} featured />
            </Reveal>
            <div className="grid gap-4 lg:col-span-5">
              {rest.slice(0, 2).map((service, index) => (
                <Reveal key={service.slug} delay={index * 80}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.slice(2).map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ht-ink py-20 text-ht-paper md:py-24">
        <SmartImage
          src="/images/gallery/itpark-03.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-ht-ink/80" />
        <div className="container-site relative grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Training</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Skills taught the way the work is done.</h2>
            <p className="mt-5 text-ht-paper/75">
              Training sits beside our client services. People learn web development, design,
              marketing and video through projects, with intakes confirmed on enquiry.
            </p>
            <Link to="/training" className="btn btn-primary mt-8">
              Explore training programmes
            </Link>
          </Reveal>
          <Reveal className="md:col-span-7" delay={80}>
            <ul className="m-0 grid gap-3 p-0 sm:grid-cols-2">
              {trainingPrograms.map((program) => (
                <li
                  key={program.slug}
                  className="list-none border border-white/10 bg-ht-ink/50 px-4 py-4"
                >
                  <p className="m-0 text-xs text-ht-orange">{program.number}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{program.name}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Gallery />
      <Reviews />
      <FAQ
        items={homeFaqs}
        intro="If you are deciding whether to get in touch, these answers cover the usual first questions."
      />
      <CTASection />
    </>
  );
}
