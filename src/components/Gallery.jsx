import SmartImage from "./SmartImage";
import { galleryPhotos } from "../data/gallery";
import { company } from "../data/company";

export default function Gallery() {
  return (
    <section className="bg-ht-cream py-20 md:py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="display mt-4 max-w-[16ch] text-4xl md:text-5xl">Our place at IT Park, Nasirabad.</h2>
          </div>
          <a
            href={company.location.mapsLink}
            className="btn btn-line self-start"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <div className="gallery-mosaic mt-10">
          {galleryPhotos.map((photo) => (
            <figure key={photo.src} className={`gallery-tile gallery-tile-${photo.area}`}>
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                className="gallery-tile-img"
                style={{ objectPosition: photo.position }}
              />
              <span className="gallery-tile-shade" aria-hidden="true" />
              <figcaption className="gallery-tile-caption">
                <span className="gallery-tile-kicker">{photo.kicker}</span>
                <span className="gallery-tile-title">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
