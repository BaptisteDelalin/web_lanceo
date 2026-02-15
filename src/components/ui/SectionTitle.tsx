"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12 md:mb-16", centered && "text-center", className)}
    >
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
