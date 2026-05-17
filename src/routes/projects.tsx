import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Dop Cellar Global Limited" },
      {
        name: "description",
        content:
          "Selected case studies across banking, security, electrical, and network infrastructure programs delivered by Dop Cellar Global Limited.",
      },
    ],
  }),
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Engineering programs delivered for serious operators."
        description="A selection of infrastructure programs across financial services, security, electrical, and network deployments."
      />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
