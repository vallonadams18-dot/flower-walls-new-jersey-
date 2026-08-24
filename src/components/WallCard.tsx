import Link from "next/link";
import { SITE } from "@/lib/site";
import { wallImage } from "@/lib/wallImage";

export interface Wall {
  slug: string;
  name: string;
  packageId: number;
  image: string;
  bookingUrl: string;
  price: string | null;
  originalName?: string;
  description?: string;
  eventUses?: string[];
  palette?: string[];
  needsReview?: boolean;
  hasDetailPage?: boolean;
}

export function WallCard({ wall }: { wall: Wall }) {
  const img = wallImage(wall.slug, wall.image);
  const media = (
    <div className="overflow-hidden rounded-lg bg-ivory aspect-square">
      {/* Self-hosted variants once `npm run images` has processed originals;
          CheckCherry's 800px CDN derivative until then. Static export, so no
          Next image server either way. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        srcSet={img.srcset}
        sizes="(min-width: 1024px) 25vw, 50vw"
        alt={`${wall.name} flower wall rental in New Jersey`}
        width={800}
        height={800}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );

  return (
    <article id={wall.slug} className="group scroll-mt-24">
      {wall.hasDetailPage ? (
        <Link href={`/flower-walls/${wall.slug}/`}>{media}</Link>
      ) : (
        media
      )}
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <h3 className="font-[family-name:var(--font-display)] text-lg">
          {wall.hasDetailPage ? (
            <Link href={`/flower-walls/${wall.slug}/`} className="hover:text-heritage">
              {wall.name}
            </Link>
          ) : (
            wall.name
          )}
        </h3>
        {wall.price ? (
          <span className="text-sm text-ink/70">from {wall.price}</span>
        ) : null}
      </div>
      {wall.description ? (
        <p className="mt-1 text-sm text-ink/70 line-clamp-2">{wall.description}</p>
      ) : null}
      <a
        href={wall.price ? wall.bookingUrl : SITE.booking.wallEnquiry}
        className="mt-2 inline-block text-sm font-medium text-heritage underline-offset-4 hover:underline"
      >
        {wall.price ? "Check availability" : "Request a quote"}
        <span className="sr-only"> for the {wall.name} flower wall</span>
      </a>
    </article>
  );
}
