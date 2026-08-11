import { motion } from "framer-motion";
import { TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const outcomes = [
  {
    icon: Clock,
    metric: "99.6%",
    label: "Branch uptime",
    body: "Multi-branch commercial bank — redundant power, monitored UPS, and 24/7 fault escalation across the estate.",
    sector: "Banking · Rivers & Oyo",
  },
  {
    icon: Zap,
    metric: "62%",
    label: "Diesel spend reduction",
    body: "Hybrid solar + storage retrofit for a corporate HQ, offsetting generator run-hours across daytime critical loads.",
    sector: "Commercial · Lagos",
  },
  {
    icon: ShieldCheck,
    metric: "0",
    label: "Security incidents post-deploy",
    body: "Integrated CCTV, access control, and intrusion with central monitoring for a multi-facility industrial operator.",
    sector: "Industrial · Port Harcourt",
  },
  {
    icon: TrendingUp,
    metric: "-38%",
    label: "Unplanned downtime",
    body: "Condition-based preventive maintenance program across process equipment for a heavy-manufacturing plant.",
    sector: "Industrial · South-South",
  },
];

export function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative border-t border-hairline py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Delivered Outcomes"
          title="We measure our work by what it changes for the business."
          description="A sample of results from live DopCellar Merit deployments across Nigeria — quantified, documented, and referenced."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
        >
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.label}
                variants={fadeUp}
                className="relative bg-background p-7"
              >
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <div className="mt-6 font-display text-5xl leading-none text-foreground">
                  {o.metric}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-gold/80">
                  {o.label}
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
                <div className="mt-5 border-t border-hairline pt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {o.sector}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
