import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProblemsSolved } from "@/components/sections/ProblemsSolved";
import { WhyDopCellar } from "@/components/sections/WhyDopCellar";
import { SectorSolutions } from "@/components/sections/SectorSolutions";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { DualCTA } from "@/components/sections/DualCTA";
import { Contact } from "@/components/sections/Contact";

const HOME_TITLE =
  "DopCellar Merit — Integrated Smart Infrastructure for Nigerian Enterprise";
const HOME_DESCRIPTION =
  "Mission-critical security, power, fire safety and network infrastructure — engineered as one integrated platform for Nigeria's banks, industry, healthcare and government. Offices in Ibadan & Port Harcourt.";
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
          "integrated smart infrastructure Nigeria, mission critical security, business continuity power, CCTV installation Nigeria, solar hybrid Nigeria, fire alarm systems, access control Nigeria, DopCellar Merit, engineering firm Ibadan Port Harcourt",
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
      <ProblemsSolved />
      <WhyDopCellar />
      <SectorSolutions />
      <HowWeWork />
      <FeaturedWork />
      <DualCTA />
      <Contact />
    </>
  );
}
