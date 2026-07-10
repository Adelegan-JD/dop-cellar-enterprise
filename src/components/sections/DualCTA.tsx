import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, PackageSearch } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function DualCTA() {
  return (
    <section className="relative border-t border-hairline bg-surface/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Project Assessment */}
          <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-card via-card to-gold/5 p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="grid h-12 w-12 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
              <ClipboardCheck className="h-5 w-5 text-gold" />
            </div>
            <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-gold">
              For facilities & operations leads
            </div>
            <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">
              Book a project assessment.
            </h3>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Site survey, load analysis, and a costed engineering pathway — delivered
              by our senior engineers within one business week.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-[13px] font-medium text-primary-foreground hover:bg-gold/90"
              >
                Request assessment
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  "Hello DopCellar Merit — I'd like to book a project assessment.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-hairline bg-background/60 px-5 py-2.5 text-[13px] font-medium text-foreground hover:border-gold/40"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Product Consultation */}
          <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-card via-card to-steel/10 p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="grid h-12 w-12 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/30">
              <PackageSearch className="h-5 w-5 text-gold" />
            </div>
            <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-gold">
              For procurement & IT
            </div>
            <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">
              Speak to a product specialist.
            </h3>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Specification support, compatible-system pairing, and quotation on our
              CCTV, access control, alarm, and power catalog.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-[13px] font-medium text-background hover:bg-foreground/90"
              >
                Browse catalog
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-hairline bg-background/60 px-5 py-2.5 text-[13px] font-medium text-foreground hover:border-gold/40"
              >
                Request quotation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
