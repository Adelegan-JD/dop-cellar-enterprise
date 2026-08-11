import { ArrowUpRight, MessageCircle, Check } from "lucide-react";
import { site, whatsappLink } from "@/config/site";

const steps = [
  "You share the site and the operational risk that worries you.",
  "An engineer visits, surveys and documents what is actually there.",
  "You receive a costed engineering pathway — yours to review, keep or decline.",
];

export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-primary py-28 text-primary-foreground md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Consultation
          </div>
          <h2 className="mt-7 font-display text-balance text-4xl leading-[1.04] tracking-[-0.02em] text-primary-foreground sm:text-5xl md:text-[3.35rem]">
            Start with an assessment, not a quotation.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-[1.7] text-primary-foreground/75 md:text-lg">
            A senior engineer walks your site, maps where continuity actually
            breaks, and returns a documented pathway you can hand to your own
            consultants. There is no cost and no commitment attached to it.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.forms.solar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[13px] font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-px hover:bg-gold/90"
            >
              Book a free site assessment
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(
                "Hello DopCellar Merit — I'd like to speak to an engineer about my facility.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3.5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" />
              Ask an engineer on WhatsApp
            </a>
          </div>

          <p className="mt-7 text-[12px] uppercase tracking-[0.18em] text-primary-foreground/55">
            Reply within one business day · Ibadan · Port Harcourt · Nationwide
            mobilisation
          </p>
        </div>

        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-8 backdrop-blur-sm md:p-10">
          <div className="text-[10.5px] uppercase tracking-[0.2em] text-gold">
            What happens next
          </div>
          <ol className="mt-7 space-y-6">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/40 font-mono text-[11px] text-gold">
                  {i + 1}
                </span>
                <p className="text-[14.5px] leading-[1.7] text-primary-foreground/85">
                  {s}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-8 space-y-2.5 border-t border-primary-foreground/15 pt-7">
            {[
              "No sales script — you speak to the engineer",
              "Documentation you can independently review",
              "Walk away at any stage, at no cost",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2.5 text-[13px] text-primary-foreground/70"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-gold" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
