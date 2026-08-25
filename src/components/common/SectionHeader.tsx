import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold/60" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-balance text-[clamp(2rem,4.2vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-foreground">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-[1.75] text-muted-foreground md:text-[17px]">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
