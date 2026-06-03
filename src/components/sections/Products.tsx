import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/common/SectionHeader";
import { products } from "@/config/content";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { whatsappLink } from "@/config/site";

export function Products({
  limit,
  showFilters = false,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [],
  );
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    const base = active === "All" ? products : products.filter((p) => p.category === active);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [active, limit]);

  return (
    <section id="products" className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Products & Catalog"
            title="Security, surveillance and access-control hardware we supply and install."
            description="Procurement-grade catalog of CCTV cameras, DVR/NVR kits, biometric access control, intrusion alarms and portable power. Request a quote or full invoice for any item."
          />
          {typeof limit === "number" && (
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground"
            >
              View full catalog
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {showFilters && (
          <div className="mt-10 flex flex-wrap gap-2">
            {["All", ...allCategories].map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-hairline text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        <motion.div
          key={active}
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p) => (
            <motion.article
              key={p.slug}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
                {/* Anti-plagiarism watermark overlay — repeating brand wordmark */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.18] select-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-30deg, transparent 0 60px, rgba(201,168,76,0.0) 60px 80px)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
                >
                  <span className="rotate-[-22deg] whitespace-nowrap font-display text-[clamp(1.1rem,2.2vw,1.6rem)] tracking-[0.25em] text-foreground/10">
                    DOPCELLAR · MERIT · DOPCELLAR · MERIT
                  </span>
                </div>
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {p.shortDescription}
                </p>

                <ul className="mt-4 space-y-1.5 text-[13px] text-muted-foreground">
                  {p.specifications.slice(0, 3).map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Quote on request
                  </span>
                  <a
                    href={whatsappLink(`Hello DopCellar Merit, I'd like a quote/invoice for: ${p.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Request invoice
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
