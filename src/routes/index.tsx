import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SectorSolutions } from "@/components/sections/SectorSolutions";
import { SignaturePackages } from "@/components/sections/SignaturePackages";
import { HomeSections } from "@/components/sections/HomeSections";
import { WhyUs } from "@/components/sections/WhyUs";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Outcomes } from "@/components/sections/Outcomes";
import { Testimonials } from "@/components/sections/Testimonials";
import { DualCTA } from "@/components/sections/DualCTA";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SectorSolutions />
      <SignaturePackages />
      <HomeSections />
      <WhyUs />
      <FeaturedWork />
      <Outcomes />
      <Testimonials />
      <DualCTA />
      <About />
      <Contact />
    </>
  );
}
