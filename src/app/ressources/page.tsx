import { Metadata } from "next";
import RessourcesClient from "./RessourcesClient";

export const metadata: Metadata = {
  alternates: { canonical: "/ressources" },
  title: "Ressources pour entrepreneurs | Guides, templates et outils",
  description:
    "Guides pratiques, templates et checklists pour structurer et développer votre activité entrepreneuriale. Ressources gratuites par Lanceo Access.",
};

export default function RessourcesPage() {
  return <RessourcesClient />;
}
