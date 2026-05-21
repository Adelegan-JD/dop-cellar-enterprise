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

export const heroImage = hero;

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
