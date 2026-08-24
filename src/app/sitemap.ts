import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import walls from "@/data/walls.json";

export const dynamic = "force-static";

/** Every route the site actually builds. Kept derived from the same data the
 *  pages use, so a new service page cannot be left out of the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/flower-walls/", priority: 0.9, freq: "weekly" },
    { path: "/about/", priority: 0.6, freq: "monthly" },
    { path: "/faq/", priority: 0.6, freq: "monthly" },
    { path: "/contact/", priority: 0.7, freq: "monthly" },
    ...SERVICES.map((s) => ({
      path: `/${s.slug}/`,
      priority: 0.8,
      freq: "monthly" as const,
    })),
    ...(walls as { slug: string; hasDetailPage?: boolean }[])
      .filter((w) => w.hasDetailPage)
      .map((w) => ({
        path: `/flower-walls/${w.slug}/`,
        priority: 0.7,
        freq: "monthly" as const,
      })),
  ];
  return entries.map((e) => ({
    url: `${SITE.url}${e.path}`,
    lastModified: now,
    changeFrequency: e.freq,
    priority: e.priority,
  }));
}
