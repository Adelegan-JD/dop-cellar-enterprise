import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const faqs = [
  {
    q: "Do you deliver as a single contractor across power, security and fire?",
    a: "Yes. Every DopCellar engagement is delivered under one contract, one project manager and one accountability line — covering power, security, fire, network and building automation as one integrated scope.",
  },
  {
    q: "What compliance standards do you engineer against?",
    a: "Our electrical, fire and security work is executed against the relevant Nigerian regulatory codes and international engineering standards. Every project ships with a compliance pack: drawings, test records, and acceptance documentation auditors and insurers can rely on.",
  },
  {
    q: "How do you handle sites outside Ibadan and Port Harcourt?",
    a: "Head office is Ibadan, branch in Port Harcourt, with mobilisation capability across Nigeria's commercial corridors. Site-remote installations are engineered from our design office and delivered by mobilised crews with the same commissioning discipline as local jobs.",
  },
  {
    q: "What does your maintenance SLA cover?",
    a: "Scheduled preventive service, quarterly condition reports, spare-parts management, and engineer-led escalation (not a call-centre queue). SLA tiers are calibrated to your operational risk — mission-critical sites get faster response windows and on-site engineering standby.",
  },
  {
    q: "Can you integrate with our existing BMS, SOC or access system?",
    a: "In most cases yes. Our design process starts by auditing what you already run — BMS, SOC, VMS, access — and specifying integration points rather than replacement. Where systems are end-of-life, we stage migrations to keep operations continuous.",
  },
  {
    q: "How is a project scoped and priced?",
    a: "A senior engineer runs a site assessment: load profile, risk map, and operational objectives. That produces a documented brief, a costed engineering pathway, and a phased delivery plan — reviewable by your own consultants before commitment.",
  },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faqs"
      className="relative border-t border-hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Frequently Asked"
          title="Executive-level questions, answered."
          description="The questions operations leads, procurement teams and CFOs ask us before signing."
        />

        <div className="mt-14 divide-y divide-hairline overflow-hidden rounded-xl border border-hairline bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-surface/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-foreground md:text-xl">
                    {f.q}
                  </span>
                  <Plus
                    className={`mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
