"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { offers, faqItems } from "@/lib/constants";

export default function OffresClient() {
  return (
    <main>
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Offres d&apos;accompagnement
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Choisissez l&apos;accompagnement qui correspond à votre étape.
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Découvrez nos 4 paliers d&apos;accompagnement, conçus pour
              répondre à vos besoins spécifiques, quel que soit votre niveau de
              maturité.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/offres/${offer.slug}`} className="block h-full">
                <div
                  className={`h-full rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 ${
                    offer.highlighted
                      ? "bg-primary text-white shadow-lg ring-2 ring-primary"
                      : "bg-cream shadow-sm border border-cream-dark hover:shadow-md"
                  }`}
                >
                  {offer.highlighted && (
                    <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Recommandé
                    </span>
                  )}
                  <div
                    className={`text-sm font-medium mb-1 ${offer.highlighted ? "text-white/70" : "text-primary"}`}
                  >
                    Palier {offer.palier}
                  </div>
                  <h2
                    className={`font-display text-2xl font-semibold mb-3 ${offer.highlighted ? "text-white" : "text-dark"}`}
                  >
                    {offer.name}
                  </h2>
                  <p
                    className={`text-base leading-relaxed mb-4 ${offer.highlighted ? "text-white/80" : "text-text-secondary"}`}
                  >
                    {offer.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {offer.includes.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${offer.highlighted ? "text-white/80" : "text-text-secondary"}`}
                      >
                        <span
                          className={`mt-1 ${offer.highlighted ? "text-white" : "text-primary"}`}
                        >
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${offer.highlighted ? "text-white/60" : "text-text-secondary"}`}
                    >
                      {offer.duration}
                    </span>
                    <span
                      className={`font-medium ${offer.highlighted ? "text-white" : "text-primary"}`}
                    >
                      {offer.cta} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="cream-dark">
        <SectionTitle
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir avant de commencer."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>

      <CTASection />
    </main>
  );
}
