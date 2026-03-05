import { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  alternates: { canonical: "/a-propos" },
  title: "À propos de Mariam Sahid | Consultante en stratégie",
  description:
    "Mariam Sahid, fondatrice de Lanceo Access. Consultante en stratégie entrepreneuriale basée à Lille, elle accompagne les entrepreneurs et dirigeants de TPE/PME.",
};

export default function AProposPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mariam Sahid",
    jobTitle: "Consultante en stratégie entrepreneuriale",
    url: "https://lanceo-access.fr/a-propos",
    worksFor: {
      "@type": "ProfessionalService",
      name: "Lanceo Access",
      url: "https://lanceo-access.fr",
    },
    sameAs: [
      "https://linkedin.com/in/mariam-sahid",
      "https://instagram.com/lanceo.access",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AProposClient />
    </>
  );
}
