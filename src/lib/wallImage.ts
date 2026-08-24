import manifest from "@/data/image-manifest.json";

/**
 * Resolves a wall's display image.
 *
 * Once original photos are added under public/walls/originals/ and
 * `npm run images` has generated variants, the manifest lists the wall's
 * self-hosted files and those are used. Until then the CheckCherry CDN
 * URL (an 800x800 derivative) is the fallback so the site is never
 * imageless.
 */
const local = manifest as Record<string, { src: string; srcset?: string }>;

export function wallImage(slug: string, cdnUrl: string): {
  src: string;
  srcset?: string;
  selfHosted: boolean;
} {
  const m = local[slug];
  if (m) return { ...m, selfHosted: true };
  return { src: cdnUrl, selfHosted: false };
}
