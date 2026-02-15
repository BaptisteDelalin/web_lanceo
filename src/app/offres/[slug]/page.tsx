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

  return <OfferPageClient offer={offer} nextOffer={nextOffer} />;
}
