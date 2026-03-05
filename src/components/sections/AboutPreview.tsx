"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <Section background="cream-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            À propos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
            Mariam Sahid
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Fondatrice de Lanceo Access à Lille, Mariam accompagne les entrepreneurs et
            dirigeants de la région Hauts-de-France et de toute la France dans la structuration de leur vision et
            l&apos;accélération de leur développement.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Forte d&apos;une expérience solide en conseil stratégique et en
            développement d&apos;entreprise, elle a conçu la Méthode Lancéo
            pour offrir un cadre clair, pragmatique et adapté à chaque étape du
            parcours entrepreneurial.
          </p>
          <Button href="/a-propos" variant="outline">
            En savoir plus
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
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
        </motion.div>
      </div>
    </Section>
  );
}
