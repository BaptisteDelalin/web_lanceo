"use client";

import { useInView } from "@/hooks/useInView";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const problems = [
  {
    icon: "?",
    title: "Vous avez l'idée, mais pas la feuille de route.",
    description:
      "Vous savez où vous voulez aller, mais chaque matin vous vous demandez par quoi commencer. L'énergie est là. Le plan, non.",
  },
  {
    icon: "!",
    title: "Vous pilotez à vue, décision après décision.",
    description:
      "Chaque semaine apporte son lot de choix urgents. Mais sans stratégie globale, vous réagissez au lieu de construire.",
  },
  {
    icon: "%",
    title: "Votre rentabilité reste un angle mort.",
    description:
      "Vous travaillez, vous facturez — mais vous ne savez pas précisément ce qui est rentable, ce qui ne l'est pas, et où se cachent vos leviers de croissance.",
  },
];

export default function ProblemSection() {
  const { ref, isInView } = useInView({ margin: "-50px" });

  return (
    <Section background="cream-dark">
      <SectionTitle
        title="Vous avez l'ambition, il vous manque la structure"
        subtitle="Si l'une de ces situations vous parle, c'est exactement pour cela que la Méthode Lancéo existe."
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
