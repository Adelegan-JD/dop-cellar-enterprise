# DopCellar Merit Global Limited — Project Overview

This is the corporate website for **DopCellar Merit Global Limited** — security,
electrical, and infrastructure engineering serving banks, commercial real estate,
industry, and government across Nigeria.

## Tech stack

- **Framework**: TanStack Start (React 19 + Vite 7)
- **Styling**: Tailwind CSS v4 via `src/styles.css`, semantic design tokens (dark theme, gold accent)
- **Components**: shadcn/ui in `src/components/ui/`
- **Routing**: File-based in `src/routes/` (auto-generated `routeTree.gen.ts` — never edit)
- **Deployment**: Vercel + Docker (see `DEPLOYMENT.md`, `ENVIRONMENT.md`)
- **CI/CD**: GitHub Actions (`.github/workflows/`) — build verification + Vercel preview deploys
- **Health**: `/api/health` endpoint for Docker/Kubernetes liveness probes

## Pages

| Route         | Purpose                                                                                |
| ------------- | -------------------------------------------------------------------------------------- |
| `/`           | Home — hero, services, products (first 6), industries, projects, testimonials, contact |
| `/about`      | Company story, capabilities, leadership                                                |
| `/services`   | Full service catalog (10 disciplines)                                                  |
| `/products`   | Full product catalog with category filters                                             |
| `/industries` | Sectors served                                                                         |
| `/projects`   | Reference projects                                                                     |
| `/contact`    | Contact form + WhatsApp / phone                                                        |
| `/api/health` | JSON liveness endpoint                                                                 |

## Brand

- Company: **DopCellar Merit Global Limited**
- Phone: **+234 909 811 1974**
- WhatsApp link format: `https://api.whatsapp.com/send?phone=2349098111974&text=…`
- All identity centralised in `src/config/site.ts`

## Product catalog

Source of truth: `src/config/content.ts` → `products[]`. Categories currently in
use: CCTV & Surveillance, Surveillance Kits, Surveillance Components, Access
Control, Intrusion & Alarms, Power & Energy.

### Add a new product (3 steps)

1. **Brand the image**

   ```bash
   node scripts/brand-product-image.mjs <raw-image.jpg> \
        src/assets/products/<slug>.jpg
   ```

   Or batch:

   ```bash
   node scripts/brand-product-image.mjs --batch <inDir> src/assets/products
   ```

   This wraps the image on a 1200×1200 white canvas and adds the dark
   **DopCellar Merit Global Limited** branding strip across the bottom.

2. **Import + register** in `src/config/content.ts`:

   ```ts
   import myProduct from "../assets/products/<slug>.jpg";
   // …
   {
     slug: "my-product",
     name: "My Product",
     category: "CCTV & Surveillance",   // must match an existing category
     image: myProduct,
     shortDescription: "…",
     specifications: ["…", "…"],
     useCases: ["…"],
   }
   ```

3. **Done.** Home page picks up the first 6 automatically; `/products` shows
   all with category filter chips.

### Logo file (for branding strip)

Drop your final logo PNG at `src/assets/brand/logo.png`. The branding script
auto-detects it and composites it left of the text. If absent, a clean
typographic-only strip is used — the build never breaks.

### Naming convention

`<category-prefix>-<model>-<variant>.jpg` — lowercase, hyphens, no spaces.
Examples: `alarm-kit-h5-wifi-gsm.jpg`, `power-station-ecoflow-1kva.jpg`,
`access-keypad-metal-rfid.jpg`.

## Catalog policy

Do **not** include vendor names (Sesame Access, OEM brands beyond model names
the customer expects, e.g. EcoFlow), pricing, or shipping terms in product
descriptions. The catalog is white-labelled as DopCellar Merit's own offering.

## Customer quote flow

Each product card has a **Request invoice** button that opens WhatsApp with a
pre-filled message containing the product name. No backend, no forms — direct
to sales WhatsApp. Will be replaced with proper quote system when Lovable
Cloud / database is added.

## Deployment

- **Vercel** — auto-deploys on push to main. PRs get a preview deploy via
  `.github/workflows/vercel-preview.yml` (requires `VERCEL_TOKEN`,
  `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` repo secrets).
- **Docker** — `Dockerfile` builds the production bundle and ships with a
  `HEALTHCHECK` against `/api/health`.
- **CI** — `.github/workflows/ci.yml` runs `bun install` + `bun run build` on
  every push/PR.

See `DEPLOYMENT.md` and `ENVIRONMENT.md` for env var setup and platform-specific
guidance.

## Future / not yet built

- Per-product detail pages with full spec sheets
- Quote cart / online ordering
- Lovable Cloud backend (auth, leads database, admin CMS)
- Search beyond category filters
