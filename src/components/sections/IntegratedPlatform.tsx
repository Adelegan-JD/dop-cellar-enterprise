import { motion } from "framer-motion";
import { Sun, Cctv, Flame, KeyRound, Zap, Cpu, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const disciplines = [
  { icon: Sun, label: "Solar Energy", role: "Continuous, clean power." },
  { icon: Cctv, label: "CCTV Surveillance", role: "Evidence-grade visibility." },
  { icon: Flame, label: "Fire Detection", role: "Life-safety compliance." },
  { icon: KeyRound, label: "Access Control", role: "Governed movement." },
  { icon: Zap, label: "Electrical Engineering", role: "Reliable distribution." },
  { icon: Cpu, label: "Building Automation", role: "One unified control layer." },
  { icon: Wrench, label: "Preventive Maintenance", role: "Systems that keep performing." },
];

export function IntegratedPlatform() {
  return (
    <section id="platform" className="relative border-t border-hairline py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          {/* Manifesto */}
          <div>
            <SectionHeader
              eyebrow="The Integrated Infrastructure Platform"
              title="Seven disciplines. One accountability line."
              description="Most operators buy security, power and fire from different vendors. When something fails, no one owns the outcome. We built DopCellar as one platform so accountability, data and control live in one place."
            />
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {[
                { k: "Unified design", v: "One engineering team, one drawing set." },
                { k: "Unified commissioning", v: "One handover, one acceptance record." },
                { k: "Unified maintenance", v: "One SLA covering every discipline." },
              ].map((p) => (
                <motion.div
                  key={p.k}
                  variants={fadeUp}
                  className="rounded-lg border border-hairline bg-card/60 p-4"
                >
                  <div className="text-[11px] uppercase tracking-[0.16em] text-gold">{p.k}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.v}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Orbit diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* orbit rings */}
            <div className="absolute inset-4 rounded-full border border-hairline" />
            <div className="absolute inset-14 rounded-full border border-hairline/70" />
            <div className="absolute inset-24 rounded-full border border-hairline/50" />

            {/* core */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-full border border-gold/40 bg-gold/10 px-5 py-4 text-center backdrop-blur">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Core Outcome</div>
                <div className="mt-1 font-display text-base text-foreground md:text-lg">
                  Operations
                  <br />
                  Continuity
                </div>
              </div>
            </div>

            {/* nodes */}
            {disciplines.map((d, i) => {
              const angle = (i / disciplines.length) * Math.PI * 2 - Math.PI / 2;
              const r = 46; // percent
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-hairline bg-background shadow-sm ring-1 ring-gold/20 transition-all group-hover:ring-gold/60">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </div>
                  <div className="pointer-events-none absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 rounded-md border border-hairline bg-background/95 p-2 text-center opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                    <div className="text-[11px] font-medium text-foreground">{d.label}</div>
                    <div className="text-[10.5px] text-muted-foreground">{d.role}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
