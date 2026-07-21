import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { galleryPhotos } from "@/config/gallery";
import { fadeUp, staggerChildren } from "@/lib/motion";

const engagements = [
  {
    sector: "Banking",
    challenge: "Branch continuity across ATM lobbies and back-office.",
    systems: ["Hybrid Power", "CCTV", "Access Control"],
    outcome: "99.6% branch uptime · sub-4h incident response.",
    image: galleryPhotos[11]?.src,
  },
  {
    sector: "Healthcare",
    challenge: "Zero-tolerance life-safety across theatre and wards.",
    systems: ["Fire Detection", "Emergency Power", "Surveillance"],
    outcome: "Certified commissioning · 24/7 monitored coverage.",
    image: galleryPhotos[14]?.src,
  },
  {
    sector: "Commercial Real Estate",
    challenge: "Tenant-ready building infrastructure from day one.",
    systems: ["Electrical", "Structured Cabling", "BMS-ready"],
    outcome: "Single integrated handover pack for landlord & tenants.",
    image: galleryPhotos[2]?.src,
  },
  {
    sector: "Manufacturing",
    challenge: "Measurable plant uptime and perimeter security.",
    systems: ["LV/MV Switchgear", "PTZ Surveillance", "Preventive Maintenance"],
    outcome: "Documented PPM cycles · condition-based servicing.",
    image: galleryPhotos[20]?.src,
  },
];

export function FeaturedSolutions() {
  return (
    <section
      id="featured-solutions"
      className="relative border-t border-hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Solutions"
          title="Engineered engagements, not gallery thumbnails."
          description="A working sample of integrated infrastructure programmes DopCellar has delivered across regulated Nigerian sectors."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {engagements.map((e) => (
            <motion.article
              key={e.sector}
              variants={fadeUp}
              className="group overflow-hidden rounded-xl border border-hairline bg-card transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg"
            >
              {e.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={e.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-hairline bg-background/80 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.16em] text-gold backdrop-blur">
                    {e.sector}
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground">
                  {e.challenge}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.systems.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-[11px] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 border-t border-hairline pt-4">
                  <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                    Measured outcome
                  </div>
                  <div className="mt-1 text-[14px] text-foreground">
                    {e.outcome}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20"
          >
            See the full body of work
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
