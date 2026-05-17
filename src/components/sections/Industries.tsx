import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { industries } from "@/config/content";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Industries() {
  return (
    <section id="industries" className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries Served"
          title="Trusted across the sectors that hold the economy together."
          description="From financial services and government to industrial operations and real estate, our engineering standards adapt to each sector without compromise."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((i) => {
            const Icon = i.icon;
            return (
              <motion.div
                key={i.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-hairline bg-card p-7 transition-all hover:border-gold/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 text-gold ring-1 ring-gold/20">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{i.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {i.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
