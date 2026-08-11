import { type ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 -z-10 grid-backdrop radial-fade opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
        </div>
        <h1 className="mt-7 max-w-4xl font-display text-balance text-[clamp(2.4rem,5.6vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-[1.75] text-muted-foreground md:text-[17px]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>

  );
}
