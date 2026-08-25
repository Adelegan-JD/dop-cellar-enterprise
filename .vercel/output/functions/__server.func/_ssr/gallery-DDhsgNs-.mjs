import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C05MMUTO.mjs";
import { C as Contact } from "./Contact-2ML1oEji.mjs";
import { g as galleryPhotos, a as galleryVideos, b as galleryCategories } from "./gallery-BQiuiqv1.mjs";
import "../_libs/sonner.mjs";
import "./router-CfGMwjot.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "./SectionHeader-BKwdQC69.mjs";
import "../_libs/zod.mjs";
const FILTERS = ["All", ...galleryCategories];
function GalleryPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const photos = reactExports.useMemo(() => filter === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter), [filter]);
  const videos = reactExports.useMemo(() => filter === "All" ? galleryVideos : galleryVideos.filter((v) => v.category === filter), [filter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Work Gallery", title: "Real installations. Real teams. Real sites.", description: "A working record of DopCellar Merit fieldwork across Nigeria — commissioning, servicing, and infrastructure builds captured on the job." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-t border-hairline py-14 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: FILTERS.map((f) => {
          const active = filter === f;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFilter(f), className: `rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] transition-colors ${active ? "border-gold bg-gold/10 text-foreground" : "border-hairline text-muted-foreground hover:text-foreground"}`, children: f }, f);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]", children: photos.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setLightbox(p.src), className: "group mb-4 block w-full overflow-hidden rounded-lg border border-hairline bg-card text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.caption, loading: "lazy", className: "w-full transition-transform duration-500 group-hover:scale-[1.02]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.14em] text-gold", children: p.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-white", children: p.caption })
          ] })
        ] }) }, p.src)) }),
        videos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground", children: "From the field — video" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.16em] text-muted-foreground", children: [
              videos.length,
              " clip",
              videos.length === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "overflow-hidden rounded-lg border border-hairline bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: v.src, controls: true, playsInline: true, preload: "metadata", className: "aspect-video w-full bg-black object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "flex items-center justify-between gap-3 px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground", children: v.caption }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.14em] text-gold", children: v.category })
            ] })
          ] }, v.src)) })
        ] })
      ] }),
      lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "dialog", "aria-modal": true, onClick: () => setLightbox(null), className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightbox, alt: "", className: "max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Close", onClick: () => setLightbox(null), className: "absolute right-4 top-4 rounded-md border border-white/20 bg-black/40 px-3 py-1.5 text-[12px] text-white", children: "Close" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  GalleryPage as component
};
