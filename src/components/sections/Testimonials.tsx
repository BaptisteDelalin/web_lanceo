"use client";

import { useInView } from "@/hooks/useInView";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const { ref, isInView } = useInView({ margin: "-50px" });

  return (
    <Section background="white">
      <SectionTitle
        title="Ils ont structuré leur trajectoire"
        subtitle="Découvrez les retours de ceux qui ont fait confiance à Lanceo Access."
      />
      <div ref={ref} role="list" aria-label="Témoignages clients" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            role="listitem"
            className={`bg-cream rounded-lg p-8 animate-fade-up ${isInView ? "in-view" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-1 mb-4" role="img" aria-label="Note : 5 étoiles sur 5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-lg" aria-hidden="true">
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-dark-soft leading-relaxed italic font-serif text-lg mb-6">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="font-medium text-dark text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-text-secondary">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
