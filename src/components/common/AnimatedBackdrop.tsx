/**
 * Subtle engineering-themed animated backdrop.
 * Pure CSS: drifting gold orbs + slowly-shifting blueprint grid.
 * Renders behind content, no JS, GPU-friendly.
 */
export function AnimatedBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Drifting orbs */}
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl animate-blob-slow" />
      <div className="absolute right-[-10rem] top-40 h-[24rem] w-[24rem] rounded-full bg-steel/30 blur-3xl animate-blob-slower" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-gold/10 blur-3xl animate-blob-slow" />

      {/* Animated blueprint grid */}
      <div className="absolute inset-0 grid-backdrop animate-grid-drift opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      {/* Sweeping highlight line — engineering motion */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent animate-sweep" />
    </div>
  );
}
