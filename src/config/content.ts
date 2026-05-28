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
