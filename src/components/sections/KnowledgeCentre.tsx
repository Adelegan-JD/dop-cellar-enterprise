import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, FileText, Lightbulb, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const articles = [
  {
    type: "Guide",
    icon: BookOpen,
    title: "Sizing a hybrid solar system for a Nigerian bank branch",
    excerpt:
      "How to calculate branch load profile, battery autonomy and PV array size for regulator-grade uptime.",
    read: "9 min read",
  },
  {
    type: "Whitepaper",
    icon: FileText,
    title: "Fire compliance for commercial buildings — what auditors actually check",
    excerpt:
      "The specific documentation, drawings and certifications insurers and regulators demand at hand-over.",
    read: "12 min read",
  },
  {
    type: "Insight",
    icon: Lightbulb,
    title: "Why fragmented security systems fail during real incidents",
    excerpt:
      "When CCTV, access control and alarms live with different vendors, the seams — not the cameras — are where losses happen.",
    read: "6 min read",
  },
];

export function KnowledgeCentre() {
  return (
    <section
      id="knowledge"
      className="relative border-t border-hairline bg-surface/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Knowledge Centre"
          title="Engineering perspective, published."
          description="Practical guides, compliance whitepapers and short insights from the DopCellar engineering team."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {articles.map((a) => {
            const Icon = a.icon;
            return (
              <motion.article
                key={a.title}
                variants={fadeUp}
                className="group flex flex-col rounded-xl border border-hairline bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] text-gold">
                  <Icon className="h-3.5 w-3.5" />
                  {a.type}
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-foreground">
                  {a.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-[11.5px] text-muted-foreground">
                  <span>{a.read}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/knowledge"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-gold/20"
          >
            Visit the Knowledge Centre
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
