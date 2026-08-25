import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C05MMUTO.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { i as industries } from "./router-CfGMwjot.mjs";
import { W as WhyUs } from "./WhyUs-CZKcBZk4.mjs";
import { C as Contact } from "./Contact-2ML1oEji.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/zod.mjs";
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "industries", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Industries Served",
        title: "Trusted across the sectors that hold the economy together.",
        description: "From financial services and government to industrial operations and real estate, our engineering standards adapt to each sector without compromise."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-60px" },
        className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        children: industries.map((i) => {
          const Icon = i.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "group relative overflow-hidden rounded-xl border border-hairline bg-card p-7 transition-all hover:border-gold/30",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-md bg-gold/10 text-gold ring-1 ring-gold/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 1.6 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl text-foreground", children: i.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14px] leading-relaxed text-muted-foreground", children: i.description })
              ]
            },
            i.title
          );
        })
      }
    )
  ] }) });
}
function IndustriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Sectors", title: "Engineering standards calibrated to each sector.", description: "From banking and government to industrial operations and real estate, we adapt delivery to sector-specific compliance and continuity demands." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Industries, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  IndustriesPage as component
};
