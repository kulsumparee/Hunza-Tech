import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { company } from "../data/company";
import { values } from "../data/faq";
import { whyPoints } from "../data/services";

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Hunza Technologies is a privately held IT services company based at the Software Technology Park in Nasirabad, Hunza, offering digital services and technology training."
        path="/about"
      />
      <PageHero
        eyebrow="About us"
        title="Who we are."
        text="A technology and digital solutions company in Hunza, working with businesses, organisations and people who want to build digital skills."
        image="/images/hunza-karakoram.jpg"
        imageAlt="Karakoram mountains above the Hunza valley"
      />

      <section className="bg-ht-cream py-20 md:py-24">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Company</p>
            <h2 className="display mt-4 text-4xl">Hunza Technologies</h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={80}>
            <p className="text-lg text-ht-stone">{company.officialDescription}</p>
            <p className="mt-4 text-ht-stone">{company.positioning}</p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Industry</dt>
                <dd className="mt-2 m-0">{company.industry}</dd>
              </div>
              <div>
                <dt className="eyebrow">Type</dt>
                <dd className="mt-2 m-0">{company.type}</dd>
              </div>
              <div>
                <dt className="eyebrow">Headquarters</dt>
                <dd className="mt-2 m-0">{company.headquarters}</dd>
              </div>
              <div>
                <dt className="eyebrow">Office</dt>
                <dd className="mt-2 m-0">{company.location.label}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-ht-paper py-20">
        <div className="container-site grid gap-px bg-ht-line md:grid-cols-2">
          <Reveal className="bg-ht-paper p-8 md:p-12">
            <p className="eyebrow">Mission</p>
            <h2 className="display mt-4 text-3xl">Help people put ideas into working digital form.</h2>
            <p className="mt-4 text-ht-stone">
              We exist to provide professional digital services and practical training so businesses
              and individuals can develop the capabilities they need — a website, a visual system, a
              marketing presence, a video, or the skill to make those things themselves.
            </p>
          </Reveal>
          <Reveal className="bg-ht-paper p-8 md:p-12" delay={80}>
            <p className="eyebrow">Vision</p>
            <h2 className="display mt-4 text-3xl">A reliable digital partner from Hunza, open to the world.</h2>
            <p className="mt-4 text-ht-stone">
              We want Hunza Technologies to be a place organisations can trust for digital work, and
              a place people can come to learn the same crafts — locally at the Software Technology
              Park, and remotely when a programme is offered online.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ht-cream py-20 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Our values</p>
            <h2 className="display mt-4 text-4xl">Principles we hold to on a project.</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 50} className="border-t border-ht-line pt-6">
                <h3 className="display text-2xl">{value.title}</h3>
                <p className="mt-3 text-ht-stone">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ht-ink py-20 text-ht-paper">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Our approach</p>
            <h2 className="display mt-4 text-4xl">Listen, scope, make, hand over.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 text-ht-paper/75" delay={80}>
            <p>
              Work starts with a written brief, even a short one. We reply with a scope: what will
              be produced, what we need from you, and how review will happen. Production is staged
              so you can comment while changes are still inexpensive. Delivery includes the files or
              the published site, and a walkthrough of how to use them.
            </p>
            <p className="mt-4">
              Training follows the same idea. A programme is a sequence of skills used on a piece of
              work. We do not invent job guarantees or accreditation claims. If an intake includes a
              specific certificate or assessment, that is stated at enrolment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ht-paper py-20 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Why Hunza Technologies</p>
            <h2 className="display mt-4 max-w-[18ch] text-4xl">What is actually distinctive.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {whyPoints.map((point) => (
              <div key={point.title}>
                <h3 className="display text-2xl">{point.title}</h3>
                <p className="mt-3 text-ht-stone">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ht-cream py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">People</p>
            <h2 className="display mt-4 text-4xl">The team, as publicly confirmed.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 text-ht-stone" delay={80}>
            <p>
              The company works from the Software Technology Park in Nasirabad, Hunza. Official
              company updates name Rizwan as a founding member. We do not publish a staff directory,
              portraits, job titles or headcount on this website until those details are confirmed
              for public use.
            </p>
            <p className="mt-4">{company.foundingNote}</p>
            <p className="mt-4">
              If you have worked with us and would like a named profile added, write to{" "}
              <a href={company.email.href}>{company.email.address}</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Bring a brief. We will tell you if we are the right studio."
        secondary={{ to: "/services", label: "See services" }}
      />
    </>
  );
}
