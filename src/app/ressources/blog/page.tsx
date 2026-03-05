import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  alternates: { canonical: "/ressources/blog" },
  title: "Blog | Stratégies et réflexions entrepreneuriales",
  description:
    "Articles et analyses sur l'entrepreneuriat, la stratégie d'entreprise et le développement de TPE/PME. Par Mariam Sahid, consultante à Lille.",
};

export default function BlogPage() {
  return <BlogClient />;
}
