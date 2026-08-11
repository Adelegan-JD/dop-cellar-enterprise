import { motion } from "framer-motion";
import { ClipboardList, PencilRuler, HardHat, LifeBuoy } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Consultation & site assessment",
    body: "Engineer-led survey, load analysis and operational risk review — signed off before a single line item is quoted.",
  },
  {
    n: "02",
    icon: PencilRuler,
    title: "Solution design",
    body: "Costed engineering pathway with drawings, specifications and integration plan — reviewable by your own consultants.",
  },
  {
    n: "03",
    icon: HardHat,
    title: "Professional installation",
    body: "Certified engineers, sequenced delivery, structured commissioning and acceptance testing with documented handover.",
  },
  {
    n: "04",
    icon: LifeBuoy,
    title: "Maintenance & lifecycle support",
    body: "Preventive service schedule, response SLA and long-horizon support so systems keep performing years after go-live.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative border-t border-hairline bg-surface/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How We Work"
          title="A four-step engineering process built for accountability."
          description="Every engagement follows the same discipline — from first site visit to lifecycle support — so operations leads know exactly what happens next."
        />

        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.n}
                variants={fadeUp}
                className="relative overflow-hidden rounded-xl border border-hairline bg-card p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl text-gold/70">{s.n}</span>
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-lg text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
