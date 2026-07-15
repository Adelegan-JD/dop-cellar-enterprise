import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SectorSolutions } from "@/components/sections/SectorSolutions";
import { SignaturePackages } from "@/components/sections/SignaturePackages";
import { HomeSections } from "@/components/sections/HomeSections";
import { WhyUs } from "@/components/sections/WhyUs";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Outcomes } from "@/components/sections/Outcomes";
import { Testimonials } from "@/components/sections/Testimonials";
import { DualCTA } from "@/components/sections/DualCTA";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

const HOME_TITLE =
  "DopCellar Merit — Engineering Infrastructure for Nigeria's Banks, Industry & Government";
const HOME_DESCRIPTION =
  "Enterprise-grade CCTV, solar & power, electrical, and network infrastructure across Nigeria. Trusted by banks, industrial operators, retail chains and government agencies. Offices in Ibadan & Port Harcourt.";
const HOME_URL = "https://dop-cellar-merit.lovable.app";
const HOME_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/ViWGlO78KHfM5zIUR6wLybuQIw03/social-images/social-1779261959696-cellar_2.webp";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      {
        name: "keywords",
        content:
          "CCTV installation Nigeria, solar installation Nigeria, electrical engineering Nigeria, banking infrastructure, access control Ibadan, security systems Port Harcourt, industrial power Nigeria, DopCellar Merit",
      },
      { name: "geo.region", content: "NG" },
      { name: "geo.placename", content: "Ibadan, Port Harcourt" },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:url", content: HOME_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HOME_OG_IMAGE },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: HOME_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: HOME_URL }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SectorSolutions />
      <SignaturePackages />
      <HomeSections />
      <WhyUs />
      <FeaturedWork />
      <Outcomes />
      <Testimonials />
      <DualCTA />
      <About />
      <Contact />
    </>
  );
}
