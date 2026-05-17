/**
 * Single source of truth for company info, navigation, and socials.
 * A future Lovable Cloud / CMS layer can replace these exports without touching components.
 */

export const site = {
  name: "Dop Cellar Global Limited",
  shortName: "Dop Cellar",
  legalName: "Dop Cellar Global Limited",
  tagline: "Engineering Infrastructure for Nigeria's Future",
  description:
    "Dop Cellar Global Limited delivers electrical engineering, automation, construction, security infrastructure, and industrial technology solutions across Nigeria.",
  url: "https://dopcellar.com",
  manager: {
    name: "Samuel Oladimeji Dopamu",
    role: "Engineering Manager",
  },
  contact: {
    email: "dopcellarmerit@gmail.com",
    phone: "+234 806 665 4689",
    phoneE164: "+2348066654689",
    whatsapp: "2348066654689",
    address: {
      line1: "4 Creek View Drive, Woji",
      city: "Port Harcourt",
      state: "Rivers State",
      country: "Nigeria",
    },
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dop-cellar-merit-global-limited/" },
    { label: "Instagram", href: "https://www.instagram.com/dopcellarmerit/" },
    { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61589408714918" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCbYlIhFS1-BQBygODanhv0g" },
    { label: "X", href: "https://x.com/CellarDop" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const whatsappLink = (message = "Hello Dop Cellar, I'd like to request a consultation.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
