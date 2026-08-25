import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C05MMUTO.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader, s as staggerChildren, f as fadeUp } from "./SectionHeader-BKwdQC69.mjs";
import { a as products, w as whatsappLink } from "./router-CfGMwjot.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowUpRight, h as MessageCircle } from "../_libs/lucide-react.mjs";
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
function Products({
  limit,
  showFilters = false
}) {
  const allCategories = reactExports.useMemo(() => Array.from(new Set(products.map((p) => p.category))), []);
  const [active, setActive] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    const base = active === "All" ? products : products.filter((p) => p.category === active);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [active, limit]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "relative border-t border-hairline py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Products & Catalog",
          title: "Security, surveillance and access-control hardware we supply and install.",
          description: "Procurement-grade catalog of CCTV cameras, DVR/NVR kits, biometric access control, intrusion alarms and portable power. Request a quote or full invoice for any item."
        }
      ),
      typeof limit === "number" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground",
          children: [
            "View full catalog",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: ["All", ...allCategories].map((cat) => {
      const isActive = active === cat;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActive(cat),
          className: `rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-[0.16em] transition-colors ${isActive ? "border-gold bg-gold/10 text-gold" : "border-hairline text-muted-foreground hover:text-foreground"}`,
          children: cat
        },
        cat
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-60px" },
        className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            variants: fadeUp,
            className: "group flex flex-col overflow-hidden rounded-xl border border-hairline bg-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.name,
                    loading: "lazy",
                    className: "h-full w-full object-contain p-6 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.18] select-none",
                    style: {
                      backgroundImage: "repeating-linear-gradient(-30deg, transparent 0 60px, rgba(201,168,76,0.0) 60px 80px)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rotate-[-22deg] whitespace-nowrap font-display text-[clamp(1.1rem,2.2vw,1.6rem)] tracking-[0.25em] text-foreground/10", children: "DOPCELLAR · MERIT · DOPCELLAR · MERIT" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur", children: p.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-muted-foreground", children: p.shortDescription }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5 text-[13px] text-muted-foreground", children: p.specifications.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/70" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
                ] }, s)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-hairline pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.16em] text-muted-foreground", children: "Quote on request" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: whatsappLink(
                        `Hello DopCellar Merit, I'd like a quote/invoice for: ${p.name}.`
                      ),
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                        "Request invoice"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          p.slug
        ))
      },
      active
    )
  ] }) });
}
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Products", title: "Catalog of security, surveillance and access-control hardware.", description: "Browse the equipment we supply, install and maintain. Request an invoice or quotation for any item directly via WhatsApp or our contact form." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Products, { showFilters: true })
  ] });
}
export {
  ProductsPage as component
};
