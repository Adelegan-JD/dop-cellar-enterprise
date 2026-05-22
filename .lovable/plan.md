# Catalog expansion + T=0 project knowledge

## What you'll get

1. **Logo-branded product images** — every catalog image gets a bottom-center strip carrying the DopCellar Merit logo + company name.
2. **New products extracted from the 3 PDFs** (Alarm Kits, Access Controller Keypads/QR, Access Readers/Exit Button) — image + description only, no prices.
3. **New "Power & Energy Solutions" category** with the 3 power-station photos you uploaded (EcoFlow 1kVA, 300W portable generator, EcoFlow River 300W).
4. **Project knowledge captured at T=0** — both internal agent memory and a readable `PROJECT_OVERVIEW.md` in the repo.

## Image pipeline

For every new product image:

1. Extract from PDF (or use uploaded photo).
2. Crop tightly to the product, white background.
3. Composite a bottom-center branding strip:

   ```text
   ┌──────────────────────────────┐
   │                              │
   │        [ product ]           │
   │                              │
   ├──────────────────────────────┤
   │  [logo]  DopCellar Merit     │  ← branding strip
   └──────────────────────────────┘
   ```

4. Save as `src/assets/products/<descriptive-slug>.jpg` (e.g. `alarm-kit-h5-wifi-gsm.jpg`, `power-station-ecoflow-1kva.jpg`).
5. Register in `src/config/content.ts` → `products[]` with name, category, description, specs, use-cases.

**Naming convention:** `<category-prefix>-<model>-<variant>.jpg` — lowercase, hyphen-separated, no spaces.

## New product categories

- **Power & Energy Solutions** — 3 portable power stations (from your uploads).
- **Intrusion & Alarms** — expanded with GSM/WiFi alarm kits from the Alarm Systems PDF (H5, H6, SA6PB/SA6PW, SA5P, SX1, SA6C, SA7M2B).
- **Access Control** — expanded with keypads, QR readers, card readers, exit buttons from the two Access PDFs.

I will exclude all pricing, vendor (Sesame Access), and shipping info — only product name, image, and technical description.

## UI changes

- `Products.tsx` already supports category badges — no component changes needed.
- Category filter chips added to `/products` page so visitors can filter by Surveillance / Access Control / Alarms / Power & Energy.
- Home page still shows the first 6 (highlights mix from each category).

## Project knowledge (T=0)

**`mem://index.md`** — Core rules + memory references covering:
- Company identity (name, phone, WhatsApp link format)
- Brand: dark theme, gold accent, hairline borders, Apple-like minimal
- Tech stack: TanStack Start, Vite, Tailwind, shadcn, no Cloud yet
- Catalog system: products live in `src/config/content.ts`, images in `src/assets/products/`
- Deployment: Vercel + Docker, CI via GitHub Actions, health endpoint at `/api/health`
- Image rule: every catalog image must carry the bottom-center DopCellar Merit branding strip

**`PROJECT_OVERVIEW.md`** (repo root) — human-readable doc:
- What the site is
- Pages and what each does
- How to add a new product (3-step guide pointing at `content.ts`)
- How the image branding pipeline works (so you or another dev can re-run it on new images)
- Deployment + environment refs (links to existing `DEPLOYMENT.md` / `ENVIRONMENT.md`)

## Technical notes

- Image compositing done in a Node script using `sharp` (already in lockfile transitively via Vite — will install if missing). One-shot script at `scripts/brand-product-image.mjs` so you can re-run it on future uploads.
- Logo file expected at `src/assets/brand/logo.png` (from the `cellar3` upload you mentioned).
- If the uploaded logo isn't found at build time, the script falls back to a text-only branding strip in brand gold so the build never breaks.

## Out of scope (next time)

- Per-product detail pages with full spec sheets
- Search / filtering beyond category chips
- Online quote / cart flow (currently WhatsApp invoice request, unchanged)
