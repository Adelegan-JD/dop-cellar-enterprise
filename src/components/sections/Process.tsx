import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { process } from "@/config/content";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Process() {
  return (
    <section className="relative border-t border-hairline bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Engineering Framework"
          title="A six-stage delivery model engineered for accountability."
        />

        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3"
        >
          {process.map((p) => (
            <motion.li
              key={p.step}
              variants={fadeUp}
              className="relative bg-background p-7"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-gold">{p.step}</div>
              <h3 className="mt-3 font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
