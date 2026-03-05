import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import CredibilityBar from "@/components/sections/CredibilityBar";

const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection"));
const MethodPreview = dynamic(() => import("@/components/sections/MethodPreview"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const AboutPreview = dynamic(() => import("@/components/sections/AboutPreview"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <ProblemSection />
      <MethodPreview />
      <Testimonials />
      <AboutPreview />
      <CTASection />
    </main>
  );
}
