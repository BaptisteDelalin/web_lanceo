"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Prêt à structurer votre projet ?
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Réservez votre appel découverte gratuit et faisons le point ensemble
            sur votre situation, vos objectifs et la meilleure façon
            d&apos;avancer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/rendez-vous" size="lg">
              Réserver mon appel découverte
            </Button>
            <Button
              href="/offres"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              Voir les offres
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/50">
            30 min · Gratuit · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
