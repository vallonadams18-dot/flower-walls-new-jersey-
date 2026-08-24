import Link from "next/link";
import { GALLERY } from "@/data/gallery";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = pageMeta({
  title: "Flower Wall Gallery | Real New Jersey Events",
  description:
    "Photographs of our flower walls, greenery walls and photo booths at real weddings, showers, brand activations and corporate events across New Jersey.",
  path: "/gallery/",
});

export default function Gallery() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Flower wall gallery — New Jersey events",
            url: `${SITE.url}/gallery/`,
            image: GALLERY.map((p) => `${SITE.url}${p.src}`),
          },
        ]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">Our Work</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl leading-tight">
            The gallery
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg text-mute leading-relaxed">
            Real walls at real events — weddings and showers, brand
            activations, conferences and milestone parties, all delivered,
            installed and collected by our team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.booking.contact}
              className="rounded-full bg-brand px-7 py-3.5 text-white font-medium hover:bg-brand-dark transition-colors"
            >
              Inquire Now
            </a>
            <Link
              href="/flower-walls/"
              className="rounded-full border border-heritage/50 px-7 py-3.5 font-medium text-brand hover:bg-white transition-colors"
            >
              Browse the collection
            </Link>
          </div>
        </div>
      </section>

      {/* Masonry via CSS columns — the photographs are a mix of portrait and
          landscape, and columns let each keep its own height without cropping. */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {GALLERY.map((p, i) => (
            <figure
              key={p.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg bg-ivory"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(p.src)}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading={i < 6 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-brand text-ivory">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Want your event to look like this?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/80 leading-relaxed">
            Tell us your date, venue and colours and we will put together the
            wall — and the booth to go with it.
          </p>
          <a
            href={SITE.booking.contact}
            className="mt-7 inline-block rounded-full bg-gold px-8 py-3.5 font-medium text-brand hover:opacity-90 transition-opacity"
          >
            Check your date
          </a>
        </div>
      </section>
    </>
  );
}
