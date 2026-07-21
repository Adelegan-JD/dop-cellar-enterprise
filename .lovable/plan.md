
# DopCellar — Website Rearchitecture (Structure & Content Only)

Positioning line (used across site):
**"Integrated Smart Infrastructure — engineered as one system."**

Voice: calm, executive, engineering-grade. Outcomes before hardware. No product-lists on the homepage.

---

## 1. Global Information Architecture

Top-level navigation (7 anchors, no dropdown clutter):

```
Solutions   Industries   Platform   Work   Knowledge   About   Contact
```

- **Solutions** → outcome-led service pillars (Power, Security, Fire, Automation, Electrical, Maintenance)
- **Industries** → SME, Banking, Healthcare, Education, Hospitality, Manufacturing, Government, Commercial Real Estate
- **Platform** → the "Integrated Infrastructure Platform" narrative (how the disciplines interlock)
- **Work** → Projects + Gallery merged into one case-study hub
- **Knowledge** → insights, guides, whitepapers, downloads
- **About** → company, leadership, credentials, offices
- **Contact** → assessment request + WhatsApp + branches

Persistent utilities: "Request Site Assessment" button (primary), WhatsApp FAB, phone number in header on desktop.

Site map (routes):

```
/
/solutions
  /solutions/solar-energy
  /solutions/cctv-surveillance
  /solutions/fire-detection
  /solutions/access-control
  /solutions/electrical-engineering
  /solutions/building-automation
  /solutions/preventive-maintenance
/industries
  /industries/{sme|banking|healthcare|education|hospitality|manufacturing|government|commercial-real-estate}
/platform          (Integrated Infrastructure Platform)
/work              (case studies + gallery)
  /work/{case-slug}
/knowledge         (Knowledge Centre index)
  /knowledge/{article-slug}
/about
/contact
```

---

## 2. Homepage Flow (11 sections)

### 1) Hero
- Eyebrow: "Integrated Smart Infrastructure · Nigeria"
- H1: **"One engineered system. Every layer of your operation."**
- Sub: "DopCellar designs, installs and maintains the power, security, fire and automation systems that keep Nigeria's most demanding businesses running — as one integrated platform, not five disconnected vendors."
- Primary CTA: *Request Site Assessment* · Secondary: *Explore the Platform*
- Visual: cinematic fieldwork photography, slow crossfade; muted navy overlay; thin gold hairline motif. No stock illustrations.
- Micro-trust row beneath CTAs: "Trusted across Banking · Healthcare · Government · Manufacturing · Commercial Real Estate"

### 2) Business Problems We Solve
Frame: "The five failures that quietly cost Nigerian businesses the most." Five outcome cards, each stated as a consequence-first pair (Problem → Consequence → Our resolution):
1. **Power instability** → downtime, diesel drain → hybrid power engineered for continuity
2. **Security exposure** → theft, disputed incidents → evidence-grade surveillance & access control
3. **Fire hazards** → life-safety and insurance risk → certified detection & suppression
4. **Operational downtime** → SLA breaches, revenue loss → preventive maintenance & rapid response
5. **Fragmented systems** → five vendors, zero accountability → one integrated engineering partner

### 3) Why DopCellar
Six pillars in a bordered grid (kept from current site, refined language):
- One integrated ecosystem
- Engineering-grade delivery
- Lifecycle maintenance (SLA-backed)
- Compliance-first (fire, electrical, security codes)
- Nationwide presence (Ibadan HQ · Port Harcourt branch)
- Rapid engineering-led response (not a call centre)

### 4) Integrated Infrastructure Platform (new anchor section)
The centrepiece — the story no competitor tells.
- Left: short manifesto: "Most operators buy security, power and fire from different vendors. When something fails, no one owns the outcome. We built DopCellar as one platform so accountability, data and control live in one place."
- Right: schematic diagram (conceptual, not literal) showing seven disciplines orbiting a central "Operations Continuity" core: Solar Energy · CCTV · Fire Detection · Access Control · Electrical · Building Automation · Preventive Maintenance. On hover, each node reveals a one-line role.
- Sub-row: three proof points — *Unified design*, *Unified commissioning*, *Unified maintenance*.

### 5) Industries We Serve
Eight-tile grid, each linking to its own industry page. Every tile carries an industry-specific outcome, not a product list:
- SMEs — "Continuity for lean teams."
- Banking — "Regulator-grade branch uptime."
- Hospitals — "Zero-tolerance life-safety."
- Schools — "Safe, monitored learning environments."
- Hotels — "Guest-experience-grade reliability."
- Manufacturing — "Measurable plant uptime."
- Government — "Compliance and lifecycle accountability."
- Commercial Buildings — "Tenant-ready on day one."

### 6) Featured Solutions
Three-to-four flagship engagements presented as executive case studies (not gallery thumbnails). Each card:
- Client sector (anonymised where needed)
- Challenge (one line)
- Integrated systems deployed (2–4 tags)
- Measured outcome (uptime %, response time, energy saved)
- CTA: *Read the engagement*
Below the grid: link to full *Work* hub.

### 7) How We Work
Four-step horizontal process, numbered, with a one-line deliverable under each:
1. **Consultation & Site Assessment** — documented brief, risk map
2. **Engineering Design** — single-line diagrams, BOQ, compliance pack
3. **Installation & Commissioning** — traceable acceptance records
4. **Preventive Maintenance & SLA** — quarterly reports, engineer-led response
Right-rail: small callout — "Every project is delivered under one contract, one project manager, one accountability line."

### 8) Knowledge Centre
Three-card preview of the /knowledge hub — establishes authority, feeds SEO:
- Guide: "Sizing a hybrid solar system for a Nigerian bank branch"
- Whitepaper: "Fire compliance for commercial buildings — what auditors actually check"
- Insight: "Why fragmented security systems fail during real incidents"
CTA: *Visit the Knowledge Centre*

### 9) FAQs
Six executive-level questions (accordion), not consumer FAQs:
1. Do you deliver as a single contractor across power, security and fire?
2. What compliance standards do you engineer against?
3. How do you handle sites outside Ibadan and Port Harcourt?
4. What does your maintenance SLA cover?
5. Can you integrate with our existing BMS / SOC / access system?
6. How is a project scoped and priced?

### 10) Consultation CTA
Full-bleed dark band. Headline: **"Book a site assessment. Get an engineered answer, not a quote sheet."**
- Primary: *Request Site Assessment* (form)
- Secondary: *Talk to an engineer on WhatsApp*
- Micro-line: "Response within one business day · Ibadan · Port Harcourt · Nationwide mobilisation"

### 11) Footer
Four columns: **Solutions · Industries · Company · Contact**. Legal row: registration, socials, © DopCellar Merit Global Limited. Two office blocks (HQ + branch) with map anchors.

---

## 3. Content Hierarchy Rules (apply site-wide)

- Every page opens with an outcome statement, never a product name.
- Hardware is only introduced after the problem and the discipline are established.
- Every solution/industry page follows the same skeleton: *Outcome → Problem context → Our engineered response → Systems involved → Compliance & standards → Related case study → CTA*.
- Numbers earn their place: uptime %, response time, sites maintained, engineers on staff. No decorative stats.
- Imagery is real fieldwork only. No stock illustrations, no gradients-as-hero.

---

## 4. Solutions & Industries Page Templates

**Solution page** (`/solutions/{slug}`):
Hero (outcome + one line) → The problem in Nigerian context → Our engineered response → What's included (systems, not SKUs) → Compliance & standards → Related industries → Featured engagement → CTA.

**Industry page** (`/industries/{slug}`):
Hero (industry-specific outcome) → Operational risks unique to this sector → Integrated response (which disciplines apply) → Reference engagement → Compliance notes → CTA.

---

## 5. Knowledge Centre (new)

Purpose: SEO authority + executive credibility. Three content types:
- **Guides** — practical, sizing/spec oriented
- **Whitepapers** — compliance, standards, lifecycle
- **Insights** — short opinion pieces from the engineering team

Index page: filter by type + industry. Article template: hero, TL;DR, body, downloadable PDF, author, related engagement, CTA.

---

## 6. Design Language (direction, not tokens)

- **Palette**: deep navy base, generous white space on interior pages, single gold accent for emphasis, tech-blue for interactive states. Retire orange from primary surfaces; reserve for alerts only.
- **Type**: display serif or high-contrast sans for H1/H2 (editorial feel), humanist sans for body. One weight per role.
- **Layout**: 12-column, wide gutters, generous section padding (min 96px desktop). Hairline dividers, not boxes-inside-boxes.
- **Motion**: slow, single-axis. Fade + 8–12px rise. No parallax gimmicks. Photo crossfades only on hero.
- **Imagery**: real engineers, real sites, subtle navy grade overlay. Every image earns its place.

---

## 7. What Changes vs. Current Site

Kept (refined): Hero rotation, Why DopCellar pillars, Sector grid, How We Work, Contact CTA, WhatsApp FAB.
Added: Integrated Infrastructure Platform section, Knowledge Centre, executive FAQs, Solution + Industry sub-page templates, Work case-study hub.
Removed from homepage: standalone Products section, generic testimonials strip, decorative stat blocks that don't tie to an outcome. Products become supporting evidence inside Solution pages, not a homepage destination.

---

## 8. Out of Scope for This Plan

No code, no visual tokens, no component implementation. Implementation plan will follow once this architecture is approved.
