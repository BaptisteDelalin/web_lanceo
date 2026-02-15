"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  highlighted = false,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-lg p-6 md:p-8 transition-colors duration-300",
        highlighted
          ? "bg-primary text-white shadow-lg"
          : "bg-white shadow-sm border border-cream-dark",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
