import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Contact } from "@/components/sections/Contact";
import {
  galleryPhotos,
  galleryVideos,
  galleryCategories,
  type GalleryCategory,
} from "@/config/gallery";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Work Gallery — DopCellar Merit Global Limited" },
      {
        name: "description",
        content:
          "Real fieldwork from DopCellar Merit engineering teams — CCTV, solar & power, electrical cabling, and on-site installations across Nigeria.",
      },
      { property: "og:title", content: "Work Gallery — DopCellar Merit" },
      {
        property: "og:description",
        content: "Photos and videos from live DopCellar Merit installations across Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Filter = "All" | GalleryCategory;
const FILTERS: Filter[] = ["All", ...galleryCategories];

function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const photos = useMemo(
    () => (filter === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter)),
    [filter],
  );
  const videos = useMemo(
    () => (filter === "All" ? galleryVideos : galleryVideos.filter((v) => v.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow="Work Gallery"
        title="Real installations. Real teams. Real sites."
        description="A working record of DopCellar Merit fieldwork across Nigeria — commissioning, servicing, and infrastructure builds captured on the job."
      />

      <section className="relative border-t border-hairline py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-hairline text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Photo masonry */}
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
            {photos.map((p) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setLightbox(p.src)}
                className="group mb-4 block w-full overflow-hidden rounded-lg border border-hairline bg-card text-left"
              >
                <div className="relative">
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-gold">
                      {p.category}
                    </div>
                    <div className="text-[13px] text-white">{p.caption}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Videos */}
          {videos.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="font-display text-3xl text-foreground">From the field — video</h2>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {videos.length} clip{videos.length === 1 ? "" : "s"}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((v) => (
                  <figure
                    key={v.src}
                    className="overflow-hidden rounded-lg border border-hairline bg-card"
                  >
                    <video
                      src={v.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-video w-full bg-black object-cover"
                    />
                    <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                      <span className="text-[13px] text-foreground">{v.caption}</span>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-gold">
                        {v.category}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          >
            <img
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-md border border-white/20 bg-black/40 px-3 py-1.5 text-[12px] text-white"
            >
              Close
            </button>
          </div>
        )}
      </section>

      <Contact />
    </>
  );
}
