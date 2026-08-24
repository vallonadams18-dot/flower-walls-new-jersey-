/**
 * Pre-ship audit of ./out — run after `npm run build`, before committing.
 *
 *   node scripts/audit-export.mjs
 *
 * Checks the things that actually went wrong on sites like this one:
 *
 *   1. Broken internal links      — an <a href> to a page the export lacks
 *   2. Missing local images       — a <img src> to a file the export lacks
 *   3. Duplicate <title>          — two pages competing for the same query
 *   4. Duplicate meta description
 *   5. H1 count                   — exactly one per page
 *   6. Orphans                    — a page nothing else links to
 *   7. Repeated prose             — the doorway-page test. Any sentence of
 *                                   real length appearing on more than one
 *                                   page is reported, because "reusable
 *                                   structure, not reusable prose" is the
 *                                   rule that keeps a coverage grid legitimate.
 *
 * Exits non-zero if anything in 1-6 fails. Repeated prose is reported but does
 * not fail the build: specifications legitimately repeat, and a human should
 * read the list rather than a threshold deciding.
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT = "out";
if (!existsSync(OUT)) {
  console.error("no ./out — run `npm run build` first");
  process.exit(1);
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = await walk(OUT);
/** "out/gallery/index.html" -> "/gallery/" */
const toUrl = (f) =>
  "/" + path.relative(OUT, f).replace(/\\/g, "/").replace(/index\.html$/, "");

const pages = new Map();
for (const f of files) {
  const html = await readFile(f, "utf8");
  pages.set(toUrl(f), { f, html });
}

/** Next's own error pages — not content, and not orphans. */
const FRAMEWORK = new Set(["/404.html", "/404/", "/_not-found/"]);
for (const url of [...pages.keys()]) {
  if (FRAMEWORK.has(url) || url.includes("/_next/")) pages.delete(url);
}

const known = new Set(pages.keys());
const problems = [];
const linkedTo = new Set();

const titles = new Map();
const descs = new Map();
const sentences = new Map();

for (const [url, { html }] of pages) {
  // --- links
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let href = m[1];
    if (href.startsWith("/_next/") || /\.[a-z0-9]{2,5}$/i.test(href)) continue;
    if (!href.endsWith("/")) href += "/";
    linkedTo.add(href);
    if (!known.has(href) && !FRAMEWORK.has(href)) problems.push(`broken link  ${url} -> ${href}`);
  }

  // --- images
  for (const m of html.matchAll(/<img[^>]+src="(\/[^"]+)"/g)) {
    const rel = m[1].replace(/^\//, "").split("?")[0];
    if (!existsSync(path.join(OUT, rel))) {
      problems.push(`missing image  ${url} -> ${m[1]}`);
    }
  }

  // --- title / description / h1
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  if (title) {
    if (titles.has(title)) problems.push(`duplicate title  "${title}"  ${titles.get(title)} & ${url}`);
    else titles.set(title, url);
  }

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if (desc) {
    if (descs.has(desc)) problems.push(`duplicate description  ${descs.get(desc)} & ${url}`);
    else descs.set(desc, url);
  }

  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) problems.push(`${h1s} h1 tags  ${url}`);

  // --- prose repetition
  // Only the page's own content: the header and footer repeat on every page
  // by design, and would drown out the duplication that actually matters.
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
  const text = main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ");
  for (const raw of text.split(/(?<=[.?!])\s+/)) {
    const s = raw.trim();
    // long enough to be prose rather than a label or a spec fragment
    if (s.length < 70) continue;
    if (!sentences.has(s)) sentences.set(s, []);
    sentences.get(s).push(url);
  }
}

// --- orphans
for (const url of known) {
  if (url === "/") continue;
  if (!linkedTo.has(url)) problems.push(`orphan  ${url}  (nothing links to it)`);
}

const repeated = [...sentences.entries()].filter(([, urls]) => new Set(urls).size > 1);

console.log(`audited ${pages.size} pages\n`);

if (problems.length) {
  console.log(`${problems.length} problem(s):`);
  for (const p of problems.slice(0, 60)) console.log("  " + p);
  if (problems.length > 60) console.log(`  ...and ${problems.length - 60} more`);
} else {
  console.log("no broken links, missing images, duplicate titles, h1 or orphan problems");
}

console.log(`\nsentences appearing on more than one page: ${repeated.length}`);
for (const [s, urls] of repeated.slice(0, 15)) {
  console.log(`  ${new Set(urls).size} pages  "${s.slice(0, 90)}${s.length > 90 ? "..." : ""}"`);
}
if (repeated.length > 15) console.log(`  ...and ${repeated.length - 15} more`);

process.exit(problems.length ? 1 : 0);
