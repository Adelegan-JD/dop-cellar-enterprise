import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/config/site";

export function ConsultationCTA() {
  return (
    <section className="relative border-t border-hairline bg-primary py-24 text-primary-foreground md:py-28">
      {/* subtle backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Consultation
        </div>
        <h2 className="mt-6 font-display text-balance text-4xl leading-[1.05] text-primary-foreground sm:text-5xl md:text-[3.25rem]">
          Book a site assessment. Get an engineered answer, not a quote sheet.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          A senior engineer will assess your site, map operational risk, and
          return a costed engineering pathway — reviewable by your own
          consultants before commitment.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.forms.solar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[13px] font-medium text-primary-foreground hover:bg-gold/90"
          >
            Request Site Assessment
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={whatsappLink(
              "Hello DopCellar Merit — I'd like to speak to an engineer.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3 text-[13px] font-medium text-primary-foreground hover:bg-primary-foreground/10"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to an engineer on WhatsApp
          </a>
        </div>
        <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-primary-foreground/60">
          Response within one business day · Ibadan · Port Harcourt · Nationwide mobilisation
        </p>
      </div>
    </section>
  );
}
