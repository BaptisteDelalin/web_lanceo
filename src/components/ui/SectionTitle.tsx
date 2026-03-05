"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
  as: Tag = "h2",
}: SectionTitleProps) {
  const { ref, isInView } = useInView({ margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 md:mb-16 animate-fade-up",
        isInView && "in-view",
        centered && "text-center",
        className
      )}
    >
      <Tag
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </Tag>
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
    </div>
  );
}
