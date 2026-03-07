"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import BookingForm from "@/components/forms/BookingForm";
import CalEmbed from "@/components/ui/CalEmbed";
import { siteConfig } from "@/lib/constants";

export default function RendezVousClient() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Prendre rendez-vous
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              Parlons de votre projet. 30 minutes, sans engagement.
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Réservez un appel découverte gratuit de 30 minutes. C&apos;est l&apos;occasion de faire le point sur votre situation et d&apos;identifier le meilleur accompagnement pour vous.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Section 2: Cal.com embed + Info cards */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cal.com Embed — Primary booking method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-semibold text-dark mb-6">
              Choisissez un créneau
            </h2>
            <CalEmbed
              calLink={siteConfig.calLink}
              className="min-h-[500px] rounded-lg border border-gray-100"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-cream rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold text-dark mb-4">
                Comment ça se passe ?
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-dark">Choisissez un créneau</p>
                    <p className="text-sm text-text-secondary">
                      Sélectionnez la date et l&apos;heure qui vous conviennent dans le calendrier.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-dark">Confirmation par email</p>
                    <p className="text-sm text-text-secondary">
                      Vous recevez un email de confirmation avec les détails du rendez-vous.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-dark">Appel découverte (30 min)</p>
                    <p className="text-sm text-text-secondary">
                      Échange gratuit et sans engagement pour faire le point.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-cream rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold text-dark mb-4">
                Contact direct
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p>
                  <span className="font-medium text-dark">Email : </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-dark">Téléphone : </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-dark">Localisation : </span>
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 3: Fallback booking form */}
      <Section background="cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-semibold text-dark mb-3">
              Vous préférez ne pas utiliser le calendrier en ligne ?
            </h2>
            <p className="text-text-secondary">
              Remplissez le formulaire ci-dessous et nous vous recontacterons pour convenir d&apos;un créneau.
            </p>
          </div>
          <BookingForm />
        </motion.div>
      </Section>
    </main>
  );
}
