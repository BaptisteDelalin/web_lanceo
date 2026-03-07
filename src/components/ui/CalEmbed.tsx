"use client";

import { useEffect, useRef } from "react";

interface CalEmbedProps {
  calLink: string;
  className?: string;
}

export default function CalEmbed({ calLink, className }: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        const calInline = document.createElement("cal-inline");
        calInline.setAttribute("data-cal-link", calLink);
        calInline.setAttribute(
          "data-cal-config",
          '{"layout":"month_view","theme":"light"}'
        );
        calInline.style.width = "100%";
        calInline.style.height = "100%";
        calInline.style.overflow = "auto";
        containerRef.current.appendChild(calInline);
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [calLink]);

  return (
    <div ref={containerRef} className={className} style={{ minHeight: 500 }} />
  );
}
