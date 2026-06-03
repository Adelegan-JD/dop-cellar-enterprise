import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { nav, site } from "@/config/site";
import { services } from "@/config/content";
import { Logo } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className="text-foreground/80 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug} className="text-foreground/80">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              {site.offices.map((o) => (
                <li key={o.city} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {o.role}
                    </span>
                    {o.line1}
                    {o.line2 ? `, ${o.line2}` : ""}, {o.city}, {o.state}
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${site.contact.phoneE164}`} className="hover:text-gold">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</div>
          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
