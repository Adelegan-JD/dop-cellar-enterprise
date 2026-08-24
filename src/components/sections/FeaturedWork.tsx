import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { galleryPhotos } from "@/config/gallery";
import { fadeUp, staggerChildren } from "@/lib/motion";

// Curated preview — one from each discipline
const featured = [
  galleryPhotos[19], // team on-site
  galleryPhotos[4], // camera install
  galleryPhotos[14], // inverter
  galleryPhotos[9], // monitoring rack
  galleryPhotos[2], // rack build
  galleryPhotos[15], // battery bank
  galleryPhotos[20], // perimeter camera
  galleryPhotos[11], // distribution board
].filter(Boolean);

export function FeaturedWork() {
  return (
    <section id="featured-work" className="relative border-t border-hairline py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="From the field"
          title="A working record of what we deliver."
          description="Live installations and servicing across CCTV, solar & power, and electrical infrastructure — captured on the job by our engineers."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {featured.map((p) => (
            <motion.div
              key={p.src}
              variants={fadeUp}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-hairline bg-card"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                <div className="text-[10px] uppercase tracking-[0.14em] text-gold">
                  {p.category}
                </div>
                <div className="text-[12px] text-white/95">{p.caption}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20"
          >
            View the full work gallery
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
