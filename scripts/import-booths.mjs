/**
 * Photo booth lineup — imports the booth products, photography and feature
 * lists from the Magic Mirror Brooklyn site.
 *
 *   npm i --no-save sharp
 *   node scripts/import-booths.mjs ../claude\ desk
 *
 * Writes resized photography into public/img/booths/<slug>/ and regenerates
 * src/data/booths.ts.
 *
 * The six booths this site already had keep their own URLs and their own
 * New Jersey copy — only photography and feature lists are taken from the
 * matching Brooklyn product. The rest are new, with their copy carried over
 * and its New York references rewritten for New Jersey.
 *
 * No prices and no booking URLs are imported. Booth CTAs point at the
 * existing enquiry form until real booking links are supplied.
 */
import sharp from "sharp";
import { mkdir, writeFile, readFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SRC_REPO = process.argv[2] || "../claude desk";
const SRC_IMG = path.join(SRC_REPO, "public/img");
const OUT_IMG = "public/img/booths";

/**
 * [ brooklyn slug, new-jersey slug, display name, short nav label ]
 * The first six keep URLs this site already publishes.
 */
const MAP = [
  ["360-photo-booth", "360-photo-booth", "Infinity 360 Booth", "360 Booth"],
  ["mirror-photo-booth", "mirror-photo-booth", "Magic Mirror Booth", "Mirror Booth"],
  ["glam-booth", "glam-photo-booth", "Glam Booth", "Glam Booth"],
  ["branded-photo-booth", "branded-photo-booth", "Branded Booth", "Branded Booth"],
  ["enclosed-photo-booth", "digital-photo-booth", "Digital Booth", "Digital Booth"],
  ["vogue-booth", "video-booth", "Video Booth", "Video Booth"],
  ["mirror-x-photo-booth", "mirror-x-photo-booth", "Mirror X Booth", "Mirror X"],
  ["roaming-photo-booth", "roaming-photo-booth", "Roaming Booth", "Roaming Booth"],
  ["green-screen-photo-booth", "green-screen-photo-booth", "Green Screen Booth", "Green Screen"],
  ["mosaic-wall", "mosaic-wall", "Mosaic Wall", "Mosaic Wall"],
  ["ai-photo-booth", "ai-photo-booth", "AI Photo Booth", "AI Booth"],
  ["glambot", "glambot", "Glambot", "Glambot"],
  ["magazine-booth", "magazine-booth", "Magazine Booth", "Magazine Booth"],
  ["gif-booth", "gif-booth", "GIF Booth", "GIF Booth"],
  ["3d-slider-booth", "3d-slider-booth", "3D Slider Booth", "3D Slider"],
  ["studio-booth", "studio-booth", "Studio Booth", "Studio Booth"],
];

/** Slugs whose New Jersey copy is already written and must not be replaced. */
const KEEP_COPY = new Set([
  "360-photo-booth",
  "mirror-photo-booth",
  "glam-photo-booth",
  "branded-photo-booth",
  "digital-photo-booth",
  "video-booth",
]);

/** Rewrites the source site's New York references for New Jersey. */
function nj(text) {
  if (typeof text !== "string") return text;
  return text
    .replace(/\bNew York City\b/g, "New Jersey")
    .replace(/\bNYC\b/g, "New Jersey")
    .replace(/\bNew York\b/g, "New Jersey")
    .replace(/\bBrooklyn\b/g, "New Jersey")
    .replace(/\bManhattan\b/g, "Newark")
    .replace(/\bQueens\b/g, "Jersey City")
    .replace(/\bStaten Island\b/g, "Hoboken")
    .replace(/\bthe Bronx\b/g, "Montclair")
    .replace(/\bBronx\b/g, "Montclair")
    .replace(/\bLong Island\b/g, "the Jersey Shore")
    .replace(/\bWestchester\b/g, "Morristown")
    .replace(/\bin New Jersey, New Jersey\b/g, "in New Jersey")
    .replace(/New Jersey, New Jersey/g, "New Jersey");
}

const raw = JSON.parse(await readFile(path.join(SRC_REPO, "src/data/booths.json"), "utf8"));
const source = Array.isArray(raw) ? raw : Object.values(raw);
const bySlug = new Map(source.map((b) => [b.slug, b]));

const existing = existsSync("src/data/booths.ts")
  ? await readFile("src/data/booths.ts", "utf8")
  : "";

/** Pulls the hand-written `sections` array for a slug out of the current file. */
function currentSections(slug) {
  // Matches both the hand-written form (slug: "x") and the form this script
  // emits ("slug": "x"), so re-running does not lose the kept copy.
  const at = [`slug: "${slug}"`, `"slug": "${slug}"`]
    .map((needle) => existing.indexOf(needle))
    .filter((i) => i >= 0)
    .sort((a, b) => a - b)[0];
  if (at === undefined) return null;
  const from = existing.indexOf("sections: [", at);
  if (from < 0) return null;
  // walk brackets to find the matching close
  let depth = 0;
  for (let i = existing.indexOf("[", from); i < existing.length; i++) {
    if (existing[i] === "[") depth++;
    else if (existing[i] === "]") {
      depth--;
      if (depth === 0) return existing.slice(existing.indexOf("[", from), i + 1);
    }
  }
  return null;
}

async function emit(srcName, destDir, destName, width) {
  const from = path.join(SRC_IMG, srcName);
  if (!existsSync(from)) return null;
  await mkdir(destDir, { recursive: true });
  // Animated GIFs and anything sharp would flatten get copied untouched.
  if (/\.(gif|webp)$/i.test(srcName)) {
    const out = path.join(destDir, destName + path.extname(srcName));
    await copyFile(from, out);
    return "/" + out.replace(/\\/g, "/").replace(/^public\//, "");
  }
  const out = path.join(destDir, destName + ".jpg");
  await sharp(from)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
  return "/" + out.replace(/\\/g, "/").replace(/^public\//, "");
}

const booths = [];
let copied = 0;

for (const [srcSlug, slug, name, nav] of MAP) {
  const b = bySlug.get(srcSlug);
  if (!b) {
    console.warn("!! no source booth for", srcSlug);
    continue;
  }
  const dir = path.join(OUT_IMG, slug);

  const heroSrc = b.heroImg?.src?.split("/").pop();
  const hero = heroSrc ? await emit(heroSrc, dir, "hero", 1200) : null;
  if (hero) copied++;

  const gallery = [];
  for (const [i, g] of (b.gallery || []).slice(0, 3).entries()) {
    const file = g.src?.split("/").pop();
    if (!file) continue;
    const url = await emit(file, dir, `photo-${i + 1}`, 800);
    if (url) {
      gallery.push({ src: url, alt: nj(g.alt) || `${name} at a New Jersey event` });
      copied++;
    }
  }

  const kept = KEEP_COPY.has(slug) ? currentSections(slug) : null;
  const sections =
    kept ||
    JSON.stringify(
      (b.prose || []).map((p) => ({
        h: nj(p.heading),
        p: (p.paragraphs || []).map(nj),
      })),
      null,
      6,
    );

  booths.push({
    slug,
    name,
    nav,
    meta: {
      title: `${name} Rental New Jersey`,
      description: nj(b.meta?.description || b.heroSub || "").slice(0, 158),
    },
    h1: nj(b.h1 || `${name} rental in New Jersey`),
    lede: nj(b.heroSub || ""),
    image: hero ? { src: hero, alt: nj(b.heroImg?.alt) || `${name} rental in New Jersey` } : null,
    included: (b.included || []).map(nj),
    includedLabel: nj(b.includedLabel || `Included with every ${name.toLowerCase()} rental`),
    bestFor: (b.bestFor || []).map(nj),
    gallery,
    sectionsRaw: sections,
  });
  console.log(slug.padEnd(26), hero ? "hero" : "NO HERO", `| ${gallery.length} gallery`);
}

const body = booths
  .map((b) => {
    const { sectionsRaw, ...rest } = b;
    const fields = JSON.stringify(rest, null, 2)
      .split("\n")
      .map((l, i) => (i === 0 ? "  {" : "  " + l))
      .join("\n")
      .replace(/^\s*\{\s*$/m, "  {")
      .replace(/\n\s*\}$/, "");
    return `${fields},\n    sections: ${sectionsRaw.replace(/\n/g, "\n    ")},\n  }`;
  })
  .join(",\n");

await writeFile(
  "src/data/booths.ts",
  `/**
 * Photo booth lineup. Products, photography and feature lists come from the
 * Magic Mirror Brooklyn catalogue via scripts/import-booths.mjs — edit that,
 * not this file.
 *
 * No prices and no per-booth booking URLs: the CTA points at the general
 * enquiry form until real booking links are supplied.
 */
export interface Booth {
  slug: string;
  name: string;
  nav: string;
  meta: { title: string; description: string };
  h1: string;
  lede: string;
  image: { src: string; alt: string } | null;
  included: string[];
  includedLabel: string;
  bestFor: string[];
  gallery: { src: string; alt: string }[];
  sections: { h: string; p: string[] }[];
}

export const BOOTHS: Booth[] = [
${body},
];

export const getBooth = (slug: string) => BOOTHS.find((b) => b.slug === slug);
`,
  "utf8",
);

console.log(`\n${booths.length} booths, ${copied} images -> ${OUT_IMG}`);
