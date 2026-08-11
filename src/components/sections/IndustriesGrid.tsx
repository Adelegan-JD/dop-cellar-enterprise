import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Briefcase,
  Landmark,
  HeartPulse,
  GraduationCap,
  Hotel,
  Factory,
  ShieldCheck,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const industries = [
  { icon: Briefcase, name: "SMEs", outcome: "Continuity for lean teams." },
  { icon: Landmark, name: "Banking", outcome: "Regulator-grade branch uptime." },
  { icon: HeartPulse, name: "Hospitals", outcome: "Zero-tolerance life-safety." },
  { icon: GraduationCap, name: "Schools", outcome: "Safe, monitored learning environments." },
  { icon: Hotel, name: "Hotels", outcome: "Guest-experience-grade reliability." },
  { icon: Factory, name: "Manufacturing", outcome: "Measurable plant uptime." },
  { icon: ShieldCheck, name: "Government", outcome: "Compliance and lifecycle accountability." },
  { icon: Building2, name: "Commercial Buildings", outcome: "Tenant-ready on day one." },
];

export function IndustriesGrid() {
  return (
    <section
      id="industries"
      className="relative border-t border-hairline bg-surface/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Engineered for the sectors Nigeria cannot afford to have fail."
          description="Every sector below reflects a specific operational-continuity brief we've engineered against — not a generic service list."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                variants={fadeUp}
                className="group relative bg-card p-6 transition-colors hover:bg-card/70"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg text-foreground">
                  {s.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.outcome}
                </p>
                <ArrowUpRight className="mt-4 h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/industries"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20"
          >
            Explore every industry we serve
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
