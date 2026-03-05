import { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  title: "À propos de Mariam Sahid | Consultante en stratégie",
  description:
    "Mariam Sahid, fondatrice de Lanceo Access. Consultante en stratégie entrepreneuriale basée à Lille, elle accompagne les entrepreneurs et dirigeants de TPE/PME.",
};

export default function AProposPage() {
  return <AProposClient />;
}
