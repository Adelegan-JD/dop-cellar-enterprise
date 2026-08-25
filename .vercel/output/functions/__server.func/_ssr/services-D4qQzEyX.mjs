import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C05MMUTO.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { s as services } from "./router-CfGMwjot.mjs";
import { P as Process } from "./Process-Dc0uRvp_.mjs";
import { C as Contact } from "./Contact-2ML1oEji.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/zod.mjs";
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "services",
      className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "Services",
              title: "Engineered systems for mission-critical environments.",
              description: "Ten integrated disciplines, delivered under a single engineering standard and accountable to a single delivery framework."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/services",
              className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground",
              children: [
                "All capabilities",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: staggerChildren,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" },
            className: "mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3",
            children: services.map((s) => {
              const Icon = s.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "group relative bg-background p-7 transition-colors hover:bg-surface-elevated",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md border border-hairline bg-card text-gold transition-colors group-hover:border-gold/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5", strokeWidth: 1.6 }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-[15px] font-semibold text-foreground", children: s.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13.5px] leading-relaxed text-muted-foreground", children: s.summary })
                  ]
                },
                s.slug
              );
            })
          }
        )
      ] })
    }
  );
}
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Capabilities", title: "Ten engineering disciplines. One delivery standard.", description: "From electrical and structural engineering to enterprise security and industrial maintenance — every service is governed by the same rigor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  ServicesPage as component
};
