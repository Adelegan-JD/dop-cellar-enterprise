import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Zap,
  Flame,
  Activity,
  Building,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const problems = [
  {
    icon: ShieldAlert,
    outcome: "Protect your business",
    problem: "Unauthorised access, theft, disputed incidents.",
    solution:
      "Integrated CCTV, access control and perimeter systems — evidence-grade footage and real-time alerts.",
  },
  {
    icon: Zap,
    outcome: "Keep operations running",
    problem: "Grid outages, generator fuel drain, unpredictable diesel bills.",
    solution:
      "Solar-hybrid, inverter and switchgear engineering built for continuous business operations.",
  },
  {
    icon: Flame,
    outcome: "Prevent fire damage",
    problem: "Life-safety exposure, insurance non-compliance, asset loss.",
    solution:
      "Certified fire detection, suppression and alarm systems — engineered before an incident becomes a disaster.",
  },
  {
    icon: Activity,
    outcome: "Reduce energy costs",
    problem: "Rising tariffs, over-sized diesel plants, no consumption data.",
    solution:
      "Load audits, right-sized hybrid systems and metering that turns energy from a bill into a managed asset.",
  },
  {
    icon: Building,
    outcome: "Modernise infrastructure",
    problem: "Legacy wiring, unstructured cabling, siloed building systems.",
    solution:
      "MEP upgrades, structured cabling and BMS-ready electrical backbones — one integrated platform.",
  },
];

export function ProblemsSolved() {
  return (
    <section
      id="solutions"
      className="relative border-t border-hairline bg-surface/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Business Problems We Solve"
          title="Executives don't buy products. They buy outcomes."
          description="Every DopCellar engagement starts with the operational risk you're trying to remove — not a shopping list of hardware."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.outcome}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-hairline bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-gold">
                  {p.outcome}
                </div>
                <h3 className="mt-2 font-display text-xl text-foreground">
                  {p.problem}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {p.solution}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20"
          >
            Explore the full solutions ecosystem
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
