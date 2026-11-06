import SmartImage from "./SmartImage";

export default function PageHero({ eyebrow, title, text, image, imageAlt }) {
  return (
    <section className="bg-ht-ink pt-28 text-ht-paper md:pt-32">
      <div className="container-site grid gap-10 pb-14 md:grid-cols-12 md:items-end md:pb-16">
        <div className="md:col-span-7">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 max-w-[16ch] text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        </div>
        <p className="md:col-span-5 md:mb-1 md:text-lg md:text-ht-paper/80">{text}</p>
      </div>
      {image ? (
        <div className="relative h-56 overflow-hidden md:h-80">
          <SmartImage src={image} alt={imageAlt || ""} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-ht-ink/35" />
        </div>
      ) : (
        <div className="h-px bg-ht-line-dark" />
      )}
    </section>
  );
}
