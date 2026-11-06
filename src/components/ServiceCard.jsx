import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SmartImage from "./SmartImage";

export default function ServiceCard({ service, featured = false }) {
  if (featured) {
    return (
      <article className="group relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden bg-ht-ink p-8 text-ht-paper md:p-10">
        <SmartImage
          src={service.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ht-ink via-ht-ink/70 to-ht-ink/20" />
        <div className="relative">
          <p className="font-display text-sm text-ht-orange">{service.number}</p>
          <h3 className="display mt-3 text-3xl md:text-4xl">{service.name}</h3>
          <p className="mt-3 max-w-md text-ht-paper/80">{service.summary}</p>
          <Link
            to={`/services#${service.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ht-orange no-underline"
          >
            View service <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col border border-ht-line bg-ht-cream p-6 transition-colors hover:border-ht-orange">
      <p className="font-display text-sm text-ht-orange">{service.number}</p>
      <h3 className="display mt-4 text-2xl text-ht-ink">{service.name}</h3>
      <p className="mt-3 flex-1 text-[0.98rem] text-ht-stone">{service.summary}</p>
      <Link
        to={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ht-orange-ink no-underline hover:text-ht-orange-deep"
      >
        View service <ArrowRight size={16} />
      </Link>
    </article>
  );
}
