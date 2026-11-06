import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";
import { trainingPrograms, trainingApproach } from "../data/training";
import { trainingFaqs } from "../data/faq";
import { company } from "../data/company";

export default function Training() {
  return (
    <>
      <PageMeta
        title="Training Services"
        description="Practical technology training from Hunza Technologies: web development, graphic design, digital marketing, UI/UX, video editing, and content writing."
        path="/training"
      />
      <PageHero
        eyebrow="Training services"
        title="Start learning. Build skills. Create opportunities."
        text="Career-oriented programmes in the same disciplines we practise for clients. Dates, duration and fees are confirmed per intake — they are not listed here until they are verified."
        image="/images/training.jpg"
        imageAlt="People collaborating during a learning session"
      />

      <section className="bg-ht-cream py-20 md:py-24">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Introduction</p>
            <h2 className="display mt-4 text-4xl">Practical training, not a brochure of promises.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 text-ht-stone" delay={80}>
            <p className="text-lg">
              Hunza Technologies trains people in web development, design, marketing and video. The
              programmes below are current offerings. Availability, format and fees should be
              confirmed before you plan around a date.
            </p>
            <p className="mt-4">
              Some programmes have already been offered publicly: UX/UI design training at the
              company, and online content writing and freelancing classes that participants could
              join from anywhere.
            </p>
            <p className="mt-4">
              We do not claim official accreditation, guaranteed certificates, student numbers or
              job placement. If a specific intake includes an assessment or a certificate, that will
              be stated when you enrol.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programmes" className="btn btn-dark">
                Explore training programmes
              </a>
              <a href="#enquire" className="btn btn-line">
                Enquire about training
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ht-paper py-16">
        <div className="container-site grid gap-8 md:grid-cols-4">
          {trainingApproach.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <p className="font-display text-sm text-ht-orange">0{index + 1}</p>
              <h3 className="display mt-3 text-xl">{item.title}</h3>
              <p className="mt-3 text-sm text-ht-stone">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="programmes" className="scroll-mt-24 bg-ht-cream py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Catalogue</p>
            <h2 className="display mt-4 text-4xl">Available training categories</h2>
            <p className="mt-4 max-w-2xl text-ht-stone">
              Each listing is written so it can be updated when a new course is introduced. Skills
              listed are what a participant can expect to work on.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {trainingPrograms.map((program, index) => (
              <Reveal
                key={program.slug}
                id={program.slug}
                className="scroll-mt-28 grid gap-8 border-t border-ht-line pt-10 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <p className="font-display text-ht-orange">{program.number}</p>
                  <h3 className="display mt-2 text-3xl">{program.name}</h3>
                  {program.verified ? (
                    <p className="mt-2 text-xs font-semibold tracking-wide text-ht-orange-ink uppercase">
                      Publicly announced by the company
                    </p>
                  ) : (
                    <p className="mt-2 text-xs font-semibold tracking-wide text-ht-mute uppercase">
                      Offering — confirm availability
                    </p>
                  )}
                  <p className="mt-4 text-sm text-ht-stone">{program.audience}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg text-ht-stone">{program.summary}</p>
                  <p className="mt-4 text-ht-stone">{program.approach}</p>
                  <h4 className="mt-6 font-display text-sm tracking-[0.14em] text-ht-orange uppercase">
                    Skills you can learn
                  </h4>
                  <ul className="mt-3 grid gap-2 p-0 sm:grid-cols-2">
                    {program.skills.map((skill) => (
                      <li key={skill} className="list-none border border-ht-line bg-ht-paper px-3 py-2 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-ht-mute">
                    Duration and fees: provided on enquiry for the next confirmed intake.
                  </p>
                  <Link
                    to={`/contact?type=${encodeURIComponent("Training Services")}&program=${program.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ht-orange-ink no-underline"
                  >
                    Enquire about this programme <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 bg-ht-paper py-20">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Registration</p>
            <h2 className="display mt-4 text-4xl">Enquire about training</h2>
            <p className="mt-4 text-ht-stone">
              Tell us which programme you are interested in and whether you prefer to join in
              Nasirabad or online. We will reply with current availability.
            </p>
            <p className="mt-4 text-sm text-ht-mute">
              Email {company.email.address} or WhatsApp {company.phone.display} if you would rather
              write directly.
            </p>
          </Reveal>
          <Reveal className="md:col-span-7" delay={80}>
            <ContactForm defaultType="Training Services" />
          </Reveal>
        </div>
      </section>

      <FAQ
        items={trainingFaqs}
        title="Training questions"
        intro="Fees, certificates and schedules are confirmed per intake. These answers explain how that works."
      />

      <CTASection
        eyebrow="Start Learning. Build Skills. Create Opportunities."
        title="A place is confirmed when you enquire — not before."
        text="Choose a programme, send a short message, and we will tell you what the next intake looks like."
        primary={{ to: "/contact?type=Training%20Services", label: "Enquire About Training" }}
        secondary={{ to: "/services", label: "See client services" }}
      />
    </>
  );
}
