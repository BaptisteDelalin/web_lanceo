"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Offer } from "@/types";
import { testimonials } from "@/lib/constants";

interface Props {
  offer: Offer;
  nextOffer: Offer | null;
}

export default function OfferPageClient({ offer, nextOffer }: Props) {
  const testimonial = testimonials[offer.palier - 1];

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
              Palier {offer.palier}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dark">
              {offer.name}
            </h1>
            <p className="mt-4 text-xl text-text-secondary font-serif italic">
              {offer.tagline}
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-semibold text-dark mb-4">
                Description
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                {offer.description}
              </p>

              <h3 className="font-display text-xl font-semibold text-dark mb-4">
                Pour qui ?
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                {offer.target}
              </p>

              <h3 className="font-display text-xl font-semibold text-dark mb-4">
                Ce qui est inclus
              </h3>
              <ul className="space-y-3 mb-8">
                {offer.includes.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="text-primary mt-0.5 font-bold">
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-cream rounded-lg p-8 sticky top-28"
            >
              <div className="text-sm text-text-secondary mb-1">Durée</div>
              <div className="font-display text-lg font-semibold text-dark mb-6">
                {offer.duration}
              </div>
              <Button href="/rendez-vous" className="w-full mb-3">
                {offer.cta}
              </Button>
              <Button href="/rendez-vous" variant="outline" className="w-full">
                Appel découverte gratuit
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {testimonial && (
        <Section background="cream-dark">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="font-serif text-xl italic text-dark-soft leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <p className="font-medium text-dark">{testimonial.name}</p>
              <p className="text-sm text-text-secondary">
                {testimonial.role}, {testimonial.company}
              </p>
            </motion.div>
          </div>
        </Section>
      )}

      {nextOffer && (
        <Section background="white">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-text-secondary">
                Aller plus loin
              </span>
              <h2 className="font-display text-2xl font-semibold text-dark mt-2 mb-4">
                Palier {nextOffer.palier} : {nextOffer.name}
              </h2>
              <p className="text-text-secondary mb-6">{nextOffer.tagline}</p>
              <Button href={`/offres/${nextOffer.slug}`} variant="outline">
                Découvrir cette offre &rarr;
              </Button>
            </motion.div>
          </div>
        </Section>
      )}
    </main>
  );
}
