import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { galleryPhotos } from "@/config/gallery";
import { fadeUp, staggerChildren } from "@/lib/motion";

/**
 * Reference architectures — how we engineer for each environment.
 * Deliberately no client names or claimed performance figures.
 */
const blueprints = [
  {
    sector: "Banking & Financial Services",
    challenge: "A branch that cannot afford a dark minute.",
    systems: ["Solar-hybrid power", "Surveillance", "Access control"],
    approach:
      "Load-audited hybrid power with automatic changeover, evidence-grade camera coverage over cash points, and audited door control — designed so a grid failure never becomes a service failure.",
    image: galleryPhotos[11]?.src,
  },
  {
    sector: "Healthcare",
    challenge: "Life-safety systems with no tolerance for ambiguity.",
    systems: ["Fire detection", "Emergency power", "Monitored coverage"],
    approach:
      "Zoned detection and alarm design, emergency supply for critical circuits, and a commissioning pack that gives clinical leadership documented proof that each zone was tested.",
    image: galleryPhotos[14]?.src,
  },
  {
    sector: "Commercial Real Estate",
    challenge: "Buildings that must be tenant-ready on handover day.",
    systems: ["Electrical backbone", "Structured cabling", "BMS-ready"],
    approach:
      "A single integrated electrical and cabling backbone with labelled, as-built documentation — so landlords hand tenants an infrastructure pack instead of a mystery.",
    image: galleryPhotos[2]?.src,
  },
  {
    sector: "Manufacturing & Industry",
    challenge: "Downtime measured in lost production, not inconvenience.",
    systems: ["LV switchgear", "Perimeter surveillance", "Preventive maintenance"],
    approach:
      "Switchgear and distribution engineered around process criticality, perimeter coverage on the routes that actually matter, and a preventive schedule tied to plant run-hours.",
    image: galleryPhotos[20]?.src,
  },
];

export function FeaturedSolutions() {
  return (
    <section
      id="featured-solutions"
      className="relative border-t border-hairline bg-surface/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Reference Architectures"
          title="How we engineer for the environments that cannot stop."
          description="These are our design blueprints — the engineering logic we apply per environment. Every one of them is discussed openly with your team before a single cable is pulled."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {blueprints.map((b) => (
            <motion.article
              key={b.sector}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-elevated)]"
            >
              {b.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={b.image}
                    alt={`${b.sector} infrastructure engineering`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-hairline bg-background/85 px-3 py-1 text-[10.5px] uppercase tracking-[0.18em] text-gold backdrop-blur">
                    {b.sector}
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="font-display text-[1.4rem] leading-snug tracking-[-0.01em] text-foreground">
                  {b.challenge}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground">
                  {b.approach}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {b.systems.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-hairline bg-background/60 px-3 py-1 text-[11px] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 border-t border-hairline pt-5 text-[13px] font-medium text-foreground transition-colors hover:text-gold"
                >
                  Discuss this for your facility
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-background/70 px-6 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-gold/40"
          >
            See our field work
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
