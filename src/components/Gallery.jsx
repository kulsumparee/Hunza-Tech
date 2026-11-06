import Reveal from "./Reveal";
import { galleryPhotos } from "../data/gallery";
import { company } from "../data/company";

export default function Gallery() {
  return (
    <section className="bg-ht-paper py-20 md:py-24">
      <div className="container-site">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="display mt-4 max-w-[16ch] text-4xl md:text-5xl">Our place at IT Park, Nasirabad.</h2>
            <p className="mt-4 max-w-xl text-ht-stone">
              Hunza Technologies works from this building in Nasirabad. Photographs show the Software
              Technology Park at the listed Google Maps location.
            </p>
          </div>
          <a
            href={company.location.mapsLink}
            className="btn btn-line self-start"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {galleryPhotos.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={index * 60}
              className={photo.span === "wide" ? "md:col-span-2" : ""}
            >
              <figure className="m-0">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full object-cover ${photo.span === "wide" ? "h-[18rem] md:h-[28rem]" : "h-[16rem] md:h-[20rem]"}`}
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-ht-mute">{photo.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
