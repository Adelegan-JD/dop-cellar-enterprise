import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { site } from "@/config/site";

export function About() {
  return (
    <section id="about" className="relative border-t border-hairline py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="About the Firm"
              title="A serious engineering partner for Nigeria's most demanding infrastructure."
              description="DopCellar Merit Global Limited engineers, deploys, and maintains the physical and electronic systems that critical operations depend on — from banking branches and corporate facilities to industrial plants and government infrastructure."
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                {
                  title: "Infrastructure Development",
                  body: "Multi-disciplinary delivery across electrical, structural, network, and security systems for greenfield and brownfield programs.",
                },
                {
                  title: "Engineering Reliability",
                  body: "Design-led execution with documented standards, acceptance testing, and traceable commissioning records.",
                },
                {
                  title: "Industrial Operations",
                  body: "Preventive and reactive maintenance programs engineered for asset uptime and operational continuity.",
                },
                {
                  title: "Scalable Solutions",
                  body: "Repeatable delivery playbooks that scale from single-site builds to nationwide rollouts.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="border-l border-hairline pl-5">
                    <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-xl border border-hairline bg-card p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Leadership
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                    <span className="font-display text-xl text-gold">SD</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">{site.manager.name}</div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                      {site.manager.role}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground">
                  Samuel leads engineering delivery across all programs, with a focus on system
                  reliability, technical governance, and operational excellence for clients in
                  banking, industrial, and government sectors.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline">
                  {[
                    { k: "Disciplines", v: "10+" },
                    { k: "Sectors Served", v: "6" },
                    { k: "HQ", v: "Port Harcourt" },
                    { k: "Founded", v: "Nigeria" },
                  ].map((m) => (
                    <div key={m.k} className="bg-card p-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {m.k}
                      </div>
                      <div className="mt-1 text-sm font-medium text-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
