import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackdrop } from "@/components/common/AnimatedBackdrop";
import { commitments } from "@/config/content";
import { galleryPhotos } from "@/config/gallery";

const HERO_ROTATION = [
  galleryPhotos[19], // engineers on-site
  galleryPhotos[4], // camera install
  galleryPhotos[14], // inverter rack
  galleryPhotos[9], // monitoring
].filter(Boolean);

const HEADLINE_WORDS = ["Your", "operations", "never", "stop."];
const HEADLINE_ACCENT = ["Neither", "do", "we."];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_ROTATION.length), 6500);
    return () => clearInterval(id);
  }, []);
  const current = HERO_ROTATION[idx];

  return (
    <section className="relative isolate flex min-h-[720px] items-center overflow-hidden pt-24 lg:min-h-[860px]">
      {/* Engineering backdrop + cinematic photo drift */}
      <AnimatedBackdrop />
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={current?.src}
            src={current?.src}
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.32, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
        {/* Cool navy grade + vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/78 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/25" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 lg:pb-32 lg:pt-24">
        {/* Eyebrow with drawing hairline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="block h-px w-10 bg-gold"
          />
          Integrated Smart Infrastructure · Nigeria
        </motion.div>

        {/* Headline — word cascade */}
        <h1 className="mt-10 max-w-5xl font-display text-balance text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-foreground">
          <span className="block">
            {HEADLINE_WORDS.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.28em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="mt-1 block text-gold">
            {HEADLINE_ACCENT.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + (HEADLINE_WORDS.length + i) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.28em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-base leading-[1.65] text-muted-foreground md:text-lg"
        >
          We engineer the power, security, fire and automation layers that hold a business together
          — so downtime, loss and life-safety risk stop being your problem to manage. One
          assessment. One accountable engineering partner. One system that keeps working.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-md bg-gold px-6 text-[13.5px] font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:bg-gold/90 hover:-translate-y-px"
          >
            <Link to="/contact">
              Book a free site assessment
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-md border-hairline bg-transparent px-6 text-[13.5px] font-medium text-foreground hover:bg-surface/60"
          >
            <Link to="/platform">
              See how the platform works
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <span className="text-[12px] text-muted-foreground sm:ml-2">
            No cost. No obligation. Engineer-led, not sales-led.
          </span>
        </motion.div>

        {/* Sector trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-muted-foreground"
        >
          <span className="text-[10.5px] uppercase tracking-[0.2em] text-gold/80">
            Engineered for
          </span>
          <span>Banking</span>
          <span className="text-hairline">·</span>
          <span>Healthcare</span>
          <span className="text-hairline">·</span>
          <span>Government</span>
          <span className="text-hairline">·</span>
          <span>Manufacturing</span>
          <span className="text-hairline">·</span>
          <span>Commercial Real Estate</span>
        </motion.div>

        {/* Operating commitments — verifiable, never fabricated */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline lg:mt-24 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background/70 p-6 backdrop-blur md:p-7"
            >
              <div className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.5rem]">
                {c.value}
              </div>
              <div className="mt-3 text-[10.5px] uppercase tracking-[0.2em] text-gold/90">
                {c.label}
              </div>
              <p className="mt-2 hidden text-[12.5px] leading-relaxed text-muted-foreground sm:block">
                {c.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
