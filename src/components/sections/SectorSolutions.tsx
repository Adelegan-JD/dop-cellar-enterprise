import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Landmark, Building2, Factory, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const sectors = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    outcome: "Branch uptime, ATM continuity, secure vaults.",
    body: "Branch electrification, ATM lobby buildouts, redundant power, integrated CCTV & access control — engineered for regulator-grade uptime.",
    tags: ["Branch fit-out", "ATM lobbies", "Vault access", "SOC integration"],
  },
  {
    icon: Building2,
    title: "Retail & Commercial Real Estate",
    outcome: "Tenant-ready buildings, day-one.",
    body: "MEP coordination, structured cabling, building security, and life-safety systems for offices, retail parks, and mixed-use developments.",
    tags: ["MEP", "Structured cabling", "Fire alarm", "BMS-ready"],
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    outcome: "Asset reliability, measurable uptime.",
    body: "Plant electrification, LV/MV switchgear, condition-based maintenance, and industrial network backbones built for continuous operations.",
    tags: ["Switchgear", "PPM", "Fiber backbone", "SCADA-ready"],
  },
  {
    icon: ShieldCheck,
    title: "Government & Critical Infrastructure",
    outcome: "Compliance, accountability, lifecycle value.",
    body: "Public-sector engineering delivered against documented standards, with traceable commissioning and long-horizon maintenance frameworks.",
    tags: ["Compliance", "Perimeter security", "Command centres", "Lifecycle SLAs"],
  },
];

export function SectorSolutions() {
  return (
    <section
      id="sectors"
      className="relative border-t border-hairline bg-surface/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sector Solutions"
          title="Engineered for the sectors Nigeria cannot afford to have fail."
          description="We build the physical and electronic infrastructure that banks, commercial operators, industrial plants, and public institutions rely on to stay operational."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-hairline bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-gold/80 sm:max-w-[55%] sm:text-right">
                    {s.outcome}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-[11px] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/industries"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20"
          >
            See all industries we serve
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
