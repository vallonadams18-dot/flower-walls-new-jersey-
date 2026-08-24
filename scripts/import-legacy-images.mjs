/**
 * Downloads the old homepage's images from the live WordPress site.
 * The site's hosting fronts images with a JavaScript anti-bot challenge
 * ("One moment, please..."), so a plain fetch gets an HTML page. A real
 * headless browser passes the challenge; its cookies then let direct
 * requests through. Every saved file is validated by magic bytes — never
 * trust content-type from a challenged host.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const { images } = JSON.parse(await readFile("src/data/legacy-images.json", "utf8"));
await mkdir("public/legacy", { recursive: true });

const isImage = (buf) =>
  (buf[0] === 0xff && buf[1] === 0xd8) || // JPEG
  (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) || // PNG
  (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46); // WEBP/RIFF

const browser = await chromium.launch();
const ctx = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
});
const page = await ctx.newPage();

// Solve the challenge once on the site root; cookies persist on the context.
await page.goto("https://www.flowerwallsnewjersey.com/", { waitUntil: "load", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(9000);

let ok = 0, fail = [];
for (const img of images) {
  let saved = false;
  for (let attempt = 0; attempt < 2 && !saved; attempt++) {
    const resp = await ctx.request.get(img.src, { timeout: 30000 }).catch(() => null);
    if (resp && resp.ok()) {
      const buf = Buffer.from(await resp.body());
      if (buf.length > 5000 && isImage(buf)) {
        await writeFile(`public/legacy/${img.file}`, buf);
        console.log(`ok  ${img.file}  ${(buf.length / 1024).toFixed(0)} KB`);
        ok++; saved = true; break;
      }
    }
    // challenge again? navigate to the image itself, wait, retry
    await page.goto(img.src, { timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(8000);
  }
  if (!saved) { console.log(`FAIL ${img.file}`); fail.push(img.file); }
}
await browser.close();
console.log(`\n${ok}/${images.length} imported${fail.length ? "; failed: " + fail.join(", ") : ""}`);
if (ok === 0) process.exit(1);
