import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeader } from "@/components/common/SectionHeader";
import { site, whatsappLink } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    // Future: POST to a Lovable Cloud edge function / CRM endpoint.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Request received. Our team will respond within one business day.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative border-t border-hairline bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Speak with our engineering team."
          description="Share project specifics and we'll respond with a structured consultation pathway."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {site.offices.map((o) => (
                <ContactRow
                  key={o.city}
                  icon={<MapPin className="h-4 w-4" />}
                  label={o.role}
                >
                  {o.line1}
                  {o.line2 && (
                    <>
                      <br />
                      {o.line2}
                    </>
                  )}
                  <br />
                  {o.city}, {o.state}, {o.country}
                </ContactRow>
              ))}
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone">
                <a className="hover:text-gold" href={`tel:${site.contact.phoneE164}`}>
                  {site.contact.phone}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email">
                <a className="hover:text-gold" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp">
                <a
                  className="inline-flex items-center gap-1.5 hover:text-gold"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </ContactRow>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={site.forms.solar}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-hairline bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40"
              >
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Inquiry form
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <div className="font-display text-lg text-foreground">Solar solution</div>
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
              <a
                href={site.forms.cctvAlarm}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-hairline bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40"
              >
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Inquiry form
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <div className="font-display text-lg text-foreground">CCTV & fire alarm</div>
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </div>

            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-card">
              <iframe
                title="Office location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.contact.address.line1}, ${site.contact.address.city}, ${site.contact.address.state}`,
                )}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-hairline bg-card p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required placeholder="Samuel Dopamu" />
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
              <Field label="Company" name="company" placeholder="Organization" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <Label htmlFor="message" className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                  Project Brief
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe scope, location, and timeline."
                  className="mt-2 rounded-md border-hairline bg-background/60"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-[12px] text-muted-foreground">
                We respond to qualified inquiries within one business day.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="h-11 rounded-md bg-gold text-primary-foreground hover:bg-gold/90"
              >
                {submitting ? "Submitting..." : "Submit Request"}
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 border-l border-hairline pl-5">
      <div className="mt-1 grid h-8 w-8 place-items-center rounded-md bg-gold/10 text-gold ring-1 ring-gold/20">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-[14.5px] leading-relaxed text-foreground/90">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 rounded-md border-hairline bg-background/60"
      />
    </div>
  );
}
