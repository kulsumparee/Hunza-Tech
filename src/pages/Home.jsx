import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import PageMeta from "../components/PageMeta";
import ServiceCard from "../components/ServiceCard";
import TrainingCard from "../components/TrainingCard";
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";
import { company } from "../data/company";
import { services, processSteps, whyPoints } from "../data/services";
import { trainingPrograms } from "../data/training";
import { homeFaqs, values } from "../data/faq";
import SmartImage from "../components/SmartImage";

export default function Home() {
  const featured = services[0];
  const rest = services.slice(1);
  const previewTraining = trainingPrograms.slice(0, 3);

  return (
    <>
      <PageMeta
        title="Hunza Technologies | Empower Ideas Through Technology"
        description="Hunza Technologies provides website development, UI/UX, graphic design, digital marketing, video editing and practical technology training from Nasirabad, Hunza."
        path="/"
      />
      <Hero />

      <section className="bg-ht-cream py-20 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Who we are</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">A digital studio rooted in Hunza.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:pt-8" delay={90}>
            <p className="text-lg text-ht-stone">{company.positioning}</p>
            <p className="mt-4 text-ht-stone">{company.officialDescription}</p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ht-orange-ink no-underline"
            >
              About Hunza Technologies <ArrowRight size={16} />
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
          src="/images/learning.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
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

      <section className="bg-ht-cream py-20 md:py-24">
        <div className="container-site grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-6">
            <div className="relative overflow-hidden">
              <SmartImage
                src="/images/hunza-karakoram.jpg"
                alt="Passu Cathedral in the Karakoram, Hunza"
                className="h-[28rem] w-full object-cover"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-ht-ink/70 px-4 py-3 text-xs text-ht-paper">
                Hunza, Gilgit-Baltistan — where the company is based.
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-6 md:pl-8" delay={90}>
            <p className="eyebrow">About Hunza Technologies</p>
            <h2 className="display mt-4 text-4xl">Work from the Software Technology Park in Nasirabad.</h2>
            <p className="mt-5 text-ht-stone">
              Hunza Technologies is a privately held IT services company headquartered in Hunza,
              Pakistan. The office is at the Software Technology Park in Nasirabad. From there we
              deliver digital work for businesses and run training for people who want those skills
              themselves.
            </p>
            <p className="mt-4 text-ht-stone">
              The company has hosted visitors at the IT Park, including groups of entrepreneurs, and
              has publicly offered UX/UI training as well as online content writing and freelancing
              classes.
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
          <Reveal>
            <p className="eyebrow">Why choose us</p>
            <h2 className="display mt-4 max-w-[16ch] text-4xl md:text-5xl">
              Reasons that can be checked, not slogans.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-ht-line md:grid-cols-2">
            {whyPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 60} className="bg-ht-paper p-8 md:p-10">
                <p className="font-display text-sm text-ht-orange">0{index + 1}</p>
                <h3 className="display mt-3 text-2xl">{point.title}</h3>
                <p className="mt-3 text-ht-stone">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ht-cream py-20 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="display mt-4 text-4xl">A process you can follow.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 p-0 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 70} className="list-none">
                <p className="font-display text-4xl text-ht-orange">{step.number}</p>
                <h3 className="display mt-4 text-2xl">{step.title}</h3>
                <p className="mt-3 text-ht-stone">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ht-paper py-20">
        <div className="container-site">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Learning</p>
              <h2 className="display mt-4 text-4xl">Training opportunities</h2>
            </div>
            <Link to="/training" className="hidden text-sm font-semibold text-ht-orange-ink no-underline sm:inline">
              View all programmes
            </Link>
          </Reveal>
          <div className="mt-4">
            {previewTraining.map((program) => (
              <TrainingCard key={program.slug} program={program} dense />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ht-ink py-20 text-ht-paper">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Values</p>
            <h2 className="display mt-4 text-4xl">How we prefer to work.</h2>
          </Reveal>
          <div className="grid gap-8 md:col-span-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <h3 className="display text-2xl text-ht-orange">{value.title}</h3>
                <p className="mt-3 text-ht-paper/75">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={homeFaqs}
        intro="If you are deciding whether to get in touch, these answers cover the usual first questions."
      />
      <CTASection />
    </>
  );
}
