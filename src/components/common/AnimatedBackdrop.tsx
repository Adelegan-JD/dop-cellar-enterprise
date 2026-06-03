/**
 * Professional engineering-themed animated backdrop.
 * Layered radial gradients + drifting orbs + blueprint grid + diagonal pattern + sweep.
 * Pure CSS, GPU-friendly, respects prefers-reduced-motion.
 */
export function AnimatedBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial wash — warm gold to deep navy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,color-mix(in_oklab,var(--color-gold)_18%,transparent),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_10%,color-mix(in_oklab,var(--color-steel)_22%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,color-mix(in_oklab,var(--color-gold)_12%,transparent),transparent_65%)]" />

      {/* Drifting orbs */}
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl animate-blob-slow" />
      <div className="absolute right-[-10rem] top-40 h-[24rem] w-[24rem] rounded-full bg-steel/25 blur-3xl animate-blob-slower" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-gold/12 blur-3xl animate-blob-slow" />

      {/* Animated blueprint grid */}
      <div className="absolute inset-0 grid-backdrop animate-grid-drift opacity-60" />

      {/* Diagonal engineering hatch */}
      <div className="absolute inset-0 hatch-backdrop opacity-[0.35]" />

      {/* Subtle film grain */}
      <div className="absolute inset-0 noise-backdrop opacity-[0.06]" />

      {/* Softening overlay so content reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Sweeping highlight line — engineering motion */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent animate-sweep" />
    </div>
  );
}
