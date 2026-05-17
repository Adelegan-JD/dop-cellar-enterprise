import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Dop Cellar Global Limited" },
      {
        name: "description",
        content:
          "Engineering disciplines delivered by Dop Cellar: electrical, structural, banking automation, network, CCTV, fire alarms, industrial maintenance, and enterprise security infrastructure.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Ten engineering disciplines. One delivery standard."
        description="From electrical and structural engineering to enterprise security and industrial maintenance — every service is governed by the same rigor."
      />
      <Services />
      <Process />
      <Contact />
    </>
  );
}
