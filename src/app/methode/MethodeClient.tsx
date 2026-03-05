"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { offers } from "@/lib/constants";

const personas = [
  {
    title: "Porteurs de projet",
    description:
      "Vous avez une idée et vous cherchez à la structurer avant de vous lancer. Vous voulez éviter les erreurs classiques et partir sur de bonnes bases.",
  },
  {
    title: "Entrepreneurs & Indépendants",
    description:
      "Vous êtes lancé mais vous sentez que votre activité manque de structure. Vous voulez clarifier votre positionnement et accélérer votre croissance.",
  },
  {
    title: "Dirigeants de TPE/PME",
    description:
      "Vous dirigez une entreprise et vous cherchez un regard extérieur pour optimiser votre stratégie, pivoter ou passer à l'échelle supérieure.",
  },
];

export default function MethodeClient() {
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
              Notre approche
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              La Méthode Lancéo
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Une approche structurée et progressive pour accompagner chaque
              entrepreneur à son rythme, selon ses besoins et son niveau de
              maturité.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Notre philosophie"
            subtitle="Chez Lanceo Access, nous croyons que chaque projet mérite une stratégie sur mesure."
          />
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              La Méthode Lancéo repose sur une conviction forte : la réussite
              entrepreneuriale ne dépend pas uniquement de la qualité de
              l&apos;idée, mais de la solidité de la structure qui la porte.
            </p>
            <p>
              Notre approche est progressive, pragmatique et orientée résultats.
              Nous ne vous donnons pas de recettes toutes faites. Nous vous
              aidons à construire votre propre stratégie, adaptée à votre
              réalité, vos ambitions et votre marché.
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream-dark">
        <SectionTitle
          title="4 paliers pour structurer votre réussite"
          subtitle="Un parcours évolutif, du diagnostic rapide à l'accompagnement stratégique complet."
        />
        <div className="space-y-12 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-display text-xl font-bold shadow-lg">
                  {offer.palier}
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-cream-dark">
                <span className="text-sm font-medium text-primary">
                  Palier {offer.palier}
                </span>
                <h3 className="font-display text-xl font-semibold text-dark mt-1 mb-3">
                  {offer.name}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {offer.description}
                </p>
                <p className="text-sm text-accent mb-4">
                  <strong>Pour qui :</strong> {offer.target}
                </p>
                <Button
                  href={`/offres/${offer.slug}`}
                  variant="ghost"
                  size="sm"
                >
                  En savoir plus &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <SectionTitle
          title="Pour qui ?"
          subtitle="La Méthode Lancéo s'adapte à votre profil et à votre étape de développement."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-cream-dark text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-dark mb-3">
                {persona.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection />
    </main>
  );
}
