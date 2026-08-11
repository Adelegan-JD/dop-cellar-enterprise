import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProblemsSolved } from "@/components/sections/ProblemsSolved";
import { TrustModel } from "@/components/sections/TrustModel";

import { WhyDopCellar } from "@/components/sections/WhyDopCellar";
import { IntegratedPlatform } from "@/components/sections/IntegratedPlatform";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturedSolutions } from "@/components/sections/FeaturedSolutions";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { KnowledgeCentre } from "@/components/sections/KnowledgeCentre";
import { FAQs } from "@/components/sections/FAQs";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

const HOME_TITLE =
  "DopCellar Merit — Integrated Smart Infrastructure for Nigerian Enterprise";
const HOME_DESCRIPTION =
  "One engineered platform for power, security, fire, access, electrical, automation and maintenance — delivered under one accountability line for Nigeria's banks, hospitals, factories and government.";
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
          "integrated smart infrastructure Nigeria, mission critical security, business continuity power, CCTV installation Nigeria, solar hybrid Nigeria, fire alarm systems, access control Nigeria, building automation Nigeria, preventive maintenance, DopCellar Merit, engineering firm Ibadan Port Harcourt",
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
      <TrustModel />
      <IntegratedPlatform />

      <IndustriesGrid />
      <FeaturedSolutions />
      <HowWeWork />
      <KnowledgeCentre />
      <FAQs />
      <ConsultationCTA />
    </>
  );
}
