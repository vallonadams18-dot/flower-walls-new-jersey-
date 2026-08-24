/**
 * Image pipeline — run AFTER dropping original photos into
 * public/walls/originals/, named by wall slug (ombre.jpg, hawaiian.png...).
 *
 *   npm i --no-save sharp
 *   npm run images
 *
 * For each original it writes, under public/walls/{slug}/:
 *   {slug}-flower-wall-rental-new-jersey-800.webp   (and -1600, if the
 *   {slug}-flower-wall-rental-new-jersey-800.avif    source is big enough)
 * and records them in src/data/image-manifest.json, which switches the site
 * from CDN fallback to self-hosted automatically. Originals are never served.
 */
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ORIG = "public/walls/originals";
const widths = [800, 1600];

let sharp;
try { sharp = (await import("sharp")).default; }
catch { console.error("sharp not installed — run: npm i --no-save sharp"); process.exit(1); }

const manifest = {};
let files = [];
try { files = await readdir(ORIG); } catch { console.error(`${ORIG}/ not found — create it and add originals first.`); process.exit(1); }

for (const f of files.filter((f) => /\.(jpe?g|png|webp|avif|heic)$/i.test(f))) {
  const slug = f.replace(/\.[^.]+$/, "").toLowerCase();
  const img = sharp(path.join(ORIG, f));
  const meta = await img.metadata();
  const dir = `public/walls/${slug}`;
  await mkdir(dir, { recursive: true });

  const made = [];
  for (const w of widths) {
    if (meta.width && meta.width < w && w !== widths[0]) continue; // never upscale
    const base = `${slug}-flower-wall-rental-new-jersey-${w}`;
    await img.clone().resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(`${dir}/${base}.webp`);
    await img.clone().resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 60 }).toFile(`${dir}/${base}.avif`);
    made.push(w);
  }
  const name = (w) => `/walls/${slug}/${slug}-flower-wall-rental-new-jersey-${w}`;
  manifest[slug] = {
    src: `${name(800)}.webp`,
    srcset: made.map((w) => `${name(w)}.webp ${w}w`).join(", "),
  };
  console.log(`${slug}: ${made.map((w) => w + "px").join(", ")} (source ${meta.width}x${meta.height})`);
}

await writeFile("src/data/image-manifest.json", JSON.stringify(manifest, null, 1));
console.log(`\nmanifest updated — ${Object.keys(manifest).length} walls now self-hosted`);
