#!/usr/bin/env node
/**
 * Brand a product image with the DopCellar Merit Global Limited bottom strip.
 *
 * Usage:
 *   node scripts/brand-product-image.mjs <input.jpg> <output.jpg>
 *   node scripts/brand-product-image.mjs --batch <inputDir> <outputDir>
 *
 * The script normalises every image to a 1200x1200 canvas with a white
 * background, fits the product centered, and overlays a dark bottom strip
 * with the company logo (if found at src/assets/brand/logo.png) + name.
 *
 * Logo fallback: if no logo file exists, a typographic strip is used.
 * This keeps the build green and lets you drop the real logo in later
 * without changing this script.
 */
import sharp from "sharp";
import { readdir, mkdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const LOGO_PATH = path.join(ROOT, "src/assets/brand/logo.png");

const CANVAS = 1200;
const STRIP_H = 140;
const PAD = 60;
const STRIP_BG = { r: 14, g: 14, b: 16, alpha: 1 }; // matches site --background
const GOLD = "#c9a84c"; // matches site --gold

async function fileExists(p) {
  try {
    await access(p, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

function brandStripSvg(hasLogo) {
  // Width = CANVAS, height = STRIP_H. Logo is composited separately.
  const textX = hasLogo ? 220 : 60;
  return Buffer.from(`
    <svg width="${CANVAS}" height="${STRIP_H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="rgb(14,14,16)"/>
      <text x="${textX}" y="62" font-family="Georgia, 'Times New Roman', serif"
            font-size="34" font-weight="600" fill="#ffffff" letter-spacing="0.5">
        DopCellar Merit Global Limited
      </text>
      <text x="${textX}" y="100" font-family="Inter, Arial, sans-serif"
            font-size="20" fill="${GOLD}" letter-spacing="3" text-transform="uppercase">
        SECURITY · ELECTRICAL · INFRASTRUCTURE
      </text>
    </svg>
  `);
}

async function brand(input, output) {
  const hasLogo = await fileExists(LOGO_PATH);

  // Fit product into the upper area (above the strip)
  const productArea = CANVAS - STRIP_H;
  const product = await sharp(input)
    .resize({
      width: CANVAS - PAD * 2,
      height: productArea - PAD * 2,
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .flatten({ background: "#ffffff" })
    .toBuffer();
  const productMeta = await sharp(product).metadata();

  const composites = [
    {
      input: product,
      left: Math.round((CANVAS - productMeta.width) / 2),
      top: Math.round((productArea - productMeta.height) / 2),
    },
    { input: brandStripSvg(hasLogo), left: 0, top: CANVAS - STRIP_H },
  ];

  if (hasLogo) {
    const logo = await sharp(LOGO_PATH)
      .resize({ height: STRIP_H - 40, fit: "inside" })
      .toBuffer();
    const logoMeta = await sharp(logo).metadata();
    composites.push({
      input: logo,
      left: 40,
      top: CANVAS - STRIP_H + Math.round((STRIP_H - logoMeta.height) / 2),
    });
  }

  await sharp({
    create: {
      width: CANVAS,
      height: CANVAS,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite(composites)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(output);

  console.log(`  branded → ${path.relative(ROOT, output)}`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args[0] === "--batch") {
    const [, inDir, outDir] = args;
    await mkdir(outDir, { recursive: true });
    const files = (await readdir(inDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
    console.log(`Branding ${files.length} image(s) from ${inDir} → ${outDir}`);
    for (const f of files) {
      const name = f.replace(/\.(jpe?g|png|webp)$/i, ".jpg");
      await brand(path.join(inDir, f), path.join(outDir, name));
    }
  } else if (args.length === 2) {
    await brand(args[0], args[1]);
  } else {
    console.error(
      "Usage:\n  brand-product-image.mjs <input> <output>\n  brand-product-image.mjs --batch <inDir> <outDir>",
    );
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
