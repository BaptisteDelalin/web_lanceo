import { Metadata } from "next";
import MethodeClient from "./MethodeClient";

export const metadata: Metadata = {
  alternates: { canonical: "/methode" },
  title: "La Méthode Lancéo | Accompagnement entrepreneurial structuré",
  description:
    "La Méthode Lancéo : une approche en 4 étapes — diagnostic, structuration, stratégie et accompagnement — pour transformer votre ambition entrepreneuriale en résultats concrets.",
};

export default function MethodePage() {
  return <MethodeClient />;
}
