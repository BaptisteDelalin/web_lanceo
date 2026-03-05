"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-cream-dark bg-white overflow-hidden"
        >
          <button
            id={`accordion-button-${index}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-dark hover:text-primary transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <span className="pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-2xl text-primary"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-button-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-4 text-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
