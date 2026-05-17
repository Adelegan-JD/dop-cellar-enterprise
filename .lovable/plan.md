# Dop Cellar Global Limited — Premium Corporate Website

A serious, enterprise-grade marketing site in the visual league of Siemens / Schneider Electric / ABB. Calm, technical, premium. Built with a modular architecture so future dashboards, admin portals, inventory, CRM, and AI/WhatsApp integrations slot in cleanly.

## Important note on stack

You asked for Next.js 14. Lovable projects run on **Vite + React + TypeScript + Tailwind + Framer Motion** (not Next.js). The architecture, SEO patterns, component model, and deploy story are equivalent for a marketing site, and the codebase will remain fully portable to Next.js later if needed. I'll proceed on the Lovable stack unless you say otherwise.

## Design system

- Palette: deep navy `#0A1628` base, charcoal `#111827` surfaces, white typography, muted gold `#C9A24C` accent, subtle steel-blue gradients.
- Typography: Inter (UI) + a refined serif/grotesque pair for editorial headings (e.g. Instrument Serif or Sora) — restrained, enterprise hierarchy.
- Surfaces: hairline 1px borders, soft inner glow, sparing glassmorphism on nav + cards only.
- Motion: Framer Motion — slow fades, 200–400ms eases, subtle parallax on hero, no bounce, no neon, no loud gradients.
- Dark mode primary; light mode as a polished alternate (toggle in nav).
- Semantic design tokens defined in `index.css` + `tailwind.config.ts` (no hardcoded colors in components).

## Page & section structure (single-page with anchored routes + dedicated sub-pages)

Routes:
- `/` Home (all marquee sections)
- `/services` and `/services/:slug`
- `/projects` and `/projects/:slug`
- `/industries`
- `/about`
- `/contact`

Home sections:
1. Sticky enterprise navbar (blur, scroll-aware, mobile drawer, theme toggle, "Request Consultation" CTA)
2. Hero — cinematic engineering imagery, dark overlay, animated grid, headline + sub + 2 CTAs, animated KPI strip (120+ / 15+ / 98% / 24/7)
3. About — corporate narrative + leadership card for Samuel Oladimeji Dopamu
4. Services — 10 enterprise cards with minimal line icons
5. Industries — 6 sectors with iconography
6. Why Choose Us — 7 feature blocks
7. Projects — 5 case-study cards with hover overlays + metadata
8. Process — 6-step engineering timeline
9. Testimonials — banking / facilities / developer / industrial voices
10. Contact — form (zod-validated), click-to-call, WhatsApp deep link, address, map placeholder, socials
11. Footer — overview, nav, services, contact, socials, legal row
12. Floating WhatsApp button + scroll progress bar

## Frontend architecture (built for future backend)

```text
src/
  app/               route components (pages)
  components/
    layout/          Navbar, Footer, ThemeToggle, ScrollProgress, WhatsAppFab
    sections/        Hero, About, Services, Industries, WhyUs, Projects,
                     Process, Testimonials, Contact
    ui/              shadcn primitives (Button, Card, Input, ...)
    common/          SectionHeader, StatCounter, GradientGrid, Reveal
  features/          future domains: inventory/, sales/, crm/, dashboard/,
                     chatbot/, whatsapp/, analytics/  (empty scaffolds + README)
  lib/               api client, env, seo, analytics, motion presets
  config/            site.ts (company info, nav, socials), services.ts,
                     projects.ts, industries.ts, testimonials.ts, process.ts
  hooks/             useScrollProgress, useReducedMotion, useTheme
  types/             shared TS types
  assets/            generated imagery
```

- All marketing content lives in typed config files so a future CMS/Cloud backend can swap them out without touching components.
- `features/` folders are pre-scaffolded for inventory, sales, CRM, dashboards, chatbot, WhatsApp, analytics — each with a README describing the integration contract.
- SEO: per-route `<title>`, meta description, canonical, OpenGraph, JSON-LD (`Organization` + `LocalBusiness` with full NAP), single H1 per page, semantic HTML, alt text, lazy images, responsive viewport.

## Imagery

Generated via the image tool at premium tier: industrial electrical rooms, server/network racks, CCTV/control room, structural construction, banking automation, port-harcourt-style commercial facility, leadership portrait placeholder. Saved under `src/assets/` and imported as ES modules.

## Company data wired in

Name, tagline, manager, address (4 Creek View Drive, Woji, Port Harcourt), phone, email, and all six socials (Instagram, Facebook, LinkedIn, YouTube, X, plus WhatsApp via phone) centralized in `config/site.ts`.

## Out of scope for this build

- Real backend (kept frontend-only; Lovable Cloud can be enabled later for forms, auth, inventory, etc.)
- Real CMS (config-file driven for now)
- Real map embed (placeholder block with location metadata)

## Deliverable

A production-ready, SEO-optimized, fully responsive enterprise marketing site with a modular structure that future dashboards, admin portals, and AI/automation features can extend without refactoring.
