import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { testimonials } from "@/config/content";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Voices from the Field"
          title="Trusted by operators across banking, facilities, and industry."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="relative rounded-xl border border-hairline bg-card p-8"
            >
              <div className="font-display text-5xl leading-none text-gold/60">"</div>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-hairline pt-5">
                <div className="text-[13px] font-semibold text-foreground">{t.name}</div>
                <div className="text-[12px] text-muted-foreground">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
