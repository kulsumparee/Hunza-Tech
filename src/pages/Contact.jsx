import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { company, inquiryTypes } from "../data/company";

export default function Contact() {
  const [params] = useSearchParams();
  const requested = params.get("type") || "";
  const defaultType = inquiryTypes.includes(requested) ? requested : "";

  const mapSrc = useMemo(() => company.location.mapsEmbed, []);

  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact Hunza Technologies in Nasirabad, Hunza. Email, WhatsApp, phone and an enquiry form for services and training."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Send a brief. We will reply with a next step."
        text="Use the form, email, phone or WhatsApp. Say whether you need a service, a training place, or both."
      />

      <section className="bg-ht-cream py-20">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Reach us</p>
            <h2 className="display mt-4 text-4xl">Direct lines, published openly.</h2>
            <ul className="mt-8 space-y-6 p-0">
              <li className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-ht-orange" size={20} />
                <div>
                  <p className="m-0 text-sm text-ht-mute">Phone / WhatsApp</p>
                  <a href={company.phone.href} className="text-lg font-medium no-underline hover:text-ht-orange-ink">
                    {company.phone.display}
                  </a>
                  <div>
                    <a
                      href={company.phone.whatsapp}
                      className="text-sm text-ht-orange-ink no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open WhatsApp
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-ht-orange" size={20} />
                <div>
                  <p className="m-0 text-sm text-ht-mute">Email</p>
                  <a href={company.email.href} className="break-all text-lg font-medium no-underline hover:text-ht-orange-ink">
                    {company.email.address}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-ht-orange" size={20} />
                <div>
                  <p className="m-0 text-sm text-ht-mute">Office</p>
                  <p className="m-0 text-lg font-medium">{company.location.label}</p>
                  <p className="m-0 text-ht-stone">{company.location.region}</p>
                  <a
                    href={company.location.mapsLink}
                    className="mt-1 inline-flex items-center gap-1 text-sm text-ht-orange-ink no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps <ArrowUpRight size={14} />
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <p className="eyebrow">Social</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {company.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium no-underline hover:text-ht-orange-ink"
                  >
                    {item.name} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="border border-ht-line bg-ht-paper p-6 md:p-8 lg:col-span-7" delay={80}>
            <h2 className="display text-3xl">Business enquiry</h2>
            <p className="mt-2 text-ht-stone">
              Fields marked by the form validation must be completed. Choose the topic that fits
              closest — we can always re-route the conversation.
            </p>
            <div className="mt-8">
              <ContactForm defaultType={defaultType} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ht-paper pb-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Location</p>
            <h2 className="display mt-3 text-3xl">IT Park, Nasirabad, Hunza</h2>
            <p className="mt-3 max-w-2xl text-ht-stone">
              {company.location.address}. If you are visiting, message ahead so someone can meet you.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden border border-ht-line">
            <iframe
              title="Map of IT Park, Nasirabad, Hunza"
              src={mapSrc}
              className="h-[22rem] w-full border-0 md:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
