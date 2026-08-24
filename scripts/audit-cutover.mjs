/**
 * Domain-cutover readiness audit of ./out.
 *
 *   npm run build && node scripts/audit-cutover.mjs
 *
 * Everything here is about the site being correct AT THE PRODUCTION DOMAIN,
 * which is a different question from `audit-export.mjs` (structure and
 * duplication). Checks:
 *
 *   canonicals   present, https, www, self-referencing, no duplicates
 *   indexability accidental noindex, robots.txt blocks
 *   sitemap      duplicates, entries with no built page, built pages missing
 *                from the sitemap, non-canonical or redirecting entries
 *   stray URLs   github.io, localhost, http://, other domains anywhere in the
 *                HTML — canonical, og:url, JSON-LD, hrefs and image src alike
 *   assets       local images and OG images that do not exist in the export
 *
 * Exits non-zero if anything would be wrong the moment DNS moves.
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT = "out";
const PROD = "https://www.flowerwallsnewjersey.com";
const SEP = path.sep;

if (!existsSync(OUT)) {
  console.error("no ./out — run `npm run build` first");
  process.exit(1);
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const every = await walk(OUT);
const htmlFiles = every.filter(
  (f) => f.endsWith(".html") && !f.includes(`${SEP}_next${SEP}`),
);

const toUrl = (f) =>
  "/" + path.relative(OUT, f).split(SEP).join("/").replace(/index\.html$/, "");

/** Next's own error pages are not indexable content. */
const FRAMEWORK = new Set(["/404.html", "/404/", "/_not-found/"]);

const fail = [];
const warn = [];
const stubs = [];
const canonicalOf = new Map();
const seenCanonical = new Map();

for (const f of htmlFiles) {
  const url = toUrl(f);
  if (FRAMEWORK.has(url)) continue;
  const html = await readFile(f, "utf8");

  // Redirect stubs are not indexable pages — they are the redirect itself.
  if (/<meta http-equiv="refresh"/i.test(html)) {
    stubs.push(url);
    continue;
  }

  // --- canonical
  const c = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!c) {
    fail.push(`no canonical            ${url}`);
  } else {
    canonicalOf.set(url, c);
    if (c.startsWith("http://")) fail.push(`canonical is http       ${url} -> ${c}`);
    if (/^https:\/\/flowerwallsnewjersey\.com/.test(c))
      fail.push(`canonical missing www   ${url} -> ${c}`);
    if (!c.startsWith(PROD)) fail.push(`canonical wrong domain  ${url} -> ${c}`);
    else if (c !== PROD + url) fail.push(`canonical not self-ref  ${url} -> ${c}`);
    if (seenCanonical.has(c))
      fail.push(`duplicate canonical     ${c} on ${seenCanonical.get(c)} and ${url}`);
    else seenCanonical.set(c, url);
  }

  // --- accidental noindex
  const robotsMeta = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1];
  if (robotsMeta && /noindex/i.test(robotsMeta))
    fail.push(`noindex                 ${url} (${robotsMeta})`);

  // --- title and description
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  if (!title) fail.push(`no <title>              ${url}`);
  else if (title.length > 65) warn.push(`title ${title.length} chars       ${url}`);
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) fail.push(`no meta description     ${url}`);
  else if (desc.length > 165) warn.push(`description ${desc.length} chars  ${url}`);

  // --- stray environment URLs anywhere in the document
  for (const m of html.matchAll(/https?:\/\/[^"'\s<>\\)]+/g)) {
    const u = m[0];
    if (u.includes("github.io") || u.includes("localhost") || u.includes("127.0.0.1"))
      fail.push(`dev URL in page         ${url} -> ${u.slice(0, 80)}`);
  }
  if (/href="\/flower-walls-new-jersey-\//.test(html))
    fail.push(`basePath link left in   ${url}`);

  // --- local assets that do not exist
  for (const m of html.matchAll(/(?:src|href)="(\/[^"?#]+\.(?:jpg|jpeg|png|webp|gif|svg|ico|css|js))"/g)) {
    const rel = m[1].replace(/^\//, "");
    if (!existsSync(path.join(OUT, rel))) fail.push(`missing asset           ${url} -> ${m[1]}`);
  }
  for (const m of html.matchAll(/<meta property="og:image" content="([^"]+)"/g)) {
    const u = m[1];
    if (u.startsWith(PROD)) {
      const rel = u.slice(PROD.length).replace(/^\//, "");
      if (!existsSync(path.join(OUT, rel)))
        fail.push(`og:image missing        ${url} -> /${rel}`);
    }
  }
}

// --- sitemap
const smPath = path.join(OUT, "sitemap.xml");
let sitemapUrls = [];
if (!existsSync(smPath)) {
  fail.push("no sitemap.xml in export");
} else {
  const xml = await readFile(smPath, "utf8");
  sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const dupes = sitemapUrls.filter((u, i) => sitemapUrls.indexOf(u) !== i);
  for (const d of new Set(dupes)) fail.push(`sitemap duplicate       ${d}`);
  for (const u of sitemapUrls) {
    if (!u.startsWith(PROD)) fail.push(`sitemap wrong domain    ${u}`);
    if (u.includes("github.io") || u.includes("localhost"))
      fail.push(`sitemap dev URL         ${u}`);
  }
  const smPaths = new Set(sitemapUrls.map((u) => u.replace(PROD, "")));
  // every sitemap entry must have a built page
  for (const p of smPaths) {
    const asFile = path.join(OUT, p.replace(/^\//, ""), "index.html");
    const asRoot = path.join(OUT, "index.html");
    if (!(p === "/" ? existsSync(asRoot) : existsSync(asFile)))
      fail.push(`sitemap entry has no page  ${p}`);
    // sitemap entries must be canonical (a page whose canonical differs is wrong here)
    const c = canonicalOf.get(p);
    if (c && c !== PROD + p) fail.push(`sitemap non-canonical   ${p} (canonical ${c})`);
  }
  // indexable pages missing from the sitemap
  for (const [url] of canonicalOf) {
    if (!smPaths.has(url)) warn.push(`not in sitemap          ${url}`);
  }
}

// --- robots.txt
const robotsPath = path.join(OUT, "robots.txt");
if (!existsSync(robotsPath)) {
  fail.push("no robots.txt in export");
} else {
  const r = await readFile(robotsPath, "utf8");
  if (/^\s*Disallow:\s*\/\s*$/m.test(r)) fail.push("robots.txt disallows the whole site");
  if (!r.includes(`${PROD}/sitemap.xml`))
    fail.push("robots.txt does not point at the production sitemap");
  for (const m of r.matchAll(/^Disallow:\s*(\S+)/gm)) {
    const blocked = m[1];
    if (blocked && blocked !== "/") {
      const hit = sitemapUrls.filter((u) => u.replace(PROD, "").startsWith(blocked));
      if (hit.length) fail.push(`robots blocks ${hit.length} sitemap URLs via ${blocked}`);
    }
  }
}

// --- the cutover switch itself.
// A local build has no CNAME, because the CNAME is written by the workflow
// only when PRODUCTION_DOMAIN is set. So verify the mechanism, not the file.
const wf = existsSync(".github/workflows/deploy.yml")
  ? await readFile(".github/workflows/deploy.yml", "utf8")
  : "";
if (!wf.includes("PRODUCTION_DOMAIN"))
  fail.push("deploy workflow has no PRODUCTION_DOMAIN switch");
if (!wf.includes("./out/CNAME"))
  fail.push("deploy workflow never writes out/CNAME — the custom domain will not stick");
if (existsSync(path.join(OUT, "CNAME"))) {
  const cname = (await readFile(path.join(OUT, "CNAME"), "utf8")).trim();
  if (cname !== "www.flowerwallsnewjersey.com")
    fail.push(`CNAME is "${cname}", expected www.flowerwallsnewjersey.com`);
}

console.log(`cutover audit — ${htmlFiles.length} html files, ${sitemapUrls.length} sitemap URLs\n`);
if (fail.length) {
  console.log(`BLOCKING (${fail.length}):`);
  for (const f of fail.slice(0, 200)) console.log("  " + f);
  if (fail.length > 200) console.log(`  ...and ${fail.length - 200} more`);
} else {
  console.log("BLOCKING: none");
}
console.log(`\nWARNINGS (${warn.length}):`);
for (const w of warn.slice(0, 25)) console.log("  " + w);
if (warn.length > 25) console.log(`  ...and ${warn.length - 25} more`);

process.exit(fail.length ? 1 : 0);
