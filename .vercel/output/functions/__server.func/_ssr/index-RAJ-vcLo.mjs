import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, f as commitments } from "./router-CfGMwjot.mjs";
import { g as galleryPhotos } from "./gallery-BQiuiqv1.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { W as WhyDopCellar, I as IntegratedPlatform } from "./WhyDopCellar-C3kWqkNz.mjs";
import { K as KnowledgeCentre } from "./KnowledgeCentre-DvSFoyV2.mjs";
import { C as ConsultationCTA } from "./ConsultationCTA-Cscqe9Tf.mjs";
import "../_libs/sonner.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, x as ArrowRight, y as ShieldAlert, Z as Zap, n as Flame, m as Activity, i as Building, z as FileSearch, D as Clock, W as Wrench, U as Users, d as ShieldCheck, E as Compass, j as Briefcase, L as Landmark, G as HeartPulse, I as GraduationCap, J as Hotel, F as Factory, B as Building2, O as ClipboardList, P as PencilRuler, Q as HardHat, V as LifeBuoy, Y as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AnimatedBackdrop() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,color-mix(in_oklab,var(--color-gold)_18%,transparent),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_10%,color-mix(in_oklab,var(--color-steel)_22%,transparent),transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,color-mix(in_oklab,var(--color-gold)_12%,transparent),transparent_65%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl animate-blob-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[-10rem] top-40 h-[24rem] w-[24rem] rounded-full bg-steel/25 blur-3xl animate-blob-slower" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-gold/12 blur-3xl animate-blob-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-backdrop animate-grid-drift opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hatch-backdrop opacity-[0.35]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-backdrop opacity-[0.06]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent animate-sweep" })
  ] });
}
const HERO_ROTATION = [
  galleryPhotos[19],
  // engineers on-site
  galleryPhotos[4],
  // camera install
  galleryPhotos[14],
  // inverter rack
  galleryPhotos[9]
  // monitoring
].filter(Boolean);
const HEADLINE_WORDS = ["Your", "operations", "never", "stop."];
const HEADLINE_ACCENT = ["Neither", "do", "we."];
function Hero() {
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_ROTATION.length), 6500);
    return () => clearInterval(id);
  }, []);
  const current = HERO_ROTATION[idx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate flex min-h-[720px] items-center overflow-hidden pt-24 lg:min-h-[860px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackdrop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          src: current?.src,
          alt: "",
          "aria-hidden": true,
          initial: { opacity: 0, scale: 1.05 },
          animate: { opacity: 0.32, scale: 1.01 },
          exit: { opacity: 0, scale: 1.02 },
          transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] },
          className: "h-full w-full object-cover"
        },
        current?.src
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/78 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/25" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-6 pb-24 pt-16 lg:pb-32 lg:pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          className: "inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { scaleX: 0 },
                animate: { scaleX: 1 },
                transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                style: { transformOrigin: "left" },
                className: "block h-px w-10 bg-gold"
              }
            ),
            "Integrated Smart Infrastructure · Nigeria"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-10 max-w-5xl font-display text-balance text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: HEADLINE_WORDS.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
            className: "mr-[0.28em] inline-block",
            children: w
          },
          w + i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-gold", children: HEADLINE_ACCENT.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: 0.7,
              delay: 0.15 + (HEADLINE_WORDS.length + i) * 0.08,
              ease: [0.22, 1, 0.36, 1]
            },
            className: "mr-[0.28em] inline-block",
            children: w
          },
          w + i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] },
          className: "mt-6 max-w-2xl text-pretty text-base leading-[1.65] text-muted-foreground md:text-lg",
          children: "We engineer the power, security, fire and automation layers that hold a business together — so downtime, loss and life-safety risk stop being your problem to manage. One assessment. One accountable engineering partner. One system that keeps working."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] },
          className: "mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                className: "h-12 rounded-md bg-gold px-6 text-[13.5px] font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:bg-gold/90 hover:-translate-y-px",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                  "Book a free site assessment",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1.5 h-4 w-4" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                variant: "outline",
                className: "h-12 rounded-md border-hairline bg-transparent px-6 text-[13.5px] font-medium text-foreground hover:bg-surface/60",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/platform", children: [
                  "See how the platform works",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground sm:ml-2", children: "No cost. No obligation. Engineer-led, not sales-led." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.9, delay: 1.25 },
          className: "mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] uppercase tracking-[0.2em] text-gold/80", children: "Engineered for" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Banking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hairline", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Healthcare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hairline", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Government" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hairline", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Manufacturing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hairline", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Commercial Real Estate" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline lg:mt-24 lg:grid-cols-4", children: commitments.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 1.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
          className: "bg-background/70 p-6 backdrop-blur md:p-7",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.5rem]", children: c.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[10.5px] uppercase tracking-[0.2em] text-gold/90", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 hidden text-[12.5px] leading-relaxed text-muted-foreground sm:block", children: c.note })
          ]
        },
        c.label
      )) })
    ] })
  ] });
}
const problems = [
  {
    icon: ShieldAlert,
    outcome: "Protect your business",
    problem: "Unauthorised access, theft, disputed incidents.",
    solution: "Integrated CCTV, access control and perimeter systems — evidence-grade footage and real-time alerts."
  },
  {
    icon: Zap,
    outcome: "Keep operations running",
    problem: "Grid outages, generator fuel drain, unpredictable diesel bills.",
    solution: "Solar-hybrid, inverter and switchgear engineering built for continuous business operations."
  },
  {
    icon: Flame,
    outcome: "Prevent fire damage",
    problem: "Life-safety exposure, insurance non-compliance, asset loss.",
    solution: "Certified fire detection, suppression and alarm systems — engineered before an incident becomes a disaster."
  },
  {
    icon: Activity,
    outcome: "Reduce energy costs",
    problem: "Rising tariffs, over-sized diesel plants, no consumption data.",
    solution: "Load audits, right-sized hybrid systems and metering that turns energy from a bill into a managed asset."
  },
  {
    icon: Building,
    outcome: "Modernise infrastructure",
    problem: "Legacy wiring, unstructured cabling, siloed building systems.",
    solution: "MEP upgrades, structured cabling and BMS-ready electrical backbones — one integrated platform."
  }
];
function ProblemsSolved() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "solutions",
      className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Business Problems We Solve",
            title: "Executives don't buy products. They buy outcomes.",
            description: "Every DopCellar engagement starts with the operational risk you're trying to remove — not a shopping list of hardware."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: staggerChildren,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-80px" },
            className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
            children: problems.map((p) => {
              const Icon = p.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "group relative overflow-hidden rounded-xl border border-hairline bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[var(--shadow-elevated)]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-[11px] uppercase tracking-[0.18em] text-gold", children: p.outcome }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl text-foreground", children: p.problem }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14px] leading-relaxed text-muted-foreground", children: p.solution })
                  ]
                },
                p.outcome
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services",
            className: "group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20",
            children: [
              "Explore the full solutions ecosystem",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
            ]
          }
        ) })
      ] })
    }
  );
}
const pillars = [
  {
    icon: FileSearch,
    title: "Documented engineering, not promises",
    body: "Every engagement produces drawings, load calculations, specifications and a commissioning record. You can hand our documentation to an independent consultant before you sign anything."
  },
  {
    icon: Clock,
    title: "Response time you can hold us to",
    body: "Assessment scheduled within 48 hours. Escalation reaches the engineer on your account — not a queue. Response tiers are written into the agreement, not implied."
  },
  {
    icon: Wrench,
    title: "Maintenance is the contract, not an upsell",
    body: "Preventive schedules, condition reports and spare-parts planning are designed in from day one. Systems that are maintained are systems that stay operational."
  },
  {
    icon: Users,
    title: "Built on the Cellar Brothers lineage",
    body: "DopCellar Merit was formed by engineers from the Cellar Brothers network — carrying forward established field discipline, supplier relationships and installation standards into an integrated infrastructure practice."
  },
  {
    icon: ShieldCheck,
    title: "Transparent scope and pricing",
    body: "Costed engineering pathways with line-item scope. No hidden change orders, no vague allowances. If a variation is needed, it is raised, priced and approved in writing."
  },
  {
    icon: Compass,
    title: "A long-horizon commitment",
    body: "We are building a national integrated infrastructure practice — which means our incentive is your system performing in year five, not the invoice in month one."
  }
];
function TrustModel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "trust", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "How We Earn Trust",
        title: "We don't borrow credibility. We publish our method.",
        description: "We are deliberate about not decorating this website with logos we haven't earned or numbers we can't evidence. Instead, judge us on the things you can verify before you commit a naira."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
        className: "mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3",
        children: pillars.map((p) => {
          const Icon = p.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "group relative bg-card p-8 transition-colors md:p-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-[1.3rem] leading-snug tracking-[-0.01em] text-foreground", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14px] leading-[1.7] text-muted-foreground", children: p.body })
              ]
            },
            p.title
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-12 max-w-3xl text-center text-[14px] leading-[1.7] text-muted-foreground", children: "Ask us for a reference design, a commissioning checklist or a maintenance schedule template before you engage us. Firms that hide their method rarely have one." })
  ] }) });
}
const industries = [
  { icon: Briefcase, name: "SMEs", outcome: "Continuity for lean teams." },
  { icon: Landmark, name: "Banking", outcome: "Regulator-grade branch uptime." },
  { icon: HeartPulse, name: "Hospitals", outcome: "Zero-tolerance life-safety." },
  { icon: GraduationCap, name: "Schools", outcome: "Safe, monitored learning environments." },
  { icon: Hotel, name: "Hotels", outcome: "Guest-experience-grade reliability." },
  { icon: Factory, name: "Manufacturing", outcome: "Measurable plant uptime." },
  { icon: ShieldCheck, name: "Government", outcome: "Compliance and lifecycle accountability." },
  { icon: Building2, name: "Commercial Buildings", outcome: "Tenant-ready on day one." }
];
function IndustriesGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "industries",
      className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Industries We Serve",
            title: "Engineered for the sectors Nigeria cannot afford to have fail.",
            description: "Every sector below reflects a specific operational-continuity brief we've engineered against — not a generic service list."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: staggerChildren,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-80px" },
            className: "mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4",
            children: industries.map((s) => {
              const Icon = s.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "group relative bg-card p-6 transition-colors hover:bg-card/70",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg text-foreground", children: s.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13.5px] leading-relaxed text-muted-foreground", children: s.outcome }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-4 h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" })
                  ]
                },
                s.name
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/industries",
            className: "group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20",
            children: [
              "Explore every industry we serve",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
            ]
          }
        ) })
      ] })
    }
  );
}
const blueprints = [
  {
    sector: "Banking & Financial Services",
    challenge: "A branch that cannot afford a dark minute.",
    systems: ["Solar-hybrid power", "Surveillance", "Access control"],
    approach: "Load-audited hybrid power with automatic changeover, evidence-grade camera coverage over cash points, and audited door control — designed so a grid failure never becomes a service failure.",
    image: galleryPhotos[11]?.src
  },
  {
    sector: "Healthcare",
    challenge: "Life-safety systems with no tolerance for ambiguity.",
    systems: ["Fire detection", "Emergency power", "Monitored coverage"],
    approach: "Zoned detection and alarm design, emergency supply for critical circuits, and a commissioning pack that gives clinical leadership documented proof that each zone was tested.",
    image: galleryPhotos[14]?.src
  },
  {
    sector: "Commercial Real Estate",
    challenge: "Buildings that must be tenant-ready on handover day.",
    systems: ["Electrical backbone", "Structured cabling", "BMS-ready"],
    approach: "A single integrated electrical and cabling backbone with labelled, as-built documentation — so landlords hand tenants an infrastructure pack instead of a mystery.",
    image: galleryPhotos[2]?.src
  },
  {
    sector: "Manufacturing & Industry",
    challenge: "Downtime measured in lost production, not inconvenience.",
    systems: ["LV switchgear", "Perimeter surveillance", "Preventive maintenance"],
    approach: "Switchgear and distribution engineered around process criticality, perimeter coverage on the routes that actually matter, and a preventive schedule tied to plant run-hours.",
    image: galleryPhotos[20]?.src
  }
];
function FeaturedSolutions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "featured-solutions",
      className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Reference Architectures",
            title: "How we engineer for the environments that cannot stop.",
            description: "These are our design blueprints — the engineering logic we apply per environment. Every one of them is discussed openly with your team before a single cable is pulled."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: staggerChildren,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-80px" },
            className: "mt-16 grid gap-6 md:grid-cols-2 lg:gap-8",
            children: blueprints.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.article,
              {
                variants: fadeUp,
                className: "group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-elevated)]",
                children: [
                  b.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: b.image,
                        alt: `${b.sector} infrastructure engineering`,
                        loading: "lazy",
                        className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-5 rounded-full border border-hairline bg-background/85 px-3 py-1 text-[10.5px] uppercase tracking-[0.18em] text-gold backdrop-blur", children: b.sector })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7 md:p-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.4rem] leading-snug tracking-[-0.01em] text-foreground", children: b.challenge }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[14px] leading-[1.7] text-muted-foreground", children: b.approach }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", children: b.systems.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "rounded-full border border-hairline bg-background/60 px-3 py-1 text-[11px] text-foreground/80",
                        children: s
                      },
                      s
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/contact",
                        className: "mt-7 inline-flex items-center gap-2 border-t border-hairline pt-5 text-[13px] font-medium text-foreground transition-colors hover:text-gold",
                        children: [
                          "Discuss this for your facility",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
                        ]
                      }
                    )
                  ] })
                ]
              },
              b.sector
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/projects",
            className: "group inline-flex items-center gap-2 rounded-full border border-hairline bg-background/70 px-6 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-gold/40",
            children: [
              "See our field work",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
            ]
          }
        ) })
      ] })
    }
  );
}
const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Consultation & site assessment",
    body: "Engineer-led survey, load analysis and operational risk review — signed off before a single line item is quoted."
  },
  {
    n: "02",
    icon: PencilRuler,
    title: "Solution design",
    body: "Costed engineering pathway with drawings, specifications and integration plan — reviewable by your own consultants."
  },
  {
    n: "03",
    icon: HardHat,
    title: "Professional installation",
    body: "Certified engineers, sequenced delivery, structured commissioning and acceptance testing with documented handover."
  },
  {
    n: "04",
    icon: LifeBuoy,
    title: "Maintenance & lifecycle support",
    body: "Preventive service schedule, response SLA and long-horizon support so systems keep performing years after go-live."
  }
];
function HowWeWork() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "how-we-work",
      className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "How We Work",
            title: "A four-step engineering process built for accountability.",
            description: "Every engagement follows the same discipline — from first site visit to lifecycle support — so operations leads know exactly what happens next."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.ol,
          {
            variants: staggerChildren,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-80px" },
            className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
            children: steps.map((s) => {
              const Icon = s.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.li,
                {
                  variants: fadeUp,
                  className: "relative overflow-hidden rounded-xl border border-hairline bg-card p-7",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-gold/70", children: s.n }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-lg text-foreground", children: s.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13.5px] leading-relaxed text-muted-foreground", children: s.body })
                  ]
                },
                s.n
              );
            })
          }
        )
      ] })
    }
  );
}
const faqs = [
  {
    q: "Why don't you show client logos or project statistics?",
    a: "Because we will not publish credibility we have not earned. DopCellar Merit is a young integrated practice built by experienced field engineers, and we would rather you judge us on our engineering method, documentation and response commitments — all of which you can inspect before you engage us — than on numbers you cannot verify."
  },
  {
    q: "Do you deliver as a single contractor across power, security and fire?",
    a: "Yes. Every DopCellar engagement is delivered under one contract, one project manager and one accountability line — covering power, security, fire, network and building automation as one integrated scope."
  },
  {
    q: "What compliance standards do you engineer against?",
    a: "Our electrical, fire and security work is executed against the relevant Nigerian regulatory codes and international engineering standards. Every project ships with a compliance pack: drawings, test records, and acceptance documentation auditors and insurers can rely on."
  },
  {
    q: "How do you handle sites outside Ibadan and Port Harcourt?",
    a: "Head office is Ibadan, branch in Port Harcourt, with mobilisation capability across Nigeria's commercial corridors. Site-remote installations are engineered from our design office and delivered by mobilised crews with the same commissioning discipline as local jobs."
  },
  {
    q: "What does your maintenance SLA cover?",
    a: "Scheduled preventive service, quarterly condition reports, spare-parts management, and engineer-led escalation (not a call-centre queue). SLA tiers are calibrated to your operational risk — mission-critical sites get faster response windows and on-site engineering standby."
  },
  {
    q: "Can you integrate with our existing BMS, SOC or access system?",
    a: "In most cases yes. Our design process starts by auditing what you already run — BMS, SOC, VMS, access — and specifying integration points rather than replacement. Where systems are end-of-life, we stage migrations to keep operations continuous."
  },
  {
    q: "How is a project scoped and priced?",
    a: "A senior engineer runs a site assessment: load profile, risk map, and operational objectives. That produces a documented brief, a costed engineering pathway, and a phased delivery plan — reviewable by your own consultants before commitment."
  }
];
function FAQs() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faqs", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Frequently Asked",
        title: "Executive-level questions, answered.",
        description: "The questions operations leads, procurement teams and CFOs ask us before signing."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-card", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen(isOpen ? null : i),
            className: "flex w-full items-start justify-between gap-6 px-6 py-7 text-left md:px-8 transition-colors hover:bg-surface/40",
            "aria-expanded": isOpen,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-foreground md:text-xl", children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Plus,
                {
                  className: `mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-7 text-[14.5px] leading-[1.75] md:px-8 text-muted-foreground", children: f.a })
          }
        ) })
      ] }, f.q);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-12 text-center text-[14px] text-muted-foreground", children: [
      "Still weighing it up?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-gold underline-offset-4 hover:underline", children: "Put the question to an engineer" }),
      " ",
      "— no obligation attached."
    ] })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemsSolved, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyDopCellar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustModel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntegratedPlatform, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IndustriesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedSolutions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowWeWork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeCentre, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConsultationCTA, {})
  ] });
}
export {
  HomePage as component
};
