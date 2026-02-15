import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lanceo Access | Conseil en stratégie entrepreneuriale",
    template: "%s | Lanceo Access",
  },
  description:
    "Cabinet de conseil en stratégie entrepreneuriale. Accompagnement sur mesure pour porteurs de projet, entrepreneurs et dirigeants de TPE/PME. Basé à Lille.",
  keywords: [
    "conseil stratégie",
    "accompagnement entrepreneur",
    "consultant business",
    "TPE PME",
    "Lille",
    "Lanceo Access",
    "Mariam Sahid",
    "modèle économique",
    "stratégie entrepreneuriale",
  ],
  authors: [{ name: "Mariam Sahid" }],
  creator: "Lanceo Access",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Lanceo Access",
    title: "Lanceo Access | Conseil en stratégie entrepreneuriale",
    description:
      "Accompagnement stratégique sur mesure pour porteurs de projet, entrepreneurs et dirigeants de TPE/PME.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanceo Access | Conseil en stratégie entrepreneuriale",
    description:
      "Accompagnement stratégique sur mesure pour porteurs de projet, entrepreneurs et dirigeants.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
