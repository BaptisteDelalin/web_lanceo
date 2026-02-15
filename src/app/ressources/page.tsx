"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import NewsletterForm from "@/components/forms/NewsletterForm";

const resources = [
  {
    type: "Guide",
    title: "Les 5 erreurs fatales du business plan",
    description:
      "Découvrez les pièges les plus fréquents qui fragilisent votre business plan et comment les éviter.",
    tag: "Stratégie",
    free: true,
  },
  {
    type: "Template",
    title: "Canvas de modèle économique",
    description:
      "Un template complet pour cartographier et structurer votre modèle économique étape par étape.",
    tag: "Outil",
    free: false,
  },
  {
    type: "Guide",
    title: "Réussir son positionnement de marché",
    description:
      "Comment identifier votre proposition de valeur unique et vous démarquer dans un marché concurrentiel.",
    tag: "Positionnement",
    free: true,
  },
  {
    type: "Checklist",
    title: "Checklist de lancement d'activité",
    description:
      "Toutes les étapes à valider avant de lancer votre activité, de l'administratif à la stratégie commerciale.",
    tag: "Lancement",
    free: false,
  },
  {
    type: "Guide",
    title: "Définir ses indicateurs de performance",
    description:
      "Apprenez à choisir et suivre les KPIs qui comptent vraiment pour piloter votre croissance.",
    tag: "Pilotage",
    free: true,
  },
  {
    type: "Template",
    title: "Plan d'action stratégique 90 jours",
    description:
      "Un framework éprouvé pour planifier et exécuter vos priorités sur un trimestre.",
    tag: "Stratégie",
    free: false,
  },
];

export default function RessourcesPage() {
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
              Ressources
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Boîte à outils de l&apos;entrepreneur
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Guides, templates et articles pour vous aider à structurer et développer votre activité.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Blog link */}
      <Section background="white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5 rounded-lg p-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-dark">
              Blog — Stratégies & Réflexions
            </h2>
            <p className="text-text-secondary mt-1">
              Articles de fond sur l&apos;entrepreneuriat, la stratégie et le développement d&apos;entreprise.
            </p>
          </div>
          <Link
            href="/ressources/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Voir le blog →
          </Link>
        </div>
      </Section>

      {/* Resources Grid */}
      <Section background="cream-dark">
        <SectionTitle
          title="Guides & Templates"
          subtitle="Des ressources concrètes pour passer à l'action."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-cream-dark hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {resource.type}
                </span>
                <span className="text-xs text-text-secondary">{resource.tag}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-dark mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {resource.description}
              </p>
              <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                {resource.free ? "Télécharger gratuitement →" : "Accéder (newsletter) →"}
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section background="cream">
        <div className="max-w-xl mx-auto text-center">
          <SectionTitle
            title="Restez informé"
            subtitle="Inscrivez-vous à la newsletter pour recevoir nos dernières ressources et conseils stratégiques."
          />
          <NewsletterForm />
        </div>
      </Section>
    </main>
  );
}
