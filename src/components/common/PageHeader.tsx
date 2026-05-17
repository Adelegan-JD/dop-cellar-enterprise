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
    <section className="relative isolate overflow-hidden border-b border-hairline pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 -z-10 grid-backdrop radial-fade opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          <span className="h-px w-6 bg-gold/60" />
          {eyebrow}
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-balance text-5xl leading-[1.04] text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
