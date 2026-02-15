import Hero from "@/components/sections/Hero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import ProblemSection from "@/components/sections/ProblemSection";
import MethodPreview from "@/components/sections/MethodPreview";
import Testimonials from "@/components/sections/Testimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import CTASection from "@/components/sections/CTASection";

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
