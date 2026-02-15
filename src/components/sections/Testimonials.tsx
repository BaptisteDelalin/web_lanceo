"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <Section background="white">
      <SectionTitle
        title="Ils ont structuré leur trajectoire"
        subtitle="Découvrez les retours de ceux qui ont fait confiance à Lanceo Access."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-cream rounded-lg p-8"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-lg">
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-dark-soft leading-relaxed italic font-serif text-lg mb-6">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="font-medium text-dark text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-text-secondary">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
