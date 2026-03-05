import Link from "next/link";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <main>
      <Section background="cream" className="pt-32 md:pt-40 pb-20">
        <div className="max-w-xl mx-auto text-center">
          <span className="font-display text-8xl font-bold text-primary">
            404
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-dark">
            Page introuvable
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center rounded-sm border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
