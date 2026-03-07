"use client";

import { useInView } from "@/hooks/useInView";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  const { ref, isInView } = useInView();

  return (
    <Section background="cream-dark">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          className={`order-2 lg:order-1 animate-fade-left ${isInView ? "in-view" : ""}`}
        >
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            À propos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
            Mariam Sahid
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Mariam a accompagné plus de 50 entrepreneurs et dirigeants à Lille et partout en France. Son credo : pas de grands discours, mais un plan d&apos;action clair et un cadre qui vous fait avancer.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Avant de fonder Lanceo Access, elle a passé plusieurs années dans le conseil stratégique auprès de TPE et PME. C&apos;est cette expérience terrain qui l&apos;a poussée à créer la Méthode Lancéo : un accompagnement où chaque euro et chaque heure investis produisent un résultat concret.
          </p>
          <Button href="/a-propos" variant="outline">
            En savoir plus
          </Button>
        </div>

        <div
          className={`order-1 lg:order-2 animate-fade-right ${isInView ? "in-view" : ""}`}
        >
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center max-w-sm mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <span className="font-display text-3xl text-primary font-bold">
                  MS
                </span>
              </div>
              <p className="text-sm text-text-secondary">Photo à venir</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
