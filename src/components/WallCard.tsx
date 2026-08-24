import Link from "next/link";
import { wallImage } from "@/lib/wallImage";
import { displayName } from "@/data/wall-renames";

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

/**
 * A wall in a grid. The whole card is one link: photograph and name both lead
 * to the wall's own page where it has one, and straight into its CheckCherry
 * booking flow where it does not. Every wall in walls.json carries a
 * bookingUrl, so no card is ever a dead end.
 *
 * No price is shown. `price` stays on the record because the catalogue data
 * carries it, but nothing on the site renders it.
 */
export function WallCard({ wall }: { wall: Wall }) {
  const img = wallImage(wall.slug, wall.image);
  const name = displayName(wall.name);
  const href = wall.hasDetailPage
    ? `/flower-walls/${wall.slug}/`
    : wall.bookingUrl;
  const cta = wall.hasDetailPage ? "View details" : "Check availability";

  const inner = (
    <>
      <div className="overflow-hidden rounded-lg bg-ivory aspect-square">
        {/* Self-hosted variants once `npm run images` has processed originals;
            CheckCherry's 800px CDN derivative until then. Static export, so no
            Next image server either way. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          srcSet={img.srcset}
          sizes="(min-width: 1024px) 25vw, 50vw"
          alt={`${name} flower wall rental in New Jersey`}
          width={800}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg group-hover:text-heritage transition-colors">
        {name}
      </h3>
      {wall.description ? (
        <p className="mt-1 text-sm text-ink/70 line-clamp-2">{wall.description}</p>
      ) : null}
      <span className="mt-2 inline-block text-sm font-medium text-heritage underline-offset-4 group-hover:underline">
        {cta}
        <span className="sr-only"> for the {name} flower wall</span>
      </span>
    </>
  );

  return (
    <article id={wall.slug} className="group scroll-mt-24">
      {wall.hasDetailPage ? (
        <Link href={href} className="block">
          {inner}
        </Link>
      ) : (
        <a href={href} className="block">
          {inner}
        </a>
      )}
    </article>
  );
}
