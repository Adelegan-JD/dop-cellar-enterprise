/**
 * Single source of truth for company info, navigation, socials, and inquiry forms.
 */

export const site = {
  name: "DopCellar Merit Global Limited",
  shortName: "DopCellar Merit",
  legalName: "DopCellar Merit Global Limited",
  tagline: "Engineering Infrastructure for Nigeria's Future",
  description:
    "DopCellar Merit Global Limited delivers electrical engineering, automation, construction, security infrastructure, and industrial technology solutions across Nigeria.",
  url: "https://dopcellar.com",
  manager: {
    name: "Samuel Oladimeji Dopamu",
    role: "Engineering Manager",
  },
  contact: {
    email: "dopcellarmerit@gmail.com",
    phone: "+234 909 811 1974",
    phoneE164: "+2349098111974",
    whatsapp: "2349098111974",
    /**
     * Head office (used by structured-data / schema.org).
     * Multi-branch listing lives in `offices` below.
     */
    address: {
      line1: "60/63 Awolowo Junction, Adjacent Wema Bank Plc, Sango-Elewure Road",
      city: "Ibadan",
      state: "Oyo State",
      country: "Nigeria",
    },
  },
  offices: [
    {
      role: "Head Office",
      line1: "60/63 Awolowo Junction, Adjacent Wema Bank Plc",
      line2: "Sango-Elewure Road",
      city: "Ibadan",
      state: "Oyo State",
      country: "Nigeria",
    },
    {
      role: "Branch Office",
      line1: "4 Creek View Drive, Woji",
      line2: "",
      city: "Port Harcourt",
      state: "Rivers State",
      country: "Nigeria",
    },
  ],
  /**
   * Google Forms used for product / service inquiries.
   */
  forms: {
    solar: "https://forms.gle/6eK3UbHhuDR9niwY9",
    cctvAlarm: "https://forms.gle/2VsFZjT1dk7ebBmY7",
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
  { label: "Solutions", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Uses the canonical wa.me deep link — works on desktop (opens web.whatsapp.com
 * when no WhatsApp Desktop client is installed) and on mobile (opens the app).
 */
export const whatsappLink = (message = "Hello DopCellar Merit, I'd like to request a consultation.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
