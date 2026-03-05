import { notFound } from "next/navigation";
import { Metadata } from "next";
import OfferPageClient from "./OfferPageClient";
import { offers } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) return {};
  return {
    title: `${offer.name} | Lanceo Access`,
    description: offer.description,
  };
}

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) notFound();

  const currentIndex = offers.findIndex((o) => o.slug === slug);
  const nextOffer =
    currentIndex < offers.length - 1 ? offers[currentIndex + 1] : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lanceo-access.fr" },
      { "@type": "ListItem", position: 2, name: "Offres", item: "https://lanceo-access.fr/offres" },
      { "@type": "ListItem", position: 3, name: offer.name, item: `https://lanceo-access.fr/offres/${offer.slug}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.name,
    description: offer.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Lanceo Access",
      url: "https://lanceo-access.fr",
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    url: `https://lanceo-access.fr/offres/${offer.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <OfferPageClient offer={offer} nextOffer={nextOffer} />
    </>
  );
}
