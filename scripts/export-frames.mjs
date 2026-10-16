// Exports banner frames as PNGs (1200x300) for GIF/WebP encoding.
// Usage: node scripts/export-frames.mjs [fps=30]
// Requires: npm i --no-save playwright && npx playwright install chromium
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const fps = Number(process.argv[2]) || 30;
const out = resolve("assets/banner/frames");
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 300 } });
await page.goto(pathToFileURL(resolve("assets/banner/index.html")).href + "?t=0");
await page.addStyleTag({ content: "html,body{background:transparent!important}body{display:block!important;min-height:0!important}" });
const duration = await page.evaluate(() => window.BANNER_DURATION);
const total = Math.round(duration * fps);
const el = page.locator("#banner");
for (let i = 0; i < total; i++) {
  await page.evaluate(t => window.renderFrame(t), i / fps);
  await el.screenshot({ path: `${out}/frame-${String(i).padStart(4, "0")}.png` });
}
await browser.close();
console.log(`Exported ${total} frames to ${out}`);
