import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { c as process$1 } from "./router-CfGMwjot.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Engineering Framework",
        title: "A six-stage delivery model engineered for accountability."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.ol,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-60px" },
        className: "mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3",
        children: process$1.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { variants: fadeUp, className: "relative bg-background p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] tracking-[0.2em] text-gold", children: p.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl text-foreground", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-muted-foreground", children: p.description })
        ] }, p.step))
      }
    )
  ] }) });
}
export {
  Process as P
};
