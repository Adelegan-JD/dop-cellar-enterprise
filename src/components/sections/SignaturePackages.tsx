import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sun, Siren, Building2, Server } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { site, whatsappLink } from "@/config/site";

const packages = [
  {
    icon: Building2,
    name: "Branch-Ready",
    tagline: "Turnkey banking branch infrastructure",
    price: "Scoped per branch",
    includes: [
      "LV distribution, UPS & backup power",
      "ATM lobby electrification & security",
      "IP CCTV + access control + intrusion",
      "Structured cabling & branch LAN",
      "Commissioning + 12-month SLA",
    ],
    ctaLabel: "Request branch assessment",
    ctaHref: whatsappLink(
      "Hello DopCellar Merit — I'd like to scope a Branch-Ready deployment.",
    ),
  },
  {
    icon: Sun,
    name: "Continuity Power",
    tagline: "Hybrid solar + inverter + storage for critical loads",
    price: "3 kVA — 100 kVA+",
    includes: [
      "Load audit & solar yield modelling",
      "Grade-A inverter + lithium storage",
      "Automatic changeover & remote monitoring",
      "Certified installation & load-shed logic",
      "Preventive maintenance plan",
    ],
    ctaLabel: "Request solar quote",
    ctaHref: site.forms.solar,
    highlighted: true,
  },
  {
    icon: Siren,
    name: "Secure Perimeter",
    tagline: "Integrated CCTV, access & intrusion for facilities",
    price: "Scoped per site",
    includes: [
      "IP camera design + NVR architecture",
      "Access control (RFID / biometric)",
      "Intrusion & fire alarm integration",
      "Central monitoring & mobile alerts",
      "24/7 SLA-backed response",
    ],
    ctaLabel: "Request CCTV & alarm quote",
    ctaHref: site.forms.cctvAlarm,
  },
  {
    icon: Server,
    name: "Enterprise Network",
    tagline: "Fiber backbone, structured cabling & core switching",
    price: "Scoped per site",
    includes: [
      "Fiber + Cat6/6A structured cabling",
      "Core + edge switching architecture",
      "Wi-Fi 6 coverage design",
      "Rack build, labelling & documentation",
      "As-built drawings & handover pack",
    ],
    ctaLabel: "Request network scoping",
    ctaHref: whatsappLink(
      "Hello DopCellar Merit — I'd like to scope an Enterprise Network deployment.",
    ),
  },
];

export function SignaturePackages() {
  return (
    <section
      id="packages"
      className="relative border-t border-hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Signature Packages"
          title="Pre-engineered solution bundles, ready to deploy."
          description="Fixed-scope programs built from our field-tested playbooks — designed to compress procurement, engineering, and commissioning into a single accountable delivery."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {packages.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className={`group relative flex flex-col overflow-hidden rounded-xl border p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                  p.highlighted
                    ? "border-gold/50 bg-gradient-to-b from-gold/10 to-card"
                    : "border-hairline bg-card hover:border-gold/40"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-gold">
                    Most requested
                  </span>
                )}
                <div className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted-foreground">
                  {p.tagline}
                </p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold/80">
                  {p.price}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {p.includes.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-foreground/85"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-between gap-2 rounded-md border border-hairline bg-background/60 px-4 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:border-gold/40 hover:bg-gold/10"
                >
                  {p.ctaLabel}
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
