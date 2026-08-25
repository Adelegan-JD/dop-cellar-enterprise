import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as site, w as whatsappLink, B as Button, e as cn } from "./router-CfGMwjot.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as SectionHeader } from "./SectionHeader-BKwdQC69.mjs";
import { e as MapPin, f as Phone, g as Mail, A as ArrowUpRight, h as MessageCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const schema = objectType({
  name: stringType().trim().min(2, "Name is required").max(100),
  email: stringType().trim().email("Invalid email").max(255),
  company: stringType().trim().max(120).optional(),
  message: stringType().trim().min(10, "Tell us a bit more").max(2e3)
});
function Contact() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || "")
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Request received. Our team will respond within one business day.");
    e.target.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "contact",
      className: "relative border-t border-hairline bg-surface/40 py-28 md:py-36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Get in Touch",
            title: "Speak with our engineering team.",
            description: "Share project specifics and we'll respond with a structured consultation pathway."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-10 lg:grid-cols-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              site.offices.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }), label: o.role, children: [
                o.line1,
                o.line2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  o.line2
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                o.city,
                ", ",
                o.state,
                ", ",
                o.country
              ] }, o.city)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-gold", href: `tel:${site.contact.phoneE164}`, children: site.contact.phone }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }), label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-gold", href: `mailto:${site.contact.email}`, children: site.contact.email }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }), label: "WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  className: "inline-flex items-center gap-1.5 hover:text-gold",
                  href: whatsappLink(),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    "Start a conversation ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: site.forms.solar,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group rounded-xl border border-hairline bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.16em] text-muted-foreground", children: "Inquiry form" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-foreground", children: "Solar solution" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: site.forms.cctvAlarm,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group rounded-xl border border-hairline bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.16em] text-muted-foreground", children: "Inquiry form" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-foreground", children: "CCTV & fire alarm" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                title: "Office location map",
                src: `https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.contact.address.line1}, ${site.contact.address.city}, ${site.contact.address.state}`
                )}&output=embed`,
                className: "h-full w-full",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit,
              className: "rounded-xl border border-hairline bg-card p-8 lg:col-span-7",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name", required: true, placeholder: "Samuel Dopamu" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Field,
                    {
                      label: "Email",
                      name: "email",
                      type: "email",
                      required: true,
                      placeholder: "you@company.com"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Field,
                    {
                      label: "Company",
                      name: "company",
                      placeholder: "Organization",
                      className: "sm:col-span-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "message",
                        className: "text-[12px] uppercase tracking-[0.16em] text-muted-foreground",
                        children: "Project Brief"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "message",
                        name: "message",
                        required: true,
                        rows: 6,
                        placeholder: "Describe scope, location, and timeline.",
                        className: "mt-2 rounded-md border-hairline bg-background/60"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "We respond to qualified inquiries within one business day." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "submit",
                      disabled: submitting,
                      className: "h-11 rounded-md bg-gold text-primary-foreground hover:bg-gold/90",
                      children: [
                        submitting ? "Submitting..." : "Submit Request",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1.5 h-4 w-4" })
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function ContactRow({
  icon,
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 border-l border-hairline pl-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 grid h-8 w-8 place-items-center rounded-md bg-gold/10 text-gold ring-1 ring-gold/20", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[14.5px] leading-relaxed text-foreground/90", children })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Label,
      {
        htmlFor: name,
        className: "text-[12px] uppercase tracking-[0.16em] text-muted-foreground",
        children: [
          label,
          required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-gold", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: name,
        name,
        type,
        required,
        placeholder,
        className: "mt-2 h-11 rounded-md border-hairline bg-background/60"
      }
    )
  ] });
}
export {
  Contact as C
};
