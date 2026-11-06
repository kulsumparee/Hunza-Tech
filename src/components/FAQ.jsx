import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

function Item({ item }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-t border-ht-line">
      <h3 className="m-0 text-lg">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-xl font-semibold tracking-[-0.03em] text-ht-ink"
        >
          {item.q}
          {open ? <Minus size={18} className="shrink-0" /> : <Plus size={18} className="shrink-0" />}
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-5 text-ht-stone"
      >
        {item.a}
      </div>
    </div>
  );
}

export default function FAQ({ items, title = "Questions people actually ask", intro }) {
  return (
    <section className="bg-ht-cream py-20">
      <div className="container-site grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-4 text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-ht-stone">{intro}</p> : null}
        </Reveal>
        <Reveal className="md:col-span-8" delay={80}>
          {items.map((item) => (
            <Item key={item.q} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
