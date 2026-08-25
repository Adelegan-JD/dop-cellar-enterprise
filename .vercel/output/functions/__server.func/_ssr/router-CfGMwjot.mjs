import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { u as useScroll, a as useSpring, m as motion } from "../_libs/framer-motion.mjs";
import { S as Sun, M as Moon, A as ArrowUpRight, X, a as Menu, Z as Zap, B as Building2, L as Landmark, N as Network, C as Cctv, b as Siren, W as Wrench, c as Cog, P as PencilRuler, d as ShieldCheck, e as MapPin, f as Phone, g as Mail, h as MessageCircle, i as Building, F as Factory, j as Briefcase, H as House, k as Server, l as CircleGauge, T as Truck, m as Activity } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BGA4AW3j.css";
const site = {
  name: "DopCellar Merit Global Limited",
  legalName: "DopCellar Merit Global Limited",
  description: "DopCellar Merit Global Limited delivers electrical engineering, automation, construction, security infrastructure, and industrial technology solutions across Nigeria.",
  url: "https://dopcellar.com",
  manager: {
    name: "Samuel Oladimeji Dopamu",
    role: "Engineering Manager"
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
      country: "Nigeria"
    }
  },
  offices: [
    {
      role: "Head Office",
      line1: "60/63 Awolowo Junction, Adjacent Wema Bank Plc",
      line2: "Sango-Elewure Road",
      city: "Ibadan",
      state: "Oyo State",
      country: "Nigeria"
    },
    {
      role: "Branch Office",
      line1: "4 Creek View Drive, Woji",
      line2: "",
      city: "Port Harcourt",
      state: "Rivers State",
      country: "Nigeria"
    }
  ],
  /**
   * Google Forms used for product / service inquiries.
   */
  forms: {
    solar: "https://forms.gle/6eK3UbHhuDR9niwY9",
    cctvAlarm: "https://forms.gle/2VsFZjT1dk7ebBmY7"
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dop-cellar-merit-global-limited/" },
    { label: "Instagram", href: "https://www.instagram.com/dopcellarmerit/" },
    { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61589408714918" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCbYlIhFS1-BQBygODanhv0g" },
    { label: "X", href: "https://x.com/CellarDop" }
  ]
};
const nav = [
  { label: "Solutions", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Platform", href: "/platform" },
  { label: "Work", href: "/projects" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
const whatsappLink = (message = "Hello DopCellar Merit, I'd like to request a consultation.") => `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
const STORAGE_KEY = "dopcellar-theme";
const DEFAULT_THEME = "light";
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}
function useTheme() {
  const [theme, setTheme] = reactExports.useState(DEFAULT_THEME);
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    setTheme(stored);
    applyTheme(stored);
  }, []);
  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  };
  return { theme, toggle };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logoSrc = "/assets/logo-BGsmN-Mv.png";
function Logo({
  withWordmark = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", "aria-label": site.name, className: `group flex items-center gap-2.5 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logoSrc,
        alt: `${site.name} logo`,
        width: 40,
        height: 40,
        className: "h-10 w-10 rounded-full bg-white object-contain p-0.5 ring-1 ring-hairline"
      }
    ),
    withWordmark && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: "DopCellar Merit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Global Limited" })
    ] })
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  const { location } = useRouterState();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => setOpen(false), [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-hairline bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85 shadow-[0_1px_0_0_var(--color-hairline)]" : "border-b border-transparent bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 md:bg-transparent md:backdrop-blur-none"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[72px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: nav.map((item) => {
            const active = location.pathname.startsWith(item.href);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: item.href,
                className: `relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                children: [
                  item.label,
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-px bg-gold" })
                ]
              },
              item.href
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "hidden h-9 w-9 items-center justify-center rounded-md border border-hairline text-muted-foreground transition-colors hover:text-foreground md:inline-flex",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "sm",
                className: "hidden h-9 rounded-md bg-gold text-[12.5px] font-medium text-primary-foreground hover:bg-gold/90 md:inline-flex",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                  "Request Consultation",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-3.5 w-3.5" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-foreground md:hidden",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-hairline bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl flex-col px-6 py-4", children: [
          nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.href,
              className: "py-3 text-[15px] font-medium text-foreground/90",
              children: item.label
            },
            item.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "flex-1 bg-gold text-primary-foreground hover:bg-gold/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Request Consultation" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-muted-foreground",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
const url$4 = "/__l5e/assets-v1/a2ea805a-9e77-49f4-a604-24a283777f29/gallery-12.jpg";
const img12 = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/6d25f87d-76b4-46c9-a2ad-4665b07dc0f6/gallery-10.jpg";
const img10 = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/c968729d-e416-4ca7-bada-f8cfd47b8b7b/gallery-2.jpg";
const img2 = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/81cc5fd2-0b76-45d6-9b77-6545dc6cb62f/gallery-21.jpg";
const img21 = {
  url: url$1
};
const url = "/__l5e/assets-v1/5e73e956-5daf-4f50-a197-f4ee4746a527/gallery-3.jpg";
const img3 = {
  url
};
const bulletCamera = "data:image/jpeg;base64,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";
const cameraRange = "/assets/camera-range-DarjUO9C.jpg";
const cctvSystem = "/assets/cctv-system-CaFkygTX.jpg";
const cctvKit = "/assets/cctv-kit-C1mwD_Q4.jpg";
const exitAlarm = "/assets/exit-alarm-CzX2mB25.jpg";
const fingerprintAccess = "/assets/fingerprint-access-v1NsFQus.jpg";
const hikvisionBullet = "/assets/hikvision-bullet-BPUJa6dd.jpg";
const alarmSystem = "/assets/alarm-system-fqZ2WR1y.jpg";
const speedDome = "/assets/speed-dome-BOpFvrqq.jpg";
const alarmKitH5 = "/assets/alarm-kit-h5-wifi-gsm-Ck9ZACh_.jpg";
const alarmKitH6 = "/assets/alarm-kit-h6-wifi-4g-Cvo1GRBR.jpg";
const alarmKitSa6pb = "/assets/alarm-kit-sa6pb-touchscreen-CbpG_Tfk.jpg";
const alarmKitSa5p = "/assets/alarm-kit-sa5p-wifi-4g-BNJBS-nK.jpg";
const alarmKitSx1 = "/assets/alarm-kit-sx1-smart-home-Bojdk4fQ.jpg";
const accessKeypadMetalRfid = "/assets/access-keypad-metal-rfid-YPaNX7AH.jpg";
const accessKeypadSlimWireless = "/assets/access-keypad-slim-wireless-hFummAQN.jpg";
const accessFingerprintTouch = "/assets/access-fingerprint-touch-keypad-DQApcG15.jpg";
const accessKeypadWeatherproof = "/assets/access-keypad-weatherproof-rfid-DTHzKcTf.jpg";
const accessKeypadCompactMetal = "/assets/access-keypad-compact-metal-Bkonuj-j.jpg";
const powerStationEcoflow1kva = "/assets/power-station-ecoflow-1kva-4aqGHa9x.jpg";
const powerStation300wPortable = "/assets/power-station-300w-portable-Cnt1mHpK.jpg";
const powerStationEcoflowRiver = "/assets/power-station-ecoflow-river-300w-DtO9Yx5Z.jpg";
const products = [
  {
    slug: "bullet-security-camera",
    name: "Bullet Style Security Camera",
    category: "CCTV & Surveillance",
    image: bulletCamera,
    shortDescription: "Weatherproof IR bullet camera engineered for perimeter surveillance and 24/7 outdoor monitoring.",
    specifications: [
      "HD resolution with IR night vision up to 30m",
      "IP66 weatherproof housing",
      "Wide-angle fixed lens",
      "BNC/IP output compatible with standard DVR/NVR"
    ],
    useCases: ["Perimeter monitoring", "Car parks", "Warehouse exteriors"]
  },
  {
    slug: "hikvision-outdoor-bullet",
    name: "Hikvision Outdoor Bullet Camera",
    category: "CCTV & Surveillance",
    image: hikvisionBullet,
    shortDescription: "Hikvision-grade outdoor bullet camera with professional optics and OEM-grade reliability.",
    specifications: [
      "Hikvision OEM imaging sensor",
      "Day/night auto switching",
      "Vandal-resistant aluminium housing",
      "PoE / 12V DC powered"
    ],
    useCases: ["Bank ATM lobbies", "Commercial buildings", "Government facilities"]
  },
  {
    slug: "speed-dome-ptz-camera",
    name: "Z-BEN Speed Dome PTZ Camera",
    category: "CCTV & Surveillance",
    image: speedDome,
    shortDescription: "High-speed pan-tilt-zoom dome camera for active surveillance over wide coverage areas.",
    specifications: [
      "360° pan / 90° tilt",
      "Optical zoom with auto-focus",
      "IR illumination for low-light operation",
      "Preset patrol & auto-tracking"
    ],
    useCases: ["Industrial yards", "Estate gatehouses", "Control-room monitoring"]
  },
  {
    slug: "cctv-system-kit",
    name: "Multi-Channel CCTV System",
    category: "Surveillance Kits",
    image: cctvSystem,
    shortDescription: "Turnkey multi-camera CCTV bundle with DVR, monitors and centralized control-room view.",
    specifications: [
      "4 / 8 / 16-channel DVR options",
      "Mixed dome + bullet camera kit",
      "Multi-screen live monitoring",
      "Remote mobile viewing"
    ],
    useCases: ["Retail outlets", "Branch offices", "Hospitality"]
  },
  {
    slug: "cctv-starter-kit",
    name: "CCTV Starter Kit (DVR + Cameras + Monitor)",
    category: "Surveillance Kits",
    image: cctvKit,
    shortDescription: "Complete plug-and-play CCTV kit including DVR, dome and bullet cameras, and dedicated monitor.",
    specifications: [
      "DVR with HDD bay",
      "Mixed indoor/outdoor cameras",
      "Dedicated CCTV monitor included",
      "Cabling and connectors bundled"
    ],
    useCases: ["Small businesses", "Residences", "Site offices"]
  },
  {
    slug: "ip-camera-range",
    name: "IP Camera & Detector Range",
    category: "Surveillance Components",
    image: cameraRange,
    shortDescription: "Catalog of IP cameras, smoke detectors, dome cameras and NVR units for custom system design.",
    specifications: [
      "Dome, bullet, PTZ and pinhole form factors",
      "Smoke & motion detectors",
      "Standalone NVR/DVR units",
      "Vendor-mixed for scope flexibility"
    ],
    useCases: ["Custom-engineered systems", "Multi-site rollouts"]
  },
  {
    slug: "fingerprint-door-access",
    name: "Fingerprint Door Access Controller",
    category: "Access Control",
    image: fingerprintAccess,
    shortDescription: "Biometric door access controller combining fingerprint, PIN and card credentials.",
    specifications: [
      "Fingerprint + PIN + RFID card",
      "On-device user enrolment",
      "Audit log of entries/exits",
      "Integrates with electric strike / maglock"
    ],
    useCases: ["Server rooms", "Executive offices", "Restricted-area entry"]
  },
  {
    slug: "exit-alarm-button",
    name: "Door Exit Alarm Push Button",
    category: "Access Control",
    image: exitAlarm,
    shortDescription: "Stainless steel illuminated exit-release button for controlled-door egress systems.",
    specifications: [
      "Stainless steel faceplate",
      "Illuminated LED ring",
      "NO/NC dry-contact output",
      "Flush-mount installation"
    ],
    useCases: ["Access-controlled doors", "Banking halls", "Secure rooms"]
  },
  {
    slug: "wireless-alarm-system",
    name: "Wireless Intrusion Alarm System",
    category: "Intrusion & Alarms",
    image: alarmSystem,
    shortDescription: "Complete wireless alarm system with PIR motion sensors, panic remote and central control panel.",
    specifications: [
      "Central control panel with keypad & LCD",
      "Wireless PIR motion sensor",
      "Panic / remote arming key fob",
      "Door/window contact sensors included"
    ],
    useCases: ["Residential security", "Small offices", "Retail shops"]
  },
  // ─── Intrusion & Alarms — branded catalog ─────────────────────────────
  {
    slug: "alarm-kit-h5-wifi-gsm",
    name: "H5 WiFi + GSM Smart Alarm Kit",
    category: "Intrusion & Alarms",
    image: alarmKitH5,
    shortDescription: "4.3-inch touchscreen WiFi + GSM alarm panel with PIR detector, door sensor, siren and remote controllers.",
    specifications: [
      '4.3" TFT colour touch screen',
      "WiFi + 2G GSM (4G variant available)",
      "iOS & Android app, SMS push alerts",
      "Door-bell / Ready-To-Arm modes",
      "8 languages, low-battery & sensor-lost monitoring"
    ],
    useCases: ["Residential security", "Small offices", "Retail outlets"]
  },
  {
    slug: "alarm-kit-h6-wifi-4g",
    name: "H6 WiFi + 4G Alarm System",
    category: "Intrusion & Alarms",
    image: alarmKitH6,
    shortDescription: "4G cellular alarm panel with built-in siren — operates over mobile data, no WiFi required.",
    specifications: [
      "App control via 4G GPRS — no WiFi needed",
      "Up to 46 wireless detectors + 8 remotes",
      "6 phone-call + 3 SMS alert numbers",
      "Built-in siren and 30-hour backup battery",
      "OTA firmware upgrade"
    ],
    useCases: ["Remote sites", "Estate gatehouses", "Off-grid facilities"]
  },
  {
    slug: "alarm-kit-sa6pb-touchscreen",
    name: "SA6PB Touchscreen Alarm Kit (Black)",
    category: "Intrusion & Alarms",
    image: alarmKitSa6pb,
    shortDescription: "WiFi + 2G alarm with 4.3-inch touch panel, voice message recording, and RFID tag support.",
    specifications: [
      '4.3" TFT colour touch screen',
      "WiFi + 2G GSM (WiFi + 4G variant available)",
      "Up to 100 remotes / detectors / RFID tags",
      "20-second voice message",
      "Last 100 events logged on-device"
    ],
    useCases: ["Residential", "Branch offices", "Boutique retail"]
  },
  {
    slug: "alarm-kit-sa5p-wifi-4g",
    name: "SA5P WiFi + 4G Alarm System",
    category: "Intrusion & Alarms",
    image: alarmKitSa5p,
    shortDescription: "Full alarm bundle with WiFi + 4G connectivity, PIR detector, door sensor, siren, remotes and key fobs.",
    specifications: [
      "WiFi + 4G connectivity",
      "Touch panel with 6-language support",
      "Renamable defence zones",
      "GPRS TCP/UDP protocol support",
      "Includes 2 remotes + 2 fobs"
    ],
    useCases: ["SMB premises", "Warehouses", "Multi-tenant residential"]
  },
  {
    slug: "alarm-kit-sx1-smart-home",
    name: "SX1 WiFi + 4G Smart-Home Alarm",
    category: "Intrusion & Alarms",
    image: alarmKitSx1,
    shortDescription: "Contact-ID monitoring-station compatible alarm with Alexa, Google Home and IFTTT integration.",
    specifications: [
      "Contact ID protocol for central monitoring stations",
      "Expandable to 50 sensors + 10 remotes",
      "Two wired zones for smoke / gas / vibration / IR beams",
      "Alarm output to trigger lights, TV etc. as deterrent",
      "110dB internal siren with mute mode",
      "Works with Alexa, Google Home, IFTTT"
    ],
    useCases: ["Smart homes", "Premium residential", "Monitored facilities"]
  },
  // ─── Access Control — branded catalog ────────────────────────────────
  {
    slug: "access-keypad-metal-rfid",
    name: "Metal RFID Keypad Access Controller",
    category: "Access Control",
    image: accessKeypadMetalRfid,
    shortDescription: "Anti-vandal zinc-alloy keypad with EM/Mifare RFID reader for standalone door access.",
    specifications: [
      "2120 card / PIN user capacity",
      "IP66 weatherproof, anti-vandal housing",
      "EM/ID or Mifare/IC reader built in",
      "Card / Card+PIN / PIN entry modes",
      "Wiegand 26-58 bit in/out"
    ],
    useCases: ["Office doors", "Server rooms", "Banking back-offices"]
  },
  {
    slug: "access-keypad-slim-wireless",
    name: "Slim Wireless Keypad + Receiver Kit",
    category: "Access Control",
    image: accessKeypadSlimWireless,
    shortDescription: "Compact backlit keypad bundled with a wireless receiver — ideal for retrofit on existing doors.",
    specifications: [
      "Backlit numeric keypad with bell key",
      "Wireless 433MHz receiver module included",
      "Standalone or Wiegand operation",
      "Surface-mount stainless faceplate"
    ],
    useCases: ["Retrofit installs", "Apartments", "Small offices"]
  },
  {
    slug: "access-fingerprint-touch-keypad",
    name: "Touch Keypad + Fingerprint Reader",
    category: "Access Control",
    image: accessFingerprintTouch,
    shortDescription: "Touch-surface keypad with integrated fingerprint sensor — multi-factor door access in one unit.",
    specifications: [
      "Capacitive touch keypad + fingerprint reader",
      "300 fingerprints / 10000 cards/PINs",
      "Entry: Fingerprint / Card / PIN",
      "12-24V DC, IP-rated housing",
      "Wiegand 26 in/out for integration"
    ],
    useCases: ["Executive offices", "Data rooms", "Restricted areas"]
  },
  {
    slug: "access-keypad-weatherproof-rfid",
    name: "Weatherproof RFID Keypad Controller",
    category: "Access Control",
    image: accessKeypadWeatherproof,
    shortDescription: "Outdoor-rated slim keypad with integrated RFID reader and bell key for perimeter doors.",
    specifications: [
      "IP66 weatherproof housing",
      "EM/Mifare RFID reader built in",
      "Standalone or networked Wiegand mode",
      "Backlit keypad for low-light use"
    ],
    useCases: ["Perimeter gates", "Outdoor entries", "Industrial doorways"]
  },
  {
    slug: "access-keypad-compact-metal",
    name: "Compact Metal Keypad Access Controller",
    category: "Access Control",
    image: accessKeypadCompactMetal,
    shortDescription: "Narrow-form factor metal keypad designed for door frames and tight installations.",
    specifications: [
      "Slim narrow-frame design",
      "PIN + RFID card entry",
      "Anti-vandal metal housing",
      "12V DC operation",
      "Wiegand output for controller integration"
    ],
    useCases: ["Door-frame installs", "Estate gates", "Lift lobbies"]
  },
  // ─── Power & Energy Solutions ────────────────────────────────────────
  {
    slug: "power-station-ecoflow-1kva",
    name: "EcoFlow 1kVA Portable Power Station",
    category: "Power & Energy",
    image: powerStationEcoflow1kva,
    shortDescription: "1kVA EcoFlow portable power station with UK socket, USB-A and USB-C — silent backup for offices and homes.",
    specifications: [
      "1kVA / 1000W AC output",
      "UK BS-1363 socket + USB-A + USB-C",
      "Three output modes: Low / Normal / High",
      "Single-button AC ON/OFF",
      "Pure sine wave output suitable for sensitive electronics"
    ],
    useCases: ["Office UPS backup", "Home power outages", "Field sites"]
  },
  {
    slug: "power-station-300w-portable",
    name: "300W Portable Power Station (Universal Socket)",
    category: "Power & Energy",
    image: powerStation300wPortable,
    shortDescription: "Rugged 300W power station with universal AC socket, 12V DC output, USB-C PD and triple USB outputs.",
    specifications: [
      "300W AC output via universal socket",
      "DC 12V cigarette-style output",
      "USB-C PD input/output + 3× USB-A outputs",
      "LCD status display with DC input port",
      "Carry-handle design for field deployment"
    ],
    useCases: ["Site offices", "Outdoor events", "Camping & travel"]
  },
  {
    slug: "power-station-ecoflow-river-300w",
    name: "EcoFlow River 300W Power Station",
    category: "Power & Energy",
    image: powerStationEcoflowRiver,
    shortDescription: "Compact EcoFlow River 300W station with UK socket, dual USB-A, USB-C and 12V DC — fast-charge ready.",
    specifications: [
      "300W AC output with UK socket",
      "Dual USB-A + USB-C output",
      "12V DC output port",
      "Independent AC and DC on/off controls",
      "Fast recharge with EcoFlow X-Stream technology"
    ],
    useCases: ["Workstations", "Routers / CCTV backup", "Mobile professionals"]
  }
];
const services = [
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    summary: "High-voltage and low-voltage system design, power distribution, and load-balanced installations for commercial and industrial facilities.",
    icon: Zap
  },
  {
    slug: "structural-construction",
    title: "Structural Construction",
    summary: "End-to-end structural builds, civil works, and facility expansion engineered for compliance, durability, and lifecycle value.",
    icon: Building2
  },
  {
    slug: "banking-automation",
    title: "Banking Automation",
    summary: "ATM lobby buildouts, queue-management systems, branch electrification, and integrated banking infrastructure for financial institutions.",
    icon: Landmark
  },
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    summary: "Structured cabling, enterprise LAN/WAN, fiber backbones, and resilient connectivity for multi-site operations.",
    icon: Network
  },
  {
    slug: "cctv-surveillance",
    title: "CCTV & Surveillance Systems",
    summary: "IP-based video surveillance, NVR architecture, perimeter monitoring, and centralized control-room integration.",
    icon: Cctv
  },
  {
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    summary: "Code-compliant fire detection, addressable alarm networks, suppression integration, and life-safety commissioning.",
    icon: Siren
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    summary: "Planned preventive maintenance, condition-based monitoring, and 24/7 reactive support to keep critical assets online.",
    icon: Wrench
  },
  {
    slug: "equipment-repairs",
    title: "Equipment Repairs",
    summary: "Diagnostic services, component-level repairs, and OEM-grade replacements for electromechanical and electronic equipment.",
    icon: Cog
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    summary: "Pre-construction architectural planning, MEP coordination, and design documentation aligned to engineering execution.",
    icon: PencilRuler
  },
  {
    slug: "enterprise-security-infrastructure",
    title: "Enterprise Security Infrastructure",
    summary: "Layered physical and electronic security — access control, intrusion detection, and integrated security operations.",
    icon: ShieldCheck
  }
];
const industries = [
  {
    title: "Banking",
    description: "Branch infrastructure, ATM environments, and secure operational continuity for financial institutions.",
    icon: Landmark
  },
  {
    title: "Commercial Real Estate",
    description: "Building services engineering and facility infrastructure for offices, retail, and mixed-use developments.",
    icon: Building
  },
  {
    title: "Industrial Operations",
    description: "Process facility electrification, plant maintenance, and asset reliability programs.",
    icon: Factory
  },
  {
    title: "Government Infrastructure",
    description: "Public-sector engineering delivery aligned to compliance, accountability, and lifecycle standards.",
    icon: Briefcase
  },
  {
    title: "Residential Developments",
    description: "Power, security, and connectivity systems for estates and high-density residential schemes.",
    icon: House
  },
  {
    title: "Corporate Facilities",
    description: "Headquarters fit-outs, data and network rooms, and integrated workplace technology.",
    icon: Server
  }
];
const whyUs = [
  {
    title: "Certified Professionals",
    description: "Multi-disciplinary engineers and technicians with vendor and regulatory accreditation.",
    icon: ShieldCheck
  },
  {
    title: "Scalable Deployment",
    description: "Standardized delivery playbooks that scale from a single branch to nationwide rollouts.",
    icon: Network
  },
  {
    title: "Engineering Precision",
    description: "Design-led execution with documented tolerances, test protocols, and acceptance criteria.",
    icon: CircleGauge
  },
  {
    title: "Rapid Execution",
    description: "Pre-mobilized teams and supply chains that compress time-to-commissioning on critical projects.",
    icon: Truck
  },
  {
    title: "Maintenance Support",
    description: "SLA-backed preventive and reactive maintenance with clear escalation pathways.",
    icon: Wrench
  },
  {
    title: "Operational Reliability",
    description: "Redundancy-first system design built for uptime, continuity, and graceful degradation.",
    icon: Activity
  },
  {
    title: "Quality Assurance",
    description: "Independent QA workflows, factory-acceptance testing, and structured commissioning sign-off.",
    icon: ShieldCheck
  }
];
const projects = [
  {
    slug: "banking-infrastructure-deployment",
    title: "Banking Infrastructure Deployment",
    category: "Financial Services",
    location: "Port Harcourt",
    year: "2024",
    image: img12.url,
    summary: "Branch electrification, ATM lobby commissioning, and centralized monitoring across multi-site banking deployments."
  },
  {
    slug: "enterprise-cctv-systems",
    title: "Enterprise CCTV Systems",
    category: "Security Infrastructure",
    location: "Rivers State",
    year: "2024",
    image: img10.url,
    summary: "IP-based surveillance with NVR architecture and 24/7 control-room integration for a multi-facility operator."
  },
  {
    slug: "commercial-electrical-installations",
    title: "Commercial Electrical Installations",
    category: "Electrical Engineering",
    location: "Lagos",
    year: "2023",
    image: img2.url,
    summary: "Switchgear, distribution, and load-balanced installations for a Grade-A commercial development."
  },
  {
    slug: "smart-security-infrastructure",
    title: "Smart Security Infrastructure",
    category: "Integrated Security",
    location: "Abuja",
    year: "2023",
    image: img21.url,
    summary: "Layered access control, intrusion detection, and perimeter surveillance unified through a single SOC."
  },
  {
    slug: "industrial-network-deployment",
    title: "Industrial Network Deployment",
    category: "Network Infrastructure",
    location: "Port Harcourt",
    year: "2024",
    image: img3.url,
    summary: "Fiber backbone, structured cabling, and resilient core switching for a heavy-industry operations facility."
  }
];
const process$1 = [
  {
    step: "01",
    title: "Consultation",
    description: "Stakeholder engagement to define objectives, constraints, and operational outcomes."
  },
  {
    step: "02",
    title: "Technical Assessment",
    description: "Site survey, load analysis, and risk profiling to baseline existing infrastructure."
  },
  {
    step: "03",
    title: "System Design",
    description: "Engineered drawings, BOQ, and specifications aligned to applicable standards."
  },
  {
    step: "04",
    title: "Infrastructure Deployment",
    description: "Mobilized execution with milestone-based delivery and supervised installation."
  },
  {
    step: "05",
    title: "Quality Assurance",
    description: "Factory and site acceptance testing with documented commissioning sign-off."
  },
  {
    step: "06",
    title: "Ongoing Maintenance",
    description: "SLA-backed preventive maintenance and 24/7 operational support post-handover."
  }
];
const testimonials = [
  {
    quote: "DopCellar Merit's delivery of our branch electrification and ATM infrastructure was disciplined and meticulously documented. They held to scope and timeline.",
    name: "Adaeze Okonkwo",
    role: "Head of Branch Operations",
    company: "Tier-1 Commercial Bank"
  },
  {
    quote: "Their team integrated surveillance, access control, and fire detection into a single operating picture for our facility. Reliability has been excellent.",
    name: "Engr. Babatunde Adeyemi",
    role: "Facility Manager",
    company: "Corporate Office Complex, Lagos"
  },
  {
    quote: "We engaged DopCellar Merit for the structural and MEP build-out of a mixed-use development. Engineering rigor and execution were genuinely world class.",
    name: "Ifeoma Eze",
    role: "Managing Director",
    company: "Regional Property Developer"
  },
  {
    quote: "Their preventive maintenance program has materially reduced unplanned downtime across our process equipment. A serious industrial partner.",
    name: "Mohammed Yusuf",
    role: "Plant Operations Lead",
    company: "Industrial Manufacturer"
  }
];
const commitments = [
  {
    value: "48h",
    label: "Assessment turnaround",
    note: "First contact to scheduled engineer visit."
  },
  {
    value: "7",
    label: "Disciplines, one contract",
    note: "Power, CCTV, fire, access, electrical, automation, maintenance."
  },
  {
    value: "0",
    label: "Call-centre layers",
    note: "Escalation reaches the engineer on your account."
  },
  {
    value: "SLA",
    label: "Backed lifecycle support",
    note: "Preventive schedules and response tiers, in writing."
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-hairline bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground", children: site.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: site.socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: s.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "rounded-md border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground",
            children: s.label
          },
          s.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.href,
            className: "text-foreground/80 transition-colors hover:text-gold",
            children: n.label
          }
        ) }, n.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: services.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground/80", children: s.title }, s.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-foreground/80", children: [
          site.offices.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: o.role }),
              o.line1,
              o.line2 ? `, ${o.line2}` : "",
              ", ",
              o.city,
              ", ",
              o.state
            ] })
          ] }, o.city)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${site.contact.phoneE164}`, className: "hover:text-gold", children: site.contact.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.contact.email}`, className: "hover:text-gold", children: site.contact.email })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        site.legalName,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compliance" })
      ] })
    ] })
  ] }) });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      style: { scaleX },
      className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gold/80"
    }
  );
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: whatsappLink(),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat with us on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-black/10 transition-transform hover:scale-105",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5", strokeWidth: 2.2 })
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4 pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-gold", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold/90",
        children: "Return to home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-hairline px-4 py-2 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.line1,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    addressCountry: site.contact.address.country
  },
  sameAs: site.socials.map((s) => s.href)
};
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: site.name },
      { name: "theme-color", content: "#0B1F3A" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@CellarDop" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd)
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "light", style: { colorScheme: "light" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "bottom-left" })
  ] });
}
const $$splitComponentImporter$9 = () => import("./services-D4qQzEyX.mjs");
const Route$a = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Services — DopCellar Merit Global Limited"
    }, {
      name: "description",
      content: "Engineering disciplines delivered by DopCellar Merit: electrical, structural, banking automation, network, CCTV, fire alarms, industrial maintenance, and enterprise security infrastructure."
    }]
  })
});
const $$splitComponentImporter$8 = () => import("./projects-DjOcFeJ_.mjs");
const Route$9 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Projects — DopCellar Merit Global Limited"
    }, {
      name: "description",
      content: "Selected case studies across banking, security, electrical, and network infrastructure programs delivered by DopCellar Merit Global Limited."
    }]
  })
});
const $$splitComponentImporter$7 = () => import("./products-CoitK9Gg.mjs");
const Route$8 = createFileRoute("/products")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: `Products & Catalog — ${site.name}`
    }, {
      name: "description",
      content: "Procurement catalog of CCTV cameras, DVR/NVR kits, biometric access control and intrusion alarm systems supplied and installed by DopCellar Merit Global Limited."
    }, {
      property: "og:title",
      content: `Products & Catalog — ${site.name}`
    }, {
      property: "og:description",
      content: "CCTV, access control and intrusion alarm products supplied and installed nationwide. Request invoices and quotes directly."
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./platform-Bb-EGhNU.mjs");
const TITLE$1 = "The Integrated Infrastructure Platform — DopCellar Merit";
const DESC$1 = "Seven engineering disciplines — power, CCTV, fire, access, electrical, building automation and maintenance — delivered under one contract, one project manager and one accountability line.";
const Route$7 = createFileRoute("/platform")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: TITLE$1
    }, {
      name: "description",
      content: DESC$1
    }, {
      property: "og:title",
      content: TITLE$1
    }, {
      property: "og:description",
      content: DESC$1
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./knowledge-C3UZgjSi.mjs");
const TITLE = "Knowledge Centre — DopCellar Merit";
const DESC = "Engineering guides, compliance whitepapers and short insights from the DopCellar team — for operations leads, facilities managers and procurement.";
const Route$6 = createFileRoute("/knowledge")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESC
    }, {
      property: "og:title",
      content: TITLE
    }, {
      property: "og:description",
      content: DESC
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./industries-CKa8aI-D.mjs");
const Route$5 = createFileRoute("/industries")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Industries — DopCellar Merit Global Limited"
    }, {
      name: "description",
      content: "Sectors served by DopCellar Merit Global Limited: banking, government, industrial operations, commercial real estate, residential, and corporate facilities."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./gallery-DDhsgNs-.mjs");
const Route$4 = createFileRoute("/gallery")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Work Gallery — DopCellar Merit Global Limited"
    }, {
      name: "description",
      content: "Real fieldwork from DopCellar Merit engineering teams — CCTV, solar & power, electrical cabling, and on-site installations across Nigeria."
    }, {
      property: "og:title",
      content: "Work Gallery — DopCellar Merit"
    }, {
      property: "og:description",
      content: "Photos and videos from live DopCellar Merit installations across Nigeria."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./contact-D_QpVeBe.mjs");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Contact — DopCellar Merit Global Limited"
    }, {
      name: "description",
      content: "Speak with the DopCellar Merit engineering team. Head office in Port Harcourt, Rivers State, Nigeria."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./about-5yowrPRF.mjs");
const Route$2 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "About — DopCellar Merit Global Limited"
    }, {
      name: "description",
      content: "DopCellar Merit Global Limited is a Nigerian engineering, infrastructure, and industrial technology firm headquartered in Port Harcourt."
    }]
  })
});
const $$splitComponentImporter = () => import("./index-RAJ-vcLo.mjs");
const HOME_TITLE = "DopCellar Merit — Integrated Smart Infrastructure for Nigerian Enterprise";
const HOME_DESCRIPTION = "One engineered platform for power, security, fire, access, electrical, automation and maintenance — delivered under one accountability line for Nigeria's banks, hospitals, factories and government.";
const HOME_URL = "https://www.dopcellarmerit.com.ng";
const HOME_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/ViWGlO78KHfM5zIUR6wLybuQIw03/social-images/social-1779261959696-cellar_2.webp";
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: HOME_TITLE
    }, {
      name: "description",
      content: HOME_DESCRIPTION
    }, {
      name: "keywords",
      content: "integrated smart infrastructure Nigeria, mission critical security, business continuity power, CCTV installation Nigeria, solar hybrid Nigeria, fire alarm systems, access control Nigeria, building automation Nigeria, preventive maintenance, DopCellar Merit, engineering firm Ibadan Port Harcourt"
    }, {
      name: "geo.region",
      content: "NG"
    }, {
      name: "geo.placename",
      content: "Ibadan, Port Harcourt"
    }, {
      property: "og:title",
      content: HOME_TITLE
    }, {
      property: "og:description",
      content: HOME_DESCRIPTION
    }, {
      property: "og:url",
      content: HOME_URL
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: HOME_OG_IMAGE
    }, {
      name: "twitter:title",
      content: HOME_TITLE
    }, {
      name: "twitter:description",
      content: HOME_DESCRIPTION
    }, {
      name: "twitter:image",
      content: HOME_OG_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: HOME_URL
    }]
  })
});
const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: () => new Response(
        JSON.stringify({
          status: "ok",
          uptime: typeof process !== "undefined" ? process.uptime?.() ?? null : null,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json",
            "cache-control": "no-store"
          }
        }
      )
    }
  }
});
const ServicesRoute = Route$a.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$b
});
const ProjectsRoute = Route$9.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$b
});
const ProductsRoute = Route$8.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$b
});
const PlatformRoute = Route$7.update({
  id: "/platform",
  path: "/platform",
  getParentRoute: () => Route$b
});
const KnowledgeRoute = Route$6.update({
  id: "/knowledge",
  path: "/knowledge",
  getParentRoute: () => Route$b
});
const IndustriesRoute = Route$5.update({
  id: "/industries",
  path: "/industries",
  getParentRoute: () => Route$b
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const ApiHealthRoute = Route.update({
  id: "/api/health",
  path: "/api/health",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  IndustriesRoute,
  KnowledgeRoute,
  PlatformRoute,
  ProductsRoute,
  ProjectsRoute,
  ServicesRoute,
  ApiHealthRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  products as a,
  site as b,
  process$1 as c,
  whyUs as d,
  cn as e,
  commitments as f,
  img2 as g,
  img3 as h,
  industries as i,
  img10 as j,
  img12 as k,
  img21 as l,
  projects as p,
  router as r,
  services as s,
  testimonials as t,
  whatsappLink as w
};
