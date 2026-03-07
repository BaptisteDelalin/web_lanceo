"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    title: "Clarté",
    description:
      "Chaque entrepreneur mérite une vision limpide de sa situation et de ses options. Nous transformons la complexité en plans d'action clairs.",
  },
  {
    title: "Pragmatisme",
    description:
      "Pas de théorie abstraite. Nos recommandations sont concrètes, actionnables et adaptées à votre réalité terrain.",
  },
  {
    title: "Bienveillance",
    description:
      "Entreprendre est un acte courageux. Nous accompagnons avec exigence mais toujours dans un cadre de confiance et d'écoute.",
  },
  {
    title: "Impact",
    description:
      "Chaque intervention doit créer de la valeur mesurable. Nous nous engageons sur des résultats tangibles.",
  },
];

const timeline = [
  {
    year: "Formation",
    title: "Expertise en stratégie d'entreprise",
    description:
      "Formation solide en gestion, stratégie et développement d'entreprise, complétée par des certifications en accompagnement entrepreneurial.",
  },
  {
    year: "Expérience",
    title: "Conseil et accompagnement terrain",
    description:
      "Plusieurs années d'expérience en conseil stratégique auprès de startups, TPE et PME dans des secteurs variés.",
  },
  {
    year: "Lanceo",
    title: "Création de Lanceo Access",
    description:
      "Naissance de Lanceo Access à Lille, avec l'ambition de rendre l'accompagnement stratégique accessible à tous les entrepreneurs.",
  },
  {
    year: "Aujourd'hui",
    title: "Une méthode éprouvée",
    description:
      "Plus de 50 entrepreneurs accompagnés, une méthode en 4 paliers qui a fait ses preuves et une ambition nationale.",
  },
];

export default function AProposClient() {
  return (
    <main>
      {/* Hero */}
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
              À propos
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Mariam Sahid
            </h1>
            <p className="mt-2 text-xl text-primary font-serif italic">
              Consultante en stratégie. Lilloise. Pragmatique.
            </p>
            <p className="mt-6 text-text-secondary leading-relaxed">
              Passionnée par l&apos;entrepreneuriat et convaincue que chaque projet mérite un accompagnement stratégique de qualité, j&apos;ai créé Lanceo Access pour aider les entrepreneurs à transformer leur vision en réalité structurée.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Mon approche est simple : écouter, analyser, structurer et accompagner. Je ne crois pas aux solutions miracles, mais à la puissance d&apos;une stratégie claire, d&apos;un modèle économique solide et d&apos;un plan d&apos;action concret.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Basée à Lille, j&apos;accompagne des entrepreneurs partout en France, en présentiel comme en visioconférence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center max-w-md mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-4xl text-primary font-bold">MS</span>
                </div>
                <p className="text-sm text-text-secondary">Photo professionnelle à venir</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section background="white">
        <SectionTitle
          title="Nos valeurs"
          subtitle="Les principes qui guident chaque accompagnement chez Lanceo Access."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream rounded-lg p-8"
            >
              <h3 className="font-display text-xl font-semibold text-dark mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="cream-dark">
        <SectionTitle
          title="Le parcours"
          subtitle="Les étapes clés qui ont mené à la création de Lanceo Access."
        />
        <div className="max-w-3xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-sm font-bold text-primary">{item.year}</span>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-primary/20 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vision */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">
              Notre vision
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Rendre l&apos;accompagnement stratégique accessible à tous les entrepreneurs qui ont l&apos;ambition de construire quelque chose de solide et de durable.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Nous croyons en un entrepreneuriat structuré, où la stratégie n&apos;est pas un luxe mais une nécessité. Où chaque décision est éclairée, chaque action est intentionnelle.
            </p>
            <Button href="/rendez-vous">Échangeons ensemble</Button>
          </motion.div>
        </div>
      </Section>

      <CTASection />
    </main>
  );
}
