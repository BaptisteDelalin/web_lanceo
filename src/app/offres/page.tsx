import { Metadata } from "next";
import OffresClient from "./OffresClient";

export const metadata: Metadata = {
  title: "Nos offres d'accompagnement entrepreneurial",
  description:
    "4 paliers d'accompagnement adaptés à votre étape : diagnostic, structuration, accélération et accompagnement stratégique complet. Cabinet de conseil à Lille.",
};

export default function OffresPage() {
  return <OffresClient />;
}
