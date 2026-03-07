"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section background="cream" className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Conseil en stratégie entrepreneuriale à Lille
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
            Vous avez la vision.{" "}
            <span className="text-primary">Il vous manque le plan de bataille.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            En 4 à 12 semaines, passez d&apos;un projet ambitieux mais flou à
            une stratégie claire, un modèle économique solide et un plan
            d&apos;action que vous exécutez avec confiance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/rendez-vous" size="lg">
              Réserver mon appel découverte gratuit
            </Button>
            <Button href="/methode" variant="outline" size="lg">
              Voir comment ça marche
            </Button>
          </div>
          <p className="mt-3 text-sm text-text-secondary">
            30 min · Gratuit · Sans engagement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-4xl text-primary font-bold">
                  MS
                </span>
              </div>
              <p className="font-serif text-lg text-dark-soft italic">
                &ldquo;Chaque entrepreneur mérite une stratégie claire et un
                accompagnement à la hauteur de son ambition.&rdquo;
              </p>
              <p className="mt-3 text-sm text-primary font-medium">
                Mariam Sahid, Fondatrice
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
