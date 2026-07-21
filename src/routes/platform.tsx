import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { IntegratedPlatform } from "@/components/sections/IntegratedPlatform";
import { WhyDopCellar } from "@/components/sections/WhyDopCellar";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

const TITLE = "The Integrated Infrastructure Platform — DopCellar Merit";
const DESC =
  "Seven engineering disciplines — power, CCTV, fire, access, electrical, building automation and maintenance — delivered under one contract, one project manager and one accountability line.";

export const Route = createFileRoute("/platform")({
  component: PlatformPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
});

function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="One integrated platform. Seven engineering disciplines."
        description="How DopCellar unifies power, security, fire, access, electrical, automation and maintenance into a single, accountable delivery system."
      />
      <IntegratedPlatform />
      <WhyDopCellar />
      <ConsultationCTA />
    </>
  );
}
