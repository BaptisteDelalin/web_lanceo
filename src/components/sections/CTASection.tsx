"use client";

import { useInView } from "@/hooks/useInView";
import Button from "@/components/ui/Button";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`animate-fade-up ${isInView ? "in-view" : ""}`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Votre prochaine étape commence par une conversation.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            30 minutes pour faire le point sur votre situation, identifier ce
            qui vous bloque, et repartir avec une première piste d&apos;action
            concrète. Gratuit. Sans engagement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/rendez-vous" size="lg">
              Réserver mon créneau
            </Button>
            <Button
              href="/offres"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              Découvrir les offres
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/50">
            Réponse sous 24h · Créneau en visio ou à Lille
          </p>
        </div>
      </div>
    </section>
  );
}
