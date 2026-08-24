/**
 * Downloads the old WordPress homepage's images from the live site into
 * public/legacy/. Runs in CI (the import-legacy-images workflow), where the
 * network can reach the domain. Tries the export's recorded path first, then
 * common WordPress upload-year fallbacks, since the export does not always
 * record the original upload folder.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";

const { images } = JSON.parse(await readFile("src/data/legacy-images.json", "utf8"));
await mkdir("public/legacy", { recursive: true });

const YEARS = ["2024/08", "2026/08", "2023/01", "2022/12", "2025/01"];
let ok = 0, fail = [];
for (const img of images) {
  const name = img.src.split("/").pop();
  const candidates = [img.src, ...YEARS.map((y) => `https://www.flowerwallsnewjersey.com/wp-content/uploads/${y}/${name}`)];
  let done = false;
  for (const url of [...new Set(candidates)]) {
    const r = await fetch(url).catch(() => null);
    if (r && r.ok) {
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length > 1000) {
        await writeFile(`public/legacy/${img.file}`, buf);
        console.log(`ok  ${img.file}  (${(buf.length / 1024).toFixed(0)} KB from ${url})`);
        ok++; done = true; break;
      }
    }
  }
  if (!done) { console.log(`FAIL ${name}`); fail.push(name); }
}
console.log(`\n${ok}/${images.length} imported${fail.length ? "; missing: " + fail.join(", ") : ""}`);
if (ok === 0) process.exit(1);
