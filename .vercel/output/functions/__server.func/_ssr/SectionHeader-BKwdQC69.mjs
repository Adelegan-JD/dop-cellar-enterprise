import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const easeOutSoft = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutSoft }
  }
};
const staggerChildren = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      variants: fadeUp,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
      children
    }
  );
}
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${alignment}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-gold/60" }),
      eyebrow
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-balance text-[clamp(2rem,4.2vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-foreground", children: title }) }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-pretty text-[15.5px] leading-[1.75] text-muted-foreground md:text-[17px]", children: description }) })
  ] });
}
export {
  Reveal as R,
  SectionHeader as S,
  fadeUp as f,
  staggerChildren as s
};
