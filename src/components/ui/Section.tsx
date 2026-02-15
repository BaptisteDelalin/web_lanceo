import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "cream" | "cream-dark" | "white" | "dark";
  id?: string;
}

export default function Section({
  children,
  className,
  background = "cream",
  id,
}: SectionProps) {
  const backgrounds = {
    cream: "bg-cream",
    "cream-dark": "bg-cream-dark",
    white: "bg-white",
    dark: "bg-dark text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
