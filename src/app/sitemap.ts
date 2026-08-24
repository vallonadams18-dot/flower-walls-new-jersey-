import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { BOOTHS } from "@/data/booths";
import { EVENTS } from "@/data/events";
import { LOCATIONS } from "@/data/locations";
import walls from "@/data/walls.json";

export const dynamic = "force-static";

/** Derived from the same data the pages build from, so no route can be
 *  left out of the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/flower-walls/", priority: 0.9, freq: "weekly" },
    { path: "/photo-booths/", priority: 0.9, freq: "weekly" },
    { path: "/gallery/", priority: 0.8, freq: "weekly" },
    { path: "/packages/", priority: 0.85, freq: "monthly" },
    { path: "/events/", priority: 0.6, freq: "monthly" },
    { path: "/locations/", priority: 0.6, freq: "monthly" },
    { path: "/about/", priority: 0.5, freq: "monthly" },
    { path: "/faq/", priority: 0.6, freq: "monthly" },
    { path: "/contact/", priority: 0.7, freq: "monthly" },
    ...SERVICES.map((s) => ({ path: `/${s.slug}/`, priority: 0.6, freq: "monthly" as const })),
    ...BOOTHS.map((b) => ({ path: `/photo-booths/${b.slug}/`, priority: 0.75, freq: "monthly" as const })),
    ...EVENTS.map((e) => ({ path: `/events/${e.slug}/`, priority: 0.75, freq: "monthly" as const })),
    ...LOCATIONS.map((l) => ({ path: `/locations/${l.slug}/`, priority: 0.7, freq: "monthly" as const })),
    ...(walls as { slug: string; hasDetailPage?: boolean }[])
      .filter((w) => w.hasDetailPage)
      .map((w) => ({ path: `/flower-walls/${w.slug}/`, priority: 0.7, freq: "monthly" as const })),
  ];
  return entries.map((e) => ({
    url: `${SITE.url}${e.path}`,
    lastModified: now,
    changeFrequency: e.freq,
    priority: e.priority,
  }));
}
