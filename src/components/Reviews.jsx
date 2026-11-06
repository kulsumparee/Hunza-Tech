import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { googleReviews } from "../data/gallery";

function Stars({ value }) {
  return (
    <span className="inline-flex gap-0.5 text-ht-orange" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          fill={index < value ? "currentColor" : "none"}
          strokeWidth={1.75}
        />
      ))}
    </span>
  );
}

export default function Reviews() {
  const written = googleReviews.items.filter((item) => item.quote);

  return (
    <section className="bg-ht-cream py-20 md:py-24">
      <div className="container-site grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Reviews</p>
          <h2 className="display mt-4 text-4xl">What people wrote on Google.</h2>
          <p className="mt-4 text-ht-stone">
            These ratings are from the public Google listing for {googleReviews.placeName} in
            Nasirabad. We have not added names or comments that were not published there.
          </p>
          <div className="mt-8 border border-ht-line bg-ht-paper p-6">
            <p className="font-display text-5xl text-ht-ink">{googleReviews.rating.toFixed(1)}</p>
            <div className="mt-2">
              <Stars value={googleReviews.rating} />
            </div>
            <p className="mt-2 text-sm text-ht-mute">
              {googleReviews.reviewCount} Google reviews
            </p>
            <a
              href={googleReviews.mapsUrl}
              className="mt-4 inline-block text-sm font-semibold text-ht-orange-ink no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Read reviews on Google Maps
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:col-span-8">
          {written.map((item) => (
            <Reveal key={item.quote} className="border border-ht-line bg-ht-paper p-6 md:p-8">
              <Stars value={item.rating} />
              <blockquote className="mt-4 m-0">
                <p className="font-display text-2xl text-ht-ink">“{item.quote}”</p>
              </blockquote>
              <p className="mt-4 text-sm text-ht-mute">Google review · {item.date}</p>
            </Reveal>
          ))}
          <Reveal className="border border-ht-line p-6 text-sm text-ht-stone">
            Two further 5-star Google ratings were left in July and August 2024 without written
            comments. Open the listing to see the current total.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
