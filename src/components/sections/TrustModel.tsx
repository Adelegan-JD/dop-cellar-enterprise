import { motion } from "framer-motion";
import { FileSearch, Clock, Wrench, Users, ShieldCheck, Compass } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const pillars = [
  {
    icon: FileSearch,
    title: "Documented engineering, not promises",
    body: "Every engagement produces drawings, load calculations, specifications and a commissioning record. You can hand our documentation to an independent consultant before you sign anything.",
  },
  {
    icon: Clock,
    title: "Response time you can hold us to",
    body: "Assessment scheduled within 48 hours. Escalation reaches the engineer on your account — not a queue. Response tiers are written into the agreement, not implied.",
  },
  {
    icon: Wrench,
    title: "Maintenance is the contract, not an upsell",
    body: "Preventive schedules, condition reports and spare-parts planning are designed in from day one. Systems that are maintained are systems that stay operational.",
  },
  {
    icon: Users,
    title: "Built on the Cellar Brothers lineage",
    body: "DopCellar Merit was formed by engineers from the Cellar Brothers network — carrying forward established field discipline, supplier relationships and installation standards into an integrated infrastructure practice.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent scope and pricing",
    body: "Costed engineering pathways with line-item scope. No hidden change orders, no vague allowances. If a variation is needed, it is raised, priced and approved in writing.",
  },
  {
    icon: Compass,
    title: "A long-horizon commitment",
    body: "We are building a national integrated infrastructure practice — which means our incentive is your system performing in year five, not the invoice in month one.",
  },
];

export function TrustModel() {
  return (
    <section id="trust" className="relative border-t border-hairline py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How We Earn Trust"
          title="We don't borrow credibility. We publish our method."
          description="We are deliberate about not decorating this website with logos we haven't earned or numbers we can't evidence. Instead, judge us on the things you can verify before you commit a naira."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group relative bg-card p-8 transition-colors md:p-10"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <h3 className="mt-6 font-display text-[1.3rem] leading-snug tracking-[-0.01em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">{p.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-[14px] leading-[1.7] text-muted-foreground">
          Ask us for a reference design, a commissioning checklist or a maintenance schedule
          template before you engage us. Firms that hide their method rarely have one.
        </p>
      </div>
    </section>
  );
}
