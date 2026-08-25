# DopCellar Merit Global Limited: Project Overview

This repository contains the corporate website for **DopCellar Merit Global
Limited**, a Nigerian security, electrical, automation, and infrastructure
engineering company serving banks, commercial real estate, industry, and
government.

## Stack and architecture

- **Application**: TanStack Start with React 19 and TanStack Router
- **Build**: Vite 7 with the Nitro Vite plugin
- **Styling**: Tailwind CSS v4 and the design tokens in `src/styles.css`
- **Components**: React components and shadcn/ui primitives in `src/components/`
- **Routing**: File-based routes in `src/routes/`; `src/routeTree.gen.ts` is generated
  and must not be edited manually
- **Production targets**: Vercel Functions through Nitro, or a Node.js server in Docker
- **Quality checks**: GitHub Actions runs the Bun install and production build
- **Health check**: `/api/health` returns JSON for liveness monitoring

The active Vite configuration is `vite.config.ts`. It selects Nitro's `vercel`
preset on Vercel and `node-server` for local production builds and Docker. No
Cloudflare Worker entry point or Wrangler configuration is used.

## Routes

| Route         | Purpose                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| `/`           | Home page with services, products, industries, projects, and contact CTAs |
| `/about`      | Company story, capabilities, and leadership                               |
| `/services`   | Full service catalog                                                      |
| `/products`   | Product catalog with category filters                                     |
| `/industries` | Sectors served                                                            |
| `/projects`   | Reference projects                                                        |
| `/contact`    | Contact details and inquiry flow                                          |
| `/api/health` | JSON liveness endpoint                                                    |

## Brand and contact details

- Company: **DopCellar Merit Global Limited**
- Phone: **+234 8023266785**
- WhatsApp links are centralised in `src/config/site.ts`
- Site-wide identity and navigation are centralised in `src/config/site.ts`

## Product catalog

The source of truth is `products[]` in `src/config/content.ts`. Current
categories include CCTV & Surveillance, Surveillance Kits, Surveillance
Components, Access Control, Intrusion & Alarms, and Power & Energy.

To add a product:

1. Brand its image:

   ```bash
   node scripts/brand-product-image.mjs <raw-image.jpg> src/assets/products/<slug>.jpg
   ```

   Use `--batch <input-directory> src/assets/products` for multiple images.

2. Import the image and add a product object to `src/config/content.ts`.
3. Use a lowercase, hyphenated filename such as
   `access-keypad-metal-rfid.jpg`.

The branding script uses `src/assets/brand/logo.png` when it is available and
falls back to a typographic branding strip when it is not. Product images are
placed on a 1200 x 1200 canvas.

Product descriptions are white-labelled for DopCellar Merit. Do not add vendor
names, pricing, or shipping terms unless the product content specifically
requires a model name.

Product inquiry buttons open WhatsApp with a pre-filled product request. There
is currently no quote database or online ordering system.

## Deployment and development

Run locally with:

```bash
bun install
bun run dev
```

See `DEPLOYMENT.md` for Vercel and Docker instructions, and `ENVIRONMENT.md`
for environment-variable handling.

## Planned work

- Per-product detail pages and complete specification sheets
- Quote cart or online ordering
- Persistent lead and quote management
- Search beyond category filters
