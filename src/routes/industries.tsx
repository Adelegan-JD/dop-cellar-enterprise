import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Industries } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Dop Cellar Global Limited" },
      {
        name: "description",
        content:
          "Sectors served by Dop Cellar Global Limited: banking, government, industrial operations, commercial real estate, residential, and corporate facilities.",
      },
    ],
  }),
});

function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Engineering standards calibrated to each sector."
        description="From banking and government to industrial operations and real estate, we adapt delivery to sector-specific compliance and continuity demands."
      />
      <Industries />
      <WhyUs />
      <Contact />
    </>
  );
}
