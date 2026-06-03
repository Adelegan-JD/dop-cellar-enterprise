import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Wrench,
  Package,
  Building2,
  Factory,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";

const cards = [
  {
    href: "/services",
    label: "Services",
    description: "Electrical, automation, security, networks, construction.",
    icon: Wrench,
  },
  {
    href: "/products",
    label: "Products",
    description: "CCTV, access control, alarms, power — full catalog.",
    icon: Package,
  },
  {
    href: "/projects",
    label: "Projects",
    description: "Selected case studies from banking, industrial and gov.",
    icon: Building2,
  },
  {
    href: "/industries",
    label: "Industries",
    description: "Sectors we serve and the systems we deliver in each.",
    icon: Factory,
  },
  {
    href: "/about",
    label: "About",
    description: "Leadership, capability statement and how we operate.",
    icon: ShieldCheck,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Request a consultation, quotation or invoice.",
    icon: MessageSquare,
  },
] as const;

export function HomeSections() {
  return (
    <section id="explore" className="relative border-t border-hairline py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Explore"
          title="Jump straight to what you came for."
          description="Each section opens a dedicated page — no endless scrolling."
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.href} variants={fadeUp}>
                <Link
                  to={c.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-hairline bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-2xl text-foreground">{c.label}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
