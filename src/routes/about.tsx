import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — DopCellar Merit Global Limited" },
      {
        name: "description",
        content:
          "DopCellar Merit Global Limited is a Nigerian engineering, infrastructure, and industrial technology firm headquartered in Port Harcourt.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Firm"
        title="An engineering company built for reliability."
        description="Headquartered in Port Harcourt, delivering infrastructure programs across Nigeria for banking, government, industrial, and corporate clients."
      />
      <About />
      <WhyUs />
      <Process />
      <Contact />
    </>
  );
}
