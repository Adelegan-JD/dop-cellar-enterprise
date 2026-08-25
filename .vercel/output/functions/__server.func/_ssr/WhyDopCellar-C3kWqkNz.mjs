import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sun, C as Cctv, n as Flame, K as KeyRound, Z as Zap, o as Cpu, W as Wrench, p as Layers, q as BadgeCheck, r as FileCheckCorner, s as MapPinned, R as Radio } from "../_libs/lucide-react.mjs";
const disciplines = [
  { icon: Sun, label: "Solar Energy", role: "Continuous, clean power." },
  { icon: Cctv, label: "CCTV Surveillance", role: "Evidence-grade visibility." },
  { icon: Flame, label: "Fire Detection", role: "Life-safety compliance." },
  { icon: KeyRound, label: "Access Control", role: "Governed movement." },
  { icon: Zap, label: "Electrical Engineering", role: "Reliable distribution." },
  { icon: Cpu, label: "Building Automation", role: "One unified control layer." },
  { icon: Wrench, label: "Preventive Maintenance", role: "Systems that keep performing." }
];
function IntegratedPlatform() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "platform", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "The Integrated Infrastructure Platform",
          title: "Seven disciplines. One accountability line.",
          description: "Most operators buy security, power and fire from different vendors. When something fails, no one owns the outcome. We built DopCellar as one platform so accountability, data and control live in one place."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerChildren,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, margin: "-80px" },
          className: "mt-10 grid gap-4 sm:grid-cols-3",
          children: [
            { k: "Unified design", v: "One engineering team, one drawing set." },
            { k: "Unified commissioning", v: "One handover, one acceptance record." },
            { k: "Unified maintenance", v: "One SLA covering every discipline." }
          ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "rounded-lg border border-hairline bg-card/60 p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.16em] text-gold", children: p.k }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-relaxed text-muted-foreground", children: p.v })
              ]
            },
            p.k
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-square w-full max-w-[560px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full border border-hairline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-14 rounded-full border border-hairline/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-24 rounded-full border border-hairline/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full border border-gold/40 bg-gold/10 px-5 py-4 text-center backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-gold", children: "Core Outcome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-display text-base text-foreground md:text-lg", children: [
          "Operations",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Continuity"
        ] })
      ] }) }),
      disciplines.map((d, i) => {
        const angle = i / disciplines.length * Math.PI * 2 - Math.PI / 2;
        const r = 46;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        const Icon = d.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.85 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] },
            className: "group absolute -translate-x-1/2 -translate-y-1/2",
            style: { left: `${x}%`, top: `${y}%` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-full border border-hairline bg-background shadow-sm ring-1 ring-gold/20 transition-all group-hover:ring-gold/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 rounded-md border border-hairline bg-background/95 p-2 text-center opacity-0 shadow-md transition-opacity group-hover:opacity-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-foreground", children: d.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-muted-foreground", children: d.role })
              ] })
            ]
          },
          d.label
        );
      })
    ] })
  ] }) }) });
}
const pillars = [
  {
    icon: Layers,
    title: "One integrated ecosystem",
    body: "Security, power, fire safety, network and building systems — engineered as one platform, not stitched together from separate vendors."
  },
  {
    icon: BadgeCheck,
    title: "Engineering-grade delivery",
    body: "Every project runs against documented standards, structured commissioning and traceable acceptance records — the same rigor Tier-1 clients expect."
  },
  {
    icon: Wrench,
    title: "Lifecycle maintenance",
    body: "SLA-backed preventive maintenance keeps systems operational long after installation — no orphaned deployments."
  },
  {
    icon: FileCheckCorner,
    title: "Compliance-first",
    body: "Fire, electrical and security work executed to relevant Nigerian regulatory codes with the documentation auditors and insurers require."
  },
  {
    icon: MapPinned,
    title: "Nationwide presence",
    body: "Head office in Ibadan, branch in Port Harcourt, and mobilisation capability across Nigeria's commercial corridors."
  },
  {
    icon: Radio,
    title: "Rapid response",
    body: "Direct engineering escalation — not a call centre. Mission-critical sites get engineer-led response, not a ticket queue."
  }
];
function WhyDopCellar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-dopcellar", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Why DopCellar",
        title: "One integrated engineering partner. Not five uncoordinated vendors.",
        description: "Most Nigerian operators treat security, power, and fire as separate problems. That's why they fail together. We built DopCellar because they don't have to."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
        className: "mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3",
        children: pillars.map((p) => {
          const Icon = p.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "group bg-card p-8 transition-colors hover:bg-card/80",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg text-foreground", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-muted-foreground", children: p.body })
              ]
            },
            p.title
          );
        })
      }
    )
  ] }) });
}
export {
  IntegratedPlatform as I,
  WhyDopCellar as W
};
