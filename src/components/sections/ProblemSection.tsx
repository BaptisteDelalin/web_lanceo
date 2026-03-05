"use client";

import { useInView } from "@/hooks/useInView";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const problems = [
  {
    icon: "?",
    title: "Votre vision manque de structure",
    description:
      "Vous avez des idées, de l'énergie, mais pas de feuille de route claire pour avancer.",
  },
  {
    icon: "!",
    title: "Vous avancez sans stratégie",
    description:
      "Les décisions s'accumulent sans cohérence globale. Vous réagissez au lieu d'anticiper.",
  },
  {
    icon: "%",
    title: "Votre modèle économique est flou",
    description:
      "Vous n'avez pas de vision claire de votre rentabilité et de vos leviers de croissance.",
  },
];

export default function ProblemSection() {
  const { ref, isInView } = useInView({ margin: "-50px" });

  return (
    <Section background="cream-dark">
      <SectionTitle
        title="Vous avez l'ambition, il vous manque la structure"
        subtitle="Ces situations vous parlent ? Vous n'êtes pas seul. Et surtout, il existe une méthode pour en sortir."
      />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-8 text-center animate-fade-up ${isInView ? "in-view" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <span className="text-2xl font-bold text-primary">
                {problem.icon}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-dark mb-3">
              {problem.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
