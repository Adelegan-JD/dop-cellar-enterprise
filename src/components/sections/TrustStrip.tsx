import { ShieldCheck, Award, Wrench, MapPin } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Mission-critical delivery" },
  { icon: Award, label: "Compliance-first engineering" },
  { icon: Wrench, label: "SLA-backed lifecycle support" },
  { icon: MapPin, label: "Ibadan HQ · Port Harcourt branch" },
];

export function TrustStrip() {
  return (
    <section className="relative border-t border-hairline bg-background/60 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className="flex items-center gap-3 text-[12.5px] text-muted-foreground"
              >
                <div className="grid h-9 w-9 place-items-center rounded-md bg-gold/10 ring-1 ring-gold/20">
                  <Icon className="h-4 w-4 text-gold" strokeWidth={1.6} />
                </div>
                <span className="leading-tight">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
