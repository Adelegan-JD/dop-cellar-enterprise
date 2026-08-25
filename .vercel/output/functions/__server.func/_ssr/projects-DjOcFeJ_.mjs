import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C05MMUTO.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { p as projects, t as testimonials } from "./router-CfGMwjot.mjs";
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
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Selected Projects",
          title: "Engineering programs delivered for serious clients.",
          description: "A glimpse of recent infrastructure programs across banking, security, electrical, and network deployments."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projects",
          className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground",
          children: [
            "View case studies",
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
        className: "mt-16 grid gap-6 lg:grid-cols-6",
        children: projects.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            variants: fadeUp,
            className: `group relative overflow-hidden rounded-xl border border-hairline bg-card ${idx === 0 ? "lg:col-span-4" : idx === 1 ? "lg:col-span-2" : "lg:col-span-2"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.title,
                    loading: "lazy",
                    className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur", children: p.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.location }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.year })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl text-foreground", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-muted-foreground", children: p.summary })
              ] })
            ]
          },
          p.slug
        ))
      }
    )
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Voices from the Field",
        title: "Trusted by operators across banking, facilities, and industry."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-60px" },
        className: "mt-16 grid gap-6 md:grid-cols-2",
        children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.figure,
          {
            variants: fadeUp,
            className: "relative rounded-xl border border-hairline bg-card p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl leading-none text-gold/60", children: '"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-2 text-[15px] leading-relaxed text-foreground/90", children: t.quote }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 border-t border-hairline pt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold text-foreground", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-muted-foreground", children: [
                  t.role,
                  " · ",
                  t.company
                ] })
              ] })
            ]
          },
          t.name
        ))
      }
    )
  ] }) });
}
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Case Studies", title: "Engineering programs delivered for serious operators.", description: "A selection of infrastructure programs across financial services, security, electrical, and network deployments." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  ProjectsPage as component
};
