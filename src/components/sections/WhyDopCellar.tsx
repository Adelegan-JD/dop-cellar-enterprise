import { motion } from "framer-motion";
import {
  Layers,
  BadgeCheck,
  Wrench,
  FileCheck2,
  MapPinned,
  Radio,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const pillars = [
  {
    icon: Layers,
    title: "One integrated ecosystem",
    body: "Security, power, fire safety, network and building systems — engineered as one platform, not stitched together from separate vendors.",
  },
  {
    icon: BadgeCheck,
    title: "Engineering-grade delivery",
    body: "Every project runs against documented standards, structured commissioning and traceable acceptance records — the same rigor Tier-1 clients expect.",
  },
  {
    icon: Wrench,
    title: "Lifecycle maintenance",
    body: "SLA-backed preventive maintenance keeps systems operational long after installation — no orphaned deployments.",
  },
  {
    icon: FileCheck2,
    title: "Compliance-first",
    body: "Fire, electrical and security work executed to relevant Nigerian regulatory codes with the documentation auditors and insurers require.",
  },
  {
    icon: MapPinned,
    title: "Nationwide presence",
    body: "Head office in Ibadan, branch in Port Harcourt, and mobilisation capability across Nigeria's commercial corridors.",
  },
  {
    icon: Radio,
    title: "Rapid response",
    body: "Direct engineering escalation — not a call centre. Mission-critical sites get engineer-led response, not a ticket queue.",
  },
];

export function WhyDopCellar() {
  return (
    <section
      id="why-dopcellar"
      className="relative border-t border-hairline py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why DopCellar"
          title="One integrated engineering partner. Not five uncoordinated vendors."
          description="Most Nigerian operators treat security, power, and fire as separate problems. That's why they fail together. We built DopCellar because they don't have to."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group bg-card p-8 transition-colors hover:bg-card/80"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
