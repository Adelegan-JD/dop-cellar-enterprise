
# DopCellar — Enterprise Redesign Blueprint

A design-only deliverable. No code will be written in this phase. Once approved, we implement it section by section in build mode.

---

## Task 1 — Hero Redesign

**Positioning idea:** DopCellar keeps mission-critical businesses running. The hero should feel like a control room at rest — quiet, confident, in command.

**Headline (H1):**
> "Your operations never stop. Neither do we."

**Alternative options:**
- "Uptime is engineered — not hoped for."
- "The infrastructure your business runs on, engineered as one system."

**Supporting paragraph (max 32 words):**
> DopCellar designs, installs and maintains the power, security, fire and automation systems that keep Nigeria's banks, hospitals, factories and government facilities operational — 24 hours a day, every day.

**Two CTAs:**
1. **Primary — "Request Site Assessment"** (gold, filled). Sends into the assessment funnel.
2. **Secondary — "See the Platform"** (outline, hairline). Enters the credibility path first for cautious enterprise buyers.

**Background — recommendation:**
- **Primary choice:** A slow, cinematic 12-second loop (muted, autoplay) of one of these fieldwork clips, colour-graded to cool navy: engineer on rooftop against solar array at dusk; static plate of an inverter rack with a single blinking status LED; night-time bank ATM lit from within.
- **Fallback for slow networks:** A single photo — engineer in DopCellar-branded PPE, framed from behind, looking across an installation site. Human presence, no eye contact — the viewer becomes the operator.
- **Treatment:** 55% dark navy gradient overlay, subtle grain, cool 3200K white balance. No orange sunset clichés.

**Animations:**
- Headline: characters reveal on a 700ms cascade using an ease-out cubic curve, one word at a time.
- Subhead: fades in after H1 completes, 400ms.
- CTAs: rise 12px into place, 500ms delay.
- Background video: 20% opacity Ken Burns drift (1.00 → 1.04 over 14s).
- A single 1px hairline draws horizontally under the eyebrow badge on load — the "engineered" tell.
- KPI counters below the fold count up only when scrolled into view.
- No parallax on scroll, no floating orbs, no particle effects.

**Spacing:**
- Full viewport height on desktop (min 720px, cap 880px).
- Content column: max-width 1200px, left-aligned, 96px top padding on desktop, 64px on tablet, 32px on mobile.
- 40px gap between eyebrow → H1, 24px H1 → paragraph, 40px paragraph → CTAs.
- CTAs sit 120px above the KPI strip.

**Typography:**
- Eyebrow: Manrope 500, 12px, letter-spacing 0.18em, uppercase, gold.
- H1: Plus Jakarta Sans 600, clamp(44px, 6vw, 80px), line-height 1.02, letter-spacing -0.02em, balanced wrap.
- Paragraph: Manrope 400, 18px desktop / 16px mobile, line-height 1.55, colour muted-foreground.
- CTAs: Manrope 500, 14px, 44px height.

**Emotional experience:**
Composed, quiet authority. The viewer should feel like they've walked into a facility that is *already running perfectly*. Not "we will help you" — "we are already handling this for people like you." Cool, still, deliberate. The opposite of a startup.

**Benchmark parity:** Apple's product hero stillness + Tesla Energy's dark-navy engineering seriousness + Arnergy's African-context photography — none copied.

---

## Task 2 — Navigation Redesign

**Principle:** Enterprise buyers navigate by *what they need to solve*, not by *what we sell*. Reorganise around customer intent, with room to scale for the next 5 years.

**Top-level (7 items):**

1. **Solutions** — dropdown
2. **Industries** — dropdown
3. **Platform** — single link
4. **Work** — single link
5. **Insights** — dropdown (renamed from "Knowledge")
6. **Company** — dropdown (renamed from "About")
7. **Contact** — CTA button, gold, right-aligned

### Dropdown structure

**Solutions** (mega-menu, 3 columns)
- Column 1 — *Power & Continuity:* Solar Energy · Backup & Battery Systems · Electrical Engineering
- Column 2 — *Security & Life Safety:* CCTV & Surveillance · Access Control · Fire Detection
- Column 3 — *Intelligence & Uptime:* Building Automation · Preventive Maintenance · Integration Services
- Footer of menu: "Not sure where to start? → Talk to an engineer"

*Why:* Buyers filter by problem domain first. Grouping into three intent-clusters mirrors how a facilities director thinks.

**Industries** (single column, 8 items)
- Banking & Financial Services · Healthcare · Government · Education · Hospitality · Manufacturing · Commercial Real Estate · SMEs
- *Why:* An HSBC facilities lead only cares that we've done a bank. Industry-first entry converts faster than solution-first.

**Platform** (single link)
- Standalone page explaining the "one integrated system" thesis.
- *Why:* This is the differentiator; it deserves top-level real estate.

**Work** (single link → case studies)
- *Why:* Enterprise buyers need proof before conversation. Short label, high click intent.

**Insights** (dropdown, 4 items)
- Guides · Whitepapers · Case Studies · Compliance Library
- *Why:* Positions DopCellar as the authority; feeds SEO; gives sales enablement collateral.

**Company** (dropdown, 5 items)
- About · Leadership · Careers · Certifications · Press
- *Why:* Contains everything that isn't directly a sales page. Scales as the company grows.

**Contact** (button, not a link)
- *Why:* Never a menu item — always the destination CTA.

### Desktop nav
- Sticky, 72px tall, hairline border on scroll.
- Left: DopCellar logo (32px mark + wordmark).
- Centre: 6 nav items, 14px Manrope 500.
- Right: theme toggle + "Request Consultation" gold button.
- Dropdowns open on hover (150ms delay), 400ms fade-slide.

### Mobile nav
- 56px top bar with logo + hamburger.
- Full-screen overlay drawer, slides in from right (300ms ease-out).
- Two levels: tap "Solutions" → nested list slides in from right.
- Contact CTA pinned to bottom of drawer, always visible.
- Includes phone + WhatsApp shortcut icons at the bottom.

---

## Task 3 — Homepage Section-by-Section Design

### 1. Hero
Covered above.

### 2. Business Problems We Solve
- **Purpose:** Show the reader we understand *their* daily failure modes before they even scroll into features.
- **Headline:** "The five failures that stop Nigerian operations."
- **Subheading:** "We engineered DopCellar to close every one of them."
- **Layout:** Horizontal 5-column strip on desktop; each problem is a card with a numbered gold digit, a title, and a one-line consequence. On mobile, a horizontal snap-scroll carousel.
- **Animations:** Cards fade+rise in staggered 80ms increments as the section enters the viewport.
- **Images:** No photos — use monoline engineering icons (1.5px stroke) on hairline-bordered cards. Keeps the section fast and abstract.
- **CTA:** None. This section frames pain, not resolution.
- **Spacing:** 160px vertical padding; 24px gap between cards.
- **Conversion logic:** Pain-first framing raises time-on-page and primes the buyer to accept the Platform pitch below.

### 3. Why DopCellar
- **Purpose:** Convert pain into trust — six engineering-grade reasons we're the answer.
- **Headline:** "Engineered accountability, on every layer."
- **Subheading:** "One team. One design. One SLA."
- **Layout:** 3×2 grid, hairline cards, gold icon top-left, title, 2-line description.
- **Animations:** Individual card hover raises 4px with a soft navy shadow.
- **Images:** Icons only. No photography.
- **CTA:** None; leads to the Platform section.
- **Spacing:** 120px section padding; 32px gap between cards.
- **Conversion logic:** Six proof points cover the six most common enterprise objections in sequence.

### 4. Integrated Infrastructure Platform
- **Purpose:** Explain the differentiator. This is *the* section.
- **Headline:** "Seven disciplines. One accountability line."
- **Subheading:** "Most operators buy security, power and fire from five vendors. When something fails, no one owns the outcome. We built DopCellar as one platform."
- **Layout:** Split — left column carries the manifesto and three unified-delivery cards; right column shows the orbital diagram (existing SVG, retained).
- **Animations:** Nodes on the orbit fade in one-by-one clockwise (60ms stagger), then a slow 60-second rotation on the outer ring only.
- **Images:** Custom SVG diagram; no photography.
- **CTA:** "See the Platform in detail →" text link.
- **Spacing:** 160px vertical padding.
- **Conversion logic:** Anchors the "one accountability line" story that justifies premium pricing.

### 5. Industries We Serve
- **Purpose:** Let buyers self-identify.
- **Headline:** "Built for the operators who cannot afford downtime."
- **Subheading:** "Banking. Healthcare. Government. Manufacturing. Hospitality. Commercial real estate. Education. SMEs."
- **Layout:** 4×2 grid of dark-navy tiles with a single fieldwork photo per industry, industry name, and a one-line outcome ("Branch continuity for 12+ hours during grid failure").
- **Animations:** On hover, the photo desaturates and a gold hairline draws underneath the industry name.
- **Images:** Real Nigerian fieldwork photography — no stock.
- **CTA:** Each tile links to its own /industries/[slug] page.
- **Spacing:** 120px section padding; 16px tile gap.
- **Conversion logic:** Enterprise buyers filter by industry proof first; this section reduces bounce.

### 6. Featured Solutions (Case Studies)
- **Purpose:** Proof.
- **Headline:** "Systems already running in production."
- **Subheading:** "Every project delivered against a measured outcome."
- **Layout:** Three large horizontal case-study cards, each with: hero photo (16:9), client type (anonymised if needed — e.g. "Tier-1 Nigerian Bank"), scope tags, and one quantified result ("Zero unplanned outages, 14 months").
- **Animations:** Card image scales 1.02 on hover, gold hairline draws left-to-right along the bottom.
- **Images:** Real fieldwork, treated to cool navy grade for consistency.
- **CTA:** "View all work →" ghost button below the three cards.
- **Spacing:** 160px section padding; 24px card gap.
- **Conversion logic:** Enterprise conversion rests on prior evidence. Three cases > twenty logos.

### 7. How We Work
- **Purpose:** Reduce process anxiety — enterprise buyers need to know what happens after they submit the form.
- **Headline:** "From site walk to signed handover."
- **Subheading:** "A four-stage engineering process, documented at every step."
- **Layout:** Horizontal timeline with 4 nodes (Assess → Design → Deliver → Maintain). Each node opens on click to reveal deliverables.
- **Animations:** A gold line draws left-to-right through the timeline as the section enters the viewport.
- **Images:** None; icons only.
- **CTA:** "Start with a site assessment →" gold button.
- **Spacing:** 120px section padding.
- **Conversion logic:** Demystifying the engagement is the single highest-lift CRO move for enterprise services.

### 8. Knowledge Centre
- **Purpose:** Authority + SEO.
- **Headline:** "Engineering perspective, published."
- **Subheading:** "Practical guides, compliance whitepapers and short insights from the DopCellar engineering team."
- **Layout:** 3-column card grid — one Guide, one Whitepaper, one Insight.
- **Animations:** Card hover raises 4px; arrow icon translates up-right 3px.
- **Images:** Abstract engineering illustrations, not photos.
- **CTA:** "Visit the Knowledge Centre →" pill button.
- **Spacing:** 120px section padding.
- **Conversion logic:** Signals depth of expertise; captures long-tail search traffic; feeds sales collateral.

### 9. FAQs
- **Purpose:** Kill final objections silently.
- **Headline:** "Answers the procurement team will ask."
- **Subheading:** "If your question isn't here, our engineering desk will answer within one business day."
- **Layout:** Single-column accordion, 6 items, max-width 800px, centred.
- **Animations:** Chevron rotates 180°; content slides down at 240ms.
- **Images:** None.
- **CTA:** "Ask us directly →" WhatsApp link at the bottom.
- **Spacing:** 120px section padding.
- **Conversion logic:** Handles procurement objections (SLA, warranty, compliance, financing) without a sales call.

### 10. Consultation CTA
- **Purpose:** Convert.
- **Headline:** "Let's design your continuity plan."
- **Subheading:** "Book a site assessment with a DopCellar engineer. No obligation, no sales pitch — an engineering conversation."
- **Layout:** Full-bleed navy band with a single centred CTA card. Two options: "Request Site Assessment" (primary gold) and "Talk on WhatsApp" (secondary hairline).
- **Animations:** Card background has a slow, barely-visible gradient shimmer (10-second loop).
- **Images:** Optional — one desaturated wide fieldwork photo behind the band, 15% opacity.
- **CTA:** As above.
- **Spacing:** 160px section padding.
- **Conversion logic:** The single, calm, high-contrast conversion moment at the end of the narrative.

### 11. Footer
- **Purpose:** Utility + trust reinforcement.
- **Layout:** Four columns — Solutions · Industries · Company · Contact — plus a top strip with certifications (CAC, COREN, etc.) and a bottom strip with legal + socials.
- **Conversion logic:** Certifications strip at the top of the footer is the last trust reinforcement before the visitor leaves.

---

## Task 4 — Design System

**Colour palette (tokens live in `src/styles.css`):**
- Primary Navy `#0B1F3A`
- Tech Blue `#1F5FBF` (secondary action, links)
- DopCellar Gold `#C9A84C` (accent, primary CTA)
- Warm White `#FAFAF7` (default background)
- Deep Ink `#0A0A0B` (headings on light bg)
- Muted Slate `#5A6472` (body copy)
- Hairline `#E5E5E0` (borders, 1px only)

**Typography scale:**
- Display: Plus Jakarta Sans 600, clamp(44–80px), tracking -0.02em.
- H2: Plus Jakarta Sans 600, 40px desktop / 32px mobile, tracking -0.015em.
- H3: Plus Jakarta Sans 500, 24px.
- Eyebrow: Manrope 500, 12px, tracking 0.18em, uppercase.
- Body Large: Manrope 400, 18px, line-height 1.55.
- Body: Manrope 400, 15px, line-height 1.6.
- Caption: Manrope 500, 12px.
- Font pairing rationale: Jakarta gives editorial weight for display; Manrope carries technical clarity for UI and long-form.

**Spacing system:** 4-point scale — 4, 8, 12, 16, 24, 32, 48, 64, 96, 120, 160, 200. Sections use 120/160/200. Never use arbitrary values.

**Grid:** 12-column, 1200px max-width, 24px gutter desktop / 16px mobile. Content columns cap at 800px for long-form.

**Cards:**
- Base: 1px hairline border, 12px radius, background surface, no shadow at rest.
- Hover: 4px lift, soft navy shadow (0 20px 40px -20px rgba(11,31,58,0.15)), border transitions to gold at 20% opacity.
- Featured: subtle gold top-border rule.

**Buttons:**
- Primary: gold fill, navy text, 44px height, 12px radius, 24px horizontal padding.
- Secondary: transparent, hairline border, foreground text.
- Ghost: text only, gold underline on hover.
- Never use gradients on buttons.

**Iconography:** Monoline, 1.5px stroke, 24px default, gold or muted-slate. Library: Lucide, restricted to a curated set of ~40 icons for consistency.

**Border radius:** 8px default (inputs, small cards), 12px (large cards, buttons), 999px (pills, badges only). No 4px, no 16px+.

**Shadows:**
- Level 1: `0 1px 0 0 hairline` — for sticky bars.
- Level 2: `0 8px 24px -12px rgba(11,31,58,0.10)` — card hover.
- Level 3: `0 24px 60px -24px rgba(11,31,58,0.18)` — modals only.
- No neon glows, no purple/pink drop shadows.

**Animation principles:**
- Duration: 200ms micro, 400ms element, 700ms hero.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entries; linear for background loops.
- Motion is always single-axis. Never bounce, never spring.
- Reduced-motion honoured everywhere.

**Illustration style:** Technical line drawings only — think Bosch service manual. No characters, no gradients, no isometric 3D.

**Photography direction:**
- Real Nigerian fieldwork, engineers in DopCellar-branded PPE.
- Cool navy colour grade, low contrast, no orange-teal.
- Human presence framed from behind or in profile — no direct eye contact.
- No stock imagery under any circumstance.

**Interaction patterns:**
- Hover: 200ms colour/opacity transitions; gold hairlines that draw in horizontally.
- Focus rings: 2px gold, 2px offset — WCAG AA compliant.
- Scroll: gentle fade+rise for section entries; no parallax, no scroll-jacking.
- Micro animations: counters count up on viewport entry; chevrons rotate on accordion open; underlines draw on link hover.

The overall feel: *Bosch documentation, Apple restraint, Tesla Energy authority, Arnergy warmth.*

---

## Task 5 — Beauty Pass (Aesthetic)

- **Whitespace:** Section vertical padding never below 120px on desktop. Between headline and subhead, 24px. Between subhead and content, 48px. Whitespace is a load-bearing element.
- **Composition:** Left-align everything except hero-tier statements and the Consultation CTA. Enterprise readers scan left; centred content weakens hierarchy.
- **Balance:** Every section holds a 60/40 or 100/0 split. Avoid 50/50 — it reads as brochureware.
- **Visual hierarchy:** One H1 per page. One primary CTA per section. Eyebrow → Headline → Subhead → Content → CTA in that order, always.
- **Typography:** Set Jakarta at -0.02em display tracking. Never bold body copy. Never justify. Text-balance H1s.
- **Image treatment:** Uniform navy grade across every photo; 8px radius; no rounded-full portraits. All fieldwork carries the DopCellar hairline watermark.
- **Depth:** Depth comes from hairlines and one shadow level — not from gradients. A single 1px gold hairline underneath an eyebrow is the entire visual identity trick.
- **Cards:** No drop shadows at rest. Depth only appears on interaction.
- **Section transitions:** Alternate warm-white and deep-navy bands; never two consecutive same-tone sections. The eye needs rhythm.
- **Motion:** One motion per section. Never two competing animations in the same viewport.
- **Responsiveness:** Every section designed mobile-first at 375px, then 768px, then 1440px. No layout should require horizontal scroll below 320px.

---

## Task 6 — CRO Optimisation

**Global principles:**
- One primary CTA per screen height. Never two golds in the same viewport.
- Every form: max 4 fields on the first step. Progressive disclosure for the rest.
- Trust markers visible above the fold on every page: CAC number, years operating, sector count.
- WhatsApp FAB persistent on all pages, bottom-right, respects safe-area.

**Per-page CTA placement:**
- Homepage: Hero (site assessment) → Platform section (see platform) → Featured Work (view work) → How We Work (start assessment) → FAQs (WhatsApp) → Consultation band (assessment + WhatsApp).
- Solutions/Industries pages: sticky consultation strip on scroll after 30% depth.
- Case study pages: inline "We can build this for you" CTA after the results block.

**Form improvements:**
- Replace long Google Forms with a two-step embedded form: (1) name + email + industry; (2) project scope (revealed after step 1).
- Autofill industry from the previous page context (if a visitor came from `/industries/banking`, pre-fill "Banking").
- Add a "Prefer WhatsApp?" toggle above the submit button — captures leads who abandon forms.

**Conversion psychology:**
- Anchor pricing conversations with "engineering consultation" language, not "quote request" — repositions the ask as free expert advice.
- Every case study leads with a *number* (uptime %, months in production, incidents avoided).
- Certifications strip lives at the top of the footer *and* the bottom of the hero on the About page.

**Credibility:**
- Named engineering leadership on the About page with real headshots.
- Client-type disclosure ("Tier-1 Nigerian Bank") when NDAs prevent naming.
- Compliance library (CAC, COREN registrations, ISO alignment) linked from the footer.

**Section-by-section CRO summary:**
- Hero → primary conversion capture.
- Problems → engages, doesn't convert (necessary drop-off point).
- Platform → intellectual conviction.
- Industries → self-identification, cross-links.
- Featured Work → proof.
- How We Work → reduces process anxiety.
- FAQs → kills silent objections.
- Consultation CTA → the close.

Every path leads to the same funnel: **Site Assessment form** or **WhatsApp engineering chat**.

---

## Implementation Order (after approval)

1. Hero redesign (Task 1)
2. Design system tokens in `src/styles.css` (Task 4)
3. Navigation restructure (Task 2)
4. Homepage sections in narrative order (Task 3)
5. Aesthetic polish pass (Task 5)
6. CRO instrumentation and form rework (Task 6)

Each phase ships independently and is reviewable before the next begins.
