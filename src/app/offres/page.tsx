import { Metadata } from "next";
import OffresClient from "./OffresClient";
import { faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos offres d'accompagnement entrepreneurial",
  description:
    "4 paliers d'accompagnement adaptés à votre étape : diagnostic, structuration, accélération et accompagnement stratégique complet. Cabinet de conseil à Lille.",
};

export default function OffresPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <OffresClient />
    </>
  );
}
