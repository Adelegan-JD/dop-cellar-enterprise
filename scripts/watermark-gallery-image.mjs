#!/usr/bin/env node
/**
 * Watermark a gallery photo with a subtle DopCellar Merit logo + wordmark.
 * Preserves original aspect ratio; downscales to max 1600px on the long edge.
 *
 * Usage: node scripts/watermark-gallery-image.mjs --batch <inDir> <outDir>
 */
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const LOGO = path.join(ROOT, "src/assets/brand/logo.png");
const MAX = 1600;

function wmSvg(w) {
  const stripW = Math.min(520, Math.round(w * 0.55));
  const stripH = 64;
  return Buffer.from(`
  <svg width="${stripW}" height="${stripH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stop-color="rgba(14,14,16,0)"/>
        <stop offset="0.2" stop-color="rgba(14,14,16,0.72)"/>
        <stop offset="1" stop-color="rgba(14,14,16,0.86)"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="8" fill="url(#g)"/>
    <text x="76" y="28" font-family="Georgia, serif" font-size="17" font-weight="600" fill="#ffffff">DopCellar Merit Global Ltd</text>
    <text x="76" y="50" font-family="Inter, Arial, sans-serif" font-size="11" fill="#c9a84c" letter-spacing="2">SECURITY · ELECTRICAL · INFRASTRUCTURE</text>
  </svg>`);
}

async function wm(inp, out) {
  const img = sharp(inp).rotate();
  const meta = await img.metadata();
  const scale = Math.min(1, MAX / Math.max(meta.width, meta.height));
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const base = await img.resize(w, h).jpeg({ quality: 82, mozjpeg: true }).toBuffer();

  const strip = wmSvg(w);
  const stripMeta = await sharp(strip).metadata();
  const logo = await sharp(LOGO).resize({ height: 48, fit: "inside" }).toBuffer();
  const logoMeta = await sharp(logo).metadata();

  const margin = 20;
  const stripLeft = w - stripMeta.width - margin;
  const stripTop = h - stripMeta.height - margin;

  await sharp(base)
    .composite([
      { input: strip, left: stripLeft, top: stripTop },
      { input: logo, left: stripLeft + 12, top: stripTop + Math.round((stripMeta.height - logoMeta.height) / 2) },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log("  wm →", path.relative(ROOT, out));
}

const [, , flag, inDir, outDir] = process.argv;
if (flag !== "--batch") {
  console.error("Usage: watermark-gallery-image.mjs --batch <inDir> <outDir>");
  process.exit(1);
}
await mkdir(outDir, { recursive: true });
const files = (await readdir(inDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
for (const f of files) {
  const name = f.replace(/\.(jpe?g|png|webp)$/i, ".jpg");
  await wm(path.join(inDir, f), path.join(outDir, name));
}
