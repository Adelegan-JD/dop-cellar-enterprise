import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { whyUs } from "@/config/content";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function WhyUs() {
  return (
    <section className="relative border-t border-hairline bg-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="An operating model built for reliability."
          description="Every engagement is delivered under the same discipline: certified engineers, documented standards, and accountable outcomes."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} className="bg-background p-6 lg:p-7">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <h3 className="mt-5 text-[14.5px] font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
