import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C05MMUTO.mjs";
import { S as SectionHeader, R as Reveal } from "./SectionHeader-BKwdQC69.mjs";
import { b as site } from "./router-CfGMwjot.mjs";
import { W as WhyUs } from "./WhyUs-CZKcBZk4.mjs";
import { P as Process } from "./Process-Dc0uRvp_.mjs";
import { C as Contact } from "./Contact-2ML1oEji.mjs";
import "../_libs/sonner.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/zod.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "About the Firm",
          title: "A serious engineering partner for Nigeria's most demanding infrastructure.",
          description: "DopCellar Merit Global Limited engineers, deploys, and maintains the physical and electronic systems that critical operations depend on — from banking branches and corporate facilities to industrial plants and government infrastructure."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-8 sm:grid-cols-2", children: [
        {
          title: "Infrastructure Development",
          body: "Multi-disciplinary delivery across electrical, structural, network, and security systems for greenfield and brownfield programs."
        },
        {
          title: "Engineering Reliability",
          body: "Design-led execution with documented standards, acceptance testing, and traceable commissioning records."
        },
        {
          title: "Industrial Operations",
          body: "Preventive and reactive maintenance programs engineered for asset uptime and operational continuity."
        },
        {
          title: "Scalable Solutions",
          body: "Repeatable delivery playbooks that scale from single-site builds to nationwide rollouts."
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-hairline pl-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-foreground", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-muted-foreground", children: item.body })
      ] }) }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-hairline bg-card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Leadership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-gold", children: "SD" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-foreground", children: site.manager.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] uppercase tracking-[0.16em] text-muted-foreground", children: site.manager.role })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[14px] leading-relaxed text-muted-foreground", children: "Samuel leads engineering delivery across all programs, with a focus on system reliability, technical governance, and operational excellence for clients in banking, industrial, and government sectors." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline", children: [
        { k: "Disciplines", v: "10+" },
        { k: "Sectors Served", v: "6" },
        { k: "HQ", v: "Port Harcourt" },
        { k: "Founded", v: "Nigeria" }
      ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: m.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-medium text-foreground", children: m.v })
      ] }, m.k)) })
    ] }) }) })
  ] }) }) });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "The Firm", title: "An engineering company built for reliability.", description: "Headquartered in Port Harcourt, delivering infrastructure programs across Nigeria for banking, government, industrial, and corporate clients." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  AboutPage as component
};
