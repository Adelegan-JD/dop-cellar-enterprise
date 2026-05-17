import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Dop Cellar Global Limited" },
      {
        name: "description",
        content:
          "Speak with the Dop Cellar engineering team. Head office in Port Harcourt, Rivers State, Nigeria.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Speak with our engineering team."
        description="Share project specifics and we'll respond with a structured consultation pathway within one business day."
      />
      <Contact />
    </>
  );
}
