import {
  Zap,
  Building2,
  Landmark,
  Network,
  Cctv,
  Siren,
  Wrench,
  Cog,
  PencilRuler,
  ShieldCheck,
  Briefcase,
  Factory,
  Home,
  Building,
  Server,
  Truck,
  Activity,
  GaugeCircle,
  type LucideIcon,
} from "lucide-react";

import hero from "../assets/hero.jpg";
import network from "../assets/network.jpg";
import banking from "../assets/banking.jpg";
import cctv from "../assets/cctv.jpg";
import construction from "../assets/construction.jpg";
import industrial from "../assets/industrial.jpg";

import bulletCamera from "../assets/products/bullet-camera.jpg";
import cameraRange from "../assets/products/camera-range.jpg";
import cctvSystem from "../assets/products/cctv-system.jpg";
import cctvKit from "../assets/products/cctv-kit.jpg";
import exitAlarm from "../assets/products/exit-alarm.jpg";
import fingerprintAccess from "../assets/products/fingerprint-access.jpg";
import hikvisionBullet from "../assets/products/hikvision-bullet.jpg";
import alarmSystem from "../assets/products/alarm-system.jpg";
import speedDome from "../assets/products/speed-dome.jpg";

// Branded catalog images (DopCellar Merit strip applied)
import alarmKitH5 from "../assets/products/alarm-kit-h5-wifi-gsm.jpg";
import alarmKitH6 from "../assets/products/alarm-kit-h6-wifi-4g.jpg";
import alarmKitSa6pb from "../assets/products/alarm-kit-sa6pb-touchscreen.jpg";
import alarmKitSa5p from "../assets/products/alarm-kit-sa5p-wifi-4g.jpg";
import alarmKitSx1 from "../assets/products/alarm-kit-sx1-smart-home.jpg";
import accessKeypadMetalRfid from "../assets/products/access-keypad-metal-rfid.jpg";
import accessKeypadSlimWireless from "../assets/products/access-keypad-slim-wireless.jpg";
import accessFingerprintTouch from "../assets/products/access-fingerprint-touch-keypad.jpg";
import accessKeypadWeatherproof from "../assets/products/access-keypad-weatherproof-rfid.jpg";
import accessKeypadCompactMetal from "../assets/products/access-keypad-compact-metal.jpg";
import powerStationEcoflow1kva from "../assets/products/power-station-ecoflow-1kva.jpg";
import powerStation300wPortable from "../assets/products/power-station-300w-portable.jpg";
import powerStationEcoflowRiver from "../assets/products/power-station-ecoflow-river-300w.jpg";

export const heroImage = hero;

export interface Product {
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  specifications: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    slug: "bullet-security-camera",
    name: "Bullet Style Security Camera",
    category: "CCTV & Surveillance",
    image: bulletCamera,
    shortDescription:
      "Weatherproof IR bullet camera engineered for perimeter surveillance and 24/7 outdoor monitoring.",
    specifications: [
      "HD resolution with IR night vision up to 30m",
      "IP66 weatherproof housing",
      "Wide-angle fixed lens",
      "BNC/IP output compatible with standard DVR/NVR",
    ],
    useCases: ["Perimeter monitoring", "Car parks", "Warehouse exteriors"],
  },
  {
    slug: "hikvision-outdoor-bullet",
    name: "Hikvision Outdoor Bullet Camera",
    category: "CCTV & Surveillance",
    image: hikvisionBullet,
    shortDescription:
      "Hikvision-grade outdoor bullet camera with professional optics and OEM-grade reliability.",
    specifications: [
      "Hikvision OEM imaging sensor",
      "Day/night auto switching",
      "Vandal-resistant aluminium housing",
      "PoE / 12V DC powered",
    ],
    useCases: ["Bank ATM lobbies", "Commercial buildings", "Government facilities"],
  },
  {
    slug: "speed-dome-ptz-camera",
    name: "Z-BEN Speed Dome PTZ Camera",
    category: "CCTV & Surveillance",
    image: speedDome,
    shortDescription:
      "High-speed pan-tilt-zoom dome camera for active surveillance over wide coverage areas.",
    specifications: [
      "360° pan / 90° tilt",
      "Optical zoom with auto-focus",
      "IR illumination for low-light operation",
      "Preset patrol & auto-tracking",
    ],
    useCases: ["Industrial yards", "Estate gatehouses", "Control-room monitoring"],
  },
  {
    slug: "cctv-system-kit",
    name: "Multi-Channel CCTV System",
    category: "Surveillance Kits",
    image: cctvSystem,
    shortDescription:
      "Turnkey multi-camera CCTV bundle with DVR, monitors and centralized control-room view.",
    specifications: [
      "4 / 8 / 16-channel DVR options",
      "Mixed dome + bullet camera kit",
      "Multi-screen live monitoring",
      "Remote mobile viewing",
    ],
    useCases: ["Retail outlets", "Branch offices", "Hospitality"],
  },
  {
    slug: "cctv-starter-kit",
    name: "CCTV Starter Kit (DVR + Cameras + Monitor)",
    category: "Surveillance Kits",
    image: cctvKit,
    shortDescription:
      "Complete plug-and-play CCTV kit including DVR, dome and bullet cameras, and dedicated monitor.",
    specifications: [
      "DVR with HDD bay",
      "Mixed indoor/outdoor cameras",
      "Dedicated CCTV monitor included",
      "Cabling and connectors bundled",
    ],
    useCases: ["Small businesses", "Residences", "Site offices"],
  },
  {
    slug: "ip-camera-range",
    name: "IP Camera & Detector Range",
    category: "Surveillance Components",
    image: cameraRange,
    shortDescription:
      "Catalog of IP cameras, smoke detectors, dome cameras and NVR units for custom system design.",
    specifications: [
      "Dome, bullet, PTZ and pinhole form factors",
      "Smoke & motion detectors",
      "Standalone NVR/DVR units",
      "Vendor-mixed for scope flexibility",
    ],
    useCases: ["Custom-engineered systems", "Multi-site rollouts"],
  },
  {
    slug: "fingerprint-door-access",
    name: "Fingerprint Door Access Controller",
    category: "Access Control",
    image: fingerprintAccess,
    shortDescription:
      "Biometric door access controller combining fingerprint, PIN and card credentials.",
    specifications: [
      "Fingerprint + PIN + RFID card",
      "On-device user enrolment",
      "Audit log of entries/exits",
      "Integrates with electric strike / maglock",
    ],
    useCases: ["Server rooms", "Executive offices", "Restricted-area entry"],
  },
  {
    slug: "exit-alarm-button",
    name: "Door Exit Alarm Push Button",
    category: "Access Control",
    image: exitAlarm,
    shortDescription:
      "Stainless steel illuminated exit-release button for controlled-door egress systems.",
    specifications: [
      "Stainless steel faceplate",
      "Illuminated LED ring",
      "NO/NC dry-contact output",
      "Flush-mount installation",
    ],
    useCases: ["Access-controlled doors", "Banking halls", "Secure rooms"],
  },
  {
    slug: "wireless-alarm-system",
    name: "Wireless Intrusion Alarm System",
    category: "Intrusion & Alarms",
    image: alarmSystem,
    shortDescription:
      "Complete wireless alarm system with PIR motion sensors, panic remote and central control panel.",
    specifications: [
      "Central control panel with keypad & LCD",
      "Wireless PIR motion sensor",
      "Panic / remote arming key fob",
      "Door/window contact sensors included",
    ],
    useCases: ["Residential security", "Small offices", "Retail shops"],
  },

  // ─── Intrusion & Alarms — branded catalog ─────────────────────────────
  {
    slug: "alarm-kit-h5-wifi-gsm",
    name: "H5 WiFi + GSM Smart Alarm Kit",
    category: "Intrusion & Alarms",
    image: alarmKitH5,
    shortDescription:
      "4.3-inch touchscreen WiFi + GSM alarm panel with PIR detector, door sensor, siren and remote controllers.",
    specifications: [
      "4.3\" TFT colour touch screen",
      "WiFi + 2G GSM (4G variant available)",
      "iOS & Android app, SMS push alerts",
      "Door-bell / Ready-To-Arm modes",
      "8 languages, low-battery & sensor-lost monitoring",
    ],
    useCases: ["Residential security", "Small offices", "Retail outlets"],
  },
  {
    slug: "alarm-kit-h6-wifi-4g",
    name: "H6 WiFi + 4G Alarm System",
    category: "Intrusion & Alarms",
    image: alarmKitH6,
    shortDescription:
      "4G cellular alarm panel with built-in siren — operates over mobile data, no WiFi required.",
    specifications: [
      "App control via 4G GPRS — no WiFi needed",
      "Up to 46 wireless detectors + 8 remotes",
      "6 phone-call + 3 SMS alert numbers",
      "Built-in siren and 30-hour backup battery",
      "OTA firmware upgrade",
    ],
    useCases: ["Remote sites", "Estate gatehouses", "Off-grid facilities"],
  },
  {
    slug: "alarm-kit-sa6pb-touchscreen",
    name: "SA6PB Touchscreen Alarm Kit (Black)",
    category: "Intrusion & Alarms",
    image: alarmKitSa6pb,
    shortDescription:
      "WiFi + 2G alarm with 4.3-inch touch panel, voice message recording, and RFID tag support.",
    specifications: [
      "4.3\" TFT colour touch screen",
      "WiFi + 2G GSM (WiFi + 4G variant available)",
      "Up to 100 remotes / detectors / RFID tags",
      "20-second voice message",
      "Last 100 events logged on-device",
    ],
    useCases: ["Residential", "Branch offices", "Boutique retail"],
  },
  {
    slug: "alarm-kit-sa5p-wifi-4g",
    name: "SA5P WiFi + 4G Alarm System",
    category: "Intrusion & Alarms",
    image: alarmKitSa5p,
    shortDescription:
      "Full alarm bundle with WiFi + 4G connectivity, PIR detector, door sensor, siren, remotes and key fobs.",
    specifications: [
      "WiFi + 4G connectivity",
      "Touch panel with 6-language support",
      "Renamable defence zones",
      "GPRS TCP/UDP protocol support",
      "Includes 2 remotes + 2 fobs",
    ],
    useCases: ["SMB premises", "Warehouses", "Multi-tenant residential"],
  },
  {
    slug: "alarm-kit-sx1-smart-home",
    name: "SX1 WiFi + 4G Smart-Home Alarm",
    category: "Intrusion & Alarms",
    image: alarmKitSx1,
    shortDescription:
      "Contact-ID monitoring-station compatible alarm with Alexa, Google Home and IFTTT integration.",
    specifications: [
      "Contact ID protocol for central monitoring stations",
      "Expandable to 50 sensors + 10 remotes",
      "Two wired zones for smoke / gas / vibration / IR beams",
      "Alarm output to trigger lights, TV etc. as deterrent",
      "110dB internal siren with mute mode",
      "Works with Alexa, Google Home, IFTTT",
    ],
    useCases: ["Smart homes", "Premium residential", "Monitored facilities"],
  },

  // ─── Access Control — branded catalog ────────────────────────────────
  {
    slug: "access-keypad-metal-rfid",
    name: "Metal RFID Keypad Access Controller",
    category: "Access Control",
    image: accessKeypadMetalRfid,
    shortDescription:
      "Anti-vandal zinc-alloy keypad with EM/Mifare RFID reader for standalone door access.",
    specifications: [
      "2120 card / PIN user capacity",
      "IP66 weatherproof, anti-vandal housing",
      "EM/ID or Mifare/IC reader built in",
      "Card / Card+PIN / PIN entry modes",
      "Wiegand 26-58 bit in/out",
    ],
    useCases: ["Office doors", "Server rooms", "Banking back-offices"],
  },
  {
    slug: "access-keypad-slim-wireless",
    name: "Slim Wireless Keypad + Receiver Kit",
    category: "Access Control",
    image: accessKeypadSlimWireless,
    shortDescription:
      "Compact backlit keypad bundled with a wireless receiver — ideal for retrofit on existing doors.",
    specifications: [
      "Backlit numeric keypad with bell key",
      "Wireless 433MHz receiver module included",
      "Standalone or Wiegand operation",
      "Surface-mount stainless faceplate",
    ],
    useCases: ["Retrofit installs", "Apartments", "Small offices"],
  },
  {
    slug: "access-fingerprint-touch-keypad",
    name: "Touch Keypad + Fingerprint Reader",
    category: "Access Control",
    image: accessFingerprintTouch,
    shortDescription:
      "Touch-surface keypad with integrated fingerprint sensor — multi-factor door access in one unit.",
    specifications: [
      "Capacitive touch keypad + fingerprint reader",
      "300 fingerprints / 10000 cards/PINs",
      "Entry: Fingerprint / Card / PIN",
      "12-24V DC, IP-rated housing",
      "Wiegand 26 in/out for integration",
    ],
    useCases: ["Executive offices", "Data rooms", "Restricted areas"],
  },
  {
    slug: "access-keypad-weatherproof-rfid",
    name: "Weatherproof RFID Keypad Controller",
    category: "Access Control",
    image: accessKeypadWeatherproof,
    shortDescription:
      "Outdoor-rated slim keypad with integrated RFID reader and bell key for perimeter doors.",
    specifications: [
      "IP66 weatherproof housing",
      "EM/Mifare RFID reader built in",
      "Standalone or networked Wiegand mode",
      "Backlit keypad for low-light use",
    ],
    useCases: ["Perimeter gates", "Outdoor entries", "Industrial doorways"],
  },
  {
    slug: "access-keypad-compact-metal",
    name: "Compact Metal Keypad Access Controller",
    category: "Access Control",
    image: accessKeypadCompactMetal,
    shortDescription:
      "Narrow-form factor metal keypad designed for door frames and tight installations.",
    specifications: [
      "Slim narrow-frame design",
      "PIN + RFID card entry",
      "Anti-vandal metal housing",
      "12V DC operation",
      "Wiegand output for controller integration",
    ],
    useCases: ["Door-frame installs", "Estate gates", "Lift lobbies"],
  },

  // ─── Power & Energy Solutions ────────────────────────────────────────
  {
    slug: "power-station-ecoflow-1kva",
    name: "EcoFlow 1kVA Portable Power Station",
    category: "Power & Energy",
    image: powerStationEcoflow1kva,
    shortDescription:
      "1kVA EcoFlow portable power station with UK socket, USB-A and USB-C — silent backup for offices and homes.",
    specifications: [
      "1kVA / 1000W AC output",
      "UK BS-1363 socket + USB-A + USB-C",
      "Three output modes: Low / Normal / High",
      "Single-button AC ON/OFF",
      "Pure sine wave output suitable for sensitive electronics",
    ],
    useCases: ["Office UPS backup", "Home power outages", "Field sites"],
  },
  {
    slug: "power-station-300w-portable",
    name: "300W Portable Power Station (Universal Socket)",
    category: "Power & Energy",
    image: powerStation300wPortable,
    shortDescription:
      "Rugged 300W power station with universal AC socket, 12V DC output, USB-C PD and triple USB outputs.",
    specifications: [
      "300W AC output via universal socket",
      "DC 12V cigarette-style output",
      "USB-C PD input/output + 3× USB-A outputs",
      "LCD status display with DC input port",
      "Carry-handle design for field deployment",
    ],
    useCases: ["Site offices", "Outdoor events", "Camping & travel"],
  },
  {
    slug: "power-station-ecoflow-river-300w",
    name: "EcoFlow River 300W Power Station",
    category: "Power & Energy",
    image: powerStationEcoflowRiver,
    shortDescription:
      "Compact EcoFlow River 300W station with UK socket, dual USB-A, USB-C and 12V DC — fast-charge ready.",
    specifications: [
      "300W AC output with UK socket",
      "Dual USB-A + USB-C output",
      "12V DC output port",
      "Independent AC and DC on/off controls",
      "Fast recharge with EcoFlow X-Stream technology",
    ],
    useCases: ["Workstations", "Routers / CCTV backup", "Mobile professionals"],
  },
];



export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    summary:
      "High-voltage and low-voltage system design, power distribution, and load-balanced installations for commercial and industrial facilities.",
    icon: Zap,
  },
  {
    slug: "structural-construction",
    title: "Structural Construction",
    summary:
      "End-to-end structural builds, civil works, and facility expansion engineered for compliance, durability, and lifecycle value.",
    icon: Building2,
  },
  {
    slug: "banking-automation",
    title: "Banking Automation",
    summary:
      "ATM lobby buildouts, queue-management systems, branch electrification, and integrated banking infrastructure for financial institutions.",
    icon: Landmark,
  },
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    summary:
      "Structured cabling, enterprise LAN/WAN, fiber backbones, and resilient connectivity for multi-site operations.",
    icon: Network,
  },
  {
    slug: "cctv-surveillance",
    title: "CCTV & Surveillance Systems",
    summary:
      "IP-based video surveillance, NVR architecture, perimeter monitoring, and centralized control-room integration.",
    icon: Cctv,
  },
  {
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    summary:
      "Code-compliant fire detection, addressable alarm networks, suppression integration, and life-safety commissioning.",
    icon: Siren,
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    summary:
      "Planned preventive maintenance, condition-based monitoring, and 24/7 reactive support to keep critical assets online.",
    icon: Wrench,
  },
  {
    slug: "equipment-repairs",
    title: "Equipment Repairs",
    summary:
      "Diagnostic services, component-level repairs, and OEM-grade replacements for electromechanical and electronic equipment.",
    icon: Cog,
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    summary:
      "Pre-construction architectural planning, MEP coordination, and design documentation aligned to engineering execution.",
    icon: PencilRuler,
  },
  {
    slug: "enterprise-security-infrastructure",
    title: "Enterprise Security Infrastructure",
    summary:
      "Layered physical and electronic security — access control, intrusion detection, and integrated security operations.",
    icon: ShieldCheck,
  },
];

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    title: "Banking",
    description: "Branch infrastructure, ATM environments, and secure operational continuity for financial institutions.",
    icon: Landmark,
  },
  {
    title: "Commercial Real Estate",
    description: "Building services engineering and facility infrastructure for offices, retail, and mixed-use developments.",
    icon: Building,
  },
  {
    title: "Industrial Operations",
    description: "Process facility electrification, plant maintenance, and asset reliability programs.",
    icon: Factory,
  },
  {
    title: "Government Infrastructure",
    description: "Public-sector engineering delivery aligned to compliance, accountability, and lifecycle standards.",
    icon: Briefcase,
  },
  {
    title: "Residential Developments",
    description: "Power, security, and connectivity systems for estates and high-density residential schemes.",
    icon: Home,
  },
  {
    title: "Corporate Facilities",
    description: "Headquarters fit-outs, data and network rooms, and integrated workplace technology.",
    icon: Server,
  },
];

export interface WhyUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyUs: WhyUsItem[] = [
  {
    title: "Certified Professionals",
    description: "Multi-disciplinary engineers and technicians with vendor and regulatory accreditation.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Deployment",
    description: "Standardized delivery playbooks that scale from a single branch to nationwide rollouts.",
    icon: Network,
  },
  {
    title: "Engineering Precision",
    description: "Design-led execution with documented tolerances, test protocols, and acceptance criteria.",
    icon: GaugeCircle,
  },
  {
    title: "Rapid Execution",
    description: "Pre-mobilized teams and supply chains that compress time-to-commissioning on critical projects.",
    icon: Truck,
  },
  {
    title: "Maintenance Support",
    description: "SLA-backed preventive and reactive maintenance with clear escalation pathways.",
    icon: Wrench,
  },
  {
    title: "Operational Reliability",
    description: "Redundancy-first system design built for uptime, continuity, and graceful degradation.",
    icon: Activity,
  },
  {
    title: "Quality Assurance",
    description: "Independent QA workflows, factory-acceptance testing, and structured commissioning sign-off.",
    icon: ShieldCheck,
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  summary: string;
}

export const projects: Project[] = [
  {
    slug: "banking-infrastructure-deployment",
    title: "Banking Infrastructure Deployment",
    category: "Financial Services",
    location: "Port Harcourt",
    year: "2024",
    image: banking,
    summary:
      "Branch electrification, ATM lobby commissioning, and centralized monitoring across multi-site banking deployments.",
  },
  {
    slug: "enterprise-cctv-systems",
    title: "Enterprise CCTV Systems",
    category: "Security Infrastructure",
    location: "Rivers State",
    year: "2024",
    image: cctv,
    summary:
      "IP-based surveillance with NVR architecture and 24/7 control-room integration for a multi-facility operator.",
  },
  {
    slug: "commercial-electrical-installations",
    title: "Commercial Electrical Installations",
    category: "Electrical Engineering",
    location: "Lagos",
    year: "2023",
    image: industrial,
    summary:
      "Switchgear, distribution, and load-balanced installations for a Grade-A commercial development.",
  },
  {
    slug: "smart-security-infrastructure",
    title: "Smart Security Infrastructure",
    category: "Integrated Security",
    location: "Abuja",
    year: "2023",
    image: construction,
    summary:
      "Layered access control, intrusion detection, and perimeter surveillance unified through a single SOC.",
  },
  {
    slug: "industrial-network-deployment",
    title: "Industrial Network Deployment",
    category: "Network Infrastructure",
    location: "Port Harcourt",
    year: "2024",
    image: network,
    summary:
      "Fiber backbone, structured cabling, and resilient core switching for a heavy-industry operations facility.",
  },
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Stakeholder engagement to define objectives, constraints, and operational outcomes.",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description: "Site survey, load analysis, and risk profiling to baseline existing infrastructure.",
  },
  {
    step: "03",
    title: "System Design",
    description: "Engineered drawings, BOQ, and specifications aligned to applicable standards.",
  },
  {
    step: "04",
    title: "Infrastructure Deployment",
    description: "Mobilized execution with milestone-based delivery and supervised installation.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    description: "Factory and site acceptance testing with documented commissioning sign-off.",
  },
  {
    step: "06",
    title: "Ongoing Maintenance",
    description: "SLA-backed preventive maintenance and 24/7 operational support post-handover.",
  },
];

export const testimonials = [
  {
    quote:
      "DopCellar Merit's delivery of our branch electrification and ATM infrastructure was disciplined and meticulously documented. They held to scope and timeline.",
    name: "Adaeze Okonkwo",
    role: "Head of Branch Operations",
    company: "Tier-1 Commercial Bank",
  },
  {
    quote:
      "Their team integrated surveillance, access control, and fire detection into a single operating picture for our facility. Reliability has been excellent.",
    name: "Engr. Babatunde Adeyemi",
    role: "Facility Manager",
    company: "Corporate Office Complex, Lagos",
  },
  {
    quote:
      "We engaged DopCellar Merit for the structural and MEP build-out of a mixed-use development. Engineering rigor and execution were genuinely world class.",
    name: "Ifeoma Eze",
    role: "Managing Director",
    company: "Regional Property Developer",
  },
  {
    quote:
      "Their preventive maintenance program has materially reduced unplanned downtime across our process equipment. A serious industrial partner.",
    name: "Mohammed Yusuf",
    role: "Plant Operations Lead",
    company: "Industrial Manufacturer",
  },
];

export const kpis = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Technical Experts" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Operational Support" },
];
