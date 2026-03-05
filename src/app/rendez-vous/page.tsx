import { Metadata } from "next";
import RendezVousClient from "./RendezVousClient";

export const metadata: Metadata = {
  title: "Prendre rendez-vous | Appel découverte gratuit",
  description:
    "Réservez un appel découverte gratuit de 30 minutes avec Mariam Sahid. Faites le point sur votre projet entrepreneurial et identifiez le meilleur accompagnement.",
};

export default function RendezVousPage() {
  return <RendezVousClient />;
}
