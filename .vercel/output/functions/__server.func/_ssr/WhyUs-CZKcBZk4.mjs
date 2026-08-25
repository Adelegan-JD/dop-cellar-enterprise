import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { d as whyUs } from "./router-CfGMwjot.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Why Choose Us",
        title: "An operating model built for reliability.",
        description: "Every engagement is delivered under the same discipline: certified engineers, documented standards, and accountable outcomes."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-60px" },
        className: "mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4",
        children: whyUs.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "bg-background p-6 lg:p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold", strokeWidth: 1.6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[14.5px] font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-relaxed text-muted-foreground", children: item.description })
          ] }, item.title);
        })
      }
    )
  ] }) });
}
export {
  WhyUs as W
};
