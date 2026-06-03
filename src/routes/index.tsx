import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HomeSections } from "@/components/sections/HomeSections";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
      <About />
      <Contact />
    </>
  );
}
