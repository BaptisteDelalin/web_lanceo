"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { offers } from "@/lib/constants";

export default function MethodPreview() {
  return (
    <Section background="cream">
      <SectionTitle
        title="La Méthode Lancéo"
        subtitle="Un parcours structuré en 4 paliers pour vous accompagner à chaque étape de votre développement."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href={`/offres/${offer.slug}`}
              className={`block relative rounded-lg p-6 transition-shadow duration-300 h-full ${
                offer.highlighted
                  ? "bg-primary text-white shadow-lg ring-2 ring-primary"
                  : "bg-white shadow-sm border border-cream-dark hover:shadow-md"
              }`}
            >
              {offer.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark text-white text-xs font-medium px-3 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <div
                className={`text-sm font-medium mb-2 ${offer.highlighted ? "text-white/70" : "text-primary"}`}
              >
                Palier {offer.palier}
              </div>
              <h3
                className={`font-display text-lg font-semibold mb-3 ${offer.highlighted ? "text-white" : "text-dark"}`}
              >
                {offer.name}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 ${offer.highlighted ? "text-white/80" : "text-text-secondary"}`}
              >
                {offer.tagline}
              </p>
              <div
                className={`text-xs font-medium ${offer.highlighted ? "text-white/60" : "text-text-secondary"}`}
              >
                {offer.duration}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/methode" variant="outline">
          Découvrir la méthode complète
        </Button>
      </div>
    </Section>
  );
}
