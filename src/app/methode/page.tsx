import { Metadata } from "next";
import MethodeClient from "./MethodeClient";

export const metadata: Metadata = {
  alternates: { canonical: "/methode" },
  title: "La Méthode Lancéo | Accompagnement entrepreneurial structuré",
  description:
    "Découvrez la Méthode Lancéo : une approche en 4 paliers pour structurer votre projet entrepreneurial, du diagnostic à l'accompagnement stratégique complet.",
};

export default function MethodePage() {
  return <MethodeClient />;
}
