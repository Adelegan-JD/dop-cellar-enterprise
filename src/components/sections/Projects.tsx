import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects } from "@/config/content";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Selected Projects"
            title="Engineering programs delivered for serious clients."
            description="A glimpse of recent infrastructure programs across banking, security, electrical, and network deployments."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-foreground"
          >
            View case studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 lg:grid-cols-6"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.slug}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-xl border border-hairline bg-card ${
                idx === 0 ? "lg:col-span-4" : idx === 1 ? "lg:col-span-2" : "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{p.location}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
