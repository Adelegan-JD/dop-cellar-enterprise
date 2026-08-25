import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/common/SectionHeader";
import { services } from "@/config/content";
import { staggerChildren, fadeUp } from "@/lib/motion";

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-hairline bg-surface/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Engineered systems for mission-critical environments."
            description="Ten integrated disciplines, delivered under a single engineering standard and accountable to a single delivery framework."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground"
          >
            All capabilities
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                variants={fadeUp}
                className="group relative bg-background p-7 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-md border border-hairline bg-card text-gold transition-colors group-hover:border-gold/40">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 text-[15px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
