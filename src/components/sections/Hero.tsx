import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/common/StatCounter";
import { AnimatedBackdrop } from "@/components/common/AnimatedBackdrop";
import { kpis } from "@/config/content";
import { galleryPhotos } from "@/config/gallery";

const HERO_ROTATION = [
  galleryPhotos[19], // team on-site
  galleryPhotos[4],  // camera install
  galleryPhotos[14], // inverter
  galleryPhotos[9],  // monitoring rack
].filter(Boolean);

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % HERO_ROTATION.length),
      5500,
    );
    return () => clearInterval(id);
  }, []);
  const current = HERO_ROTATION[idx];

  return (
    <section className="relative isolate overflow-hidden pt-24">
      {/* Animated engineering backdrop */}
      <AnimatedBackdrop />
      {/* Rotating fieldwork photo for depth */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.22, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full w-full object-cover mix-blend-luminosity"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:pb-32 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Engineering · Infrastructure · Industrial Technology
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-display text-balance text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          Building reliable engineering infrastructure across{" "}
          <span className="text-gold">Nigeria</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Delivering electrical engineering, automation, construction, security
          infrastructure, and industrial technology solutions with precision and
          long-term reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="h-11 rounded-md bg-gold text-primary-foreground hover:bg-gold/90">
            <Link to="/contact">
              Request Consultation
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 rounded-md border-hairline bg-transparent text-foreground hover:bg-surface/60"
          >
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* KPI strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-background/60 p-6 backdrop-blur">
              <div className="font-display text-4xl text-foreground md:text-5xl">
                <StatCounter value={k.value} suffix={k.suffix} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
