"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/lib/constants";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }
    let current = 0;
    const step = Math.ceil(numericValue / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(interval);
      }
      setDisplayValue(current + suffix);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-primary">
        {displayValue}
      </div>
      <div className="mt-1 text-sm text-text-secondary">{label}</div>
    </div>
  );
}

export default function CredibilityBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-y border-cream-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
