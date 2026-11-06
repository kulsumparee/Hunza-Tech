import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TrainingCard({ program, dense = false }) {
  return (
    <article
      className={`grid gap-4 border-t border-ht-line py-8 md:grid-cols-12 md:gap-8 ${
        dense ? "" : "md:py-10"
      }`}
    >
      <div className="md:col-span-2">
        <p className="font-display text-2xl text-ht-orange">{program.number}</p>
      </div>
      <div className="md:col-span-4">
        <h3 className="display m-0 text-2xl text-ht-ink md:text-[1.75rem]">{program.name}</h3>
        {program.verified ? (
          <p className="mt-2 text-xs font-semibold tracking-wide text-ht-orange-ink uppercase">
            Publicly offered
          </p>
        ) : null}
      </div>
      <div className="md:col-span-6">
        <p className="m-0 text-ht-stone">{program.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2 p-0">
          {program.skills.slice(0, 4).map((skill) => (
            <li
              key={skill}
              className="list-none border border-ht-line bg-ht-paper px-3 py-1 text-xs text-ht-ink"
            >
              {skill}
            </li>
          ))}
        </ul>
        <Link
          to={`/training#${program.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ht-orange-ink no-underline hover:text-ht-orange-deep"
        >
          Programme details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
