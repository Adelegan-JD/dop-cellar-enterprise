import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { KnowledgeCentre } from "@/components/sections/KnowledgeCentre";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

const TITLE = "Knowledge Centre — DopCellar Merit";
const DESC =
  "Engineering guides, compliance whitepapers and short insights from the DopCellar team — for operations leads, facilities managers and procurement.";

export const Route = createFileRoute("/knowledge")({
  component: KnowledgePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
});

function KnowledgePage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Centre"
        title="Engineering perspective, published."
        description="Practical guides, compliance whitepapers and short insights from the DopCellar engineering team."
      />
      <KnowledgeCentre />
      <ConsultationCTA />
    </>
  );
}
