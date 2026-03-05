import { Offer, Testimonial, NavItem } from "@/types";

export const siteConfig = {
  name: "Lanceo Access",
  description:
    "Cabinet de conseil en stratégie entrepreneuriale. Accompagnement sur mesure pour porteurs de projet, entrepreneurs et dirigeants de TPE/PME.",
  url: "https://lanceo-access.fr",
  email: "contact@lanceo-access.fr",
  phone: "06 10 33 92 37",
  address: "Lille, France",
  founder: "Mariam Sahid",
  socials: {
    linkedin: "https://linkedin.com/in/mariam-sahid",
    instagram: "https://instagram.com/lanceo.access",
  },
};

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "La Méthode", href: "/methode" },
  {
    label: "Offres",
    href: "/offres",
    children: [
      { label: "Check-up Lancéo", href: "/offres/check-up-lanceo" },
      { label: "Lancéo Access — GO", href: "/offres/lanceo-access-go" },
      { label: "Diagnostic ADN", href: "/offres/diagnostic-adn" },
      { label: "Accompagnement", href: "/offres/accompagnement" },
    ],
  },
  { label: "À propos", href: "/a-propos" },
  { label: "Ressources", href: "/ressources" },
];

export const offers: Offer[] = [
  {
    slug: "check-up-lanceo",
    palier: 1,
    name: "Check-up Lancéo",
    tagline: "Un premier regard stratégique sur votre projet",
    description:
      "Un diagnostic rapide pour évaluer la solidité de votre projet et identifier les premiers leviers d'action.",
    target: "Porteurs de projet en phase de lancement",
    includes: [
      "Analyse rapide du modèle économique",
      "Évaluation du positionnement",
      "Identification des points de blocage",
      "Recommandations prioritaires",
    ],
    duration: "1 session",
    cta: "Réserver mon Check-up",
    highlighted: false,
  },
  {
    slug: "lanceo-access-go",
    palier: 2,
    name: "Lancéo Access — GO",
    tagline: "Passez de l'idée à l'action structurée",
    description:
      "Un accompagnement ciblé pour structurer votre activité et poser les fondations d'une croissance solide.",
    target: "Entrepreneurs et indépendants en début d'activité",
    includes: [
      "Clarification de la vision et du positionnement",
      "Construction du modèle économique",
      "Plan d'action opérationnel",
      "Supports et outils pratiques",
    ],
    duration: "Plusieurs sessions",
    cta: "Démarrer avec GO",
    highlighted: true,
  },
  {
    slug: "diagnostic-adn",
    palier: 3,
    name: "Diagnostic ADN — Session stratégique",
    tagline: "Décryptez l'ADN de votre entreprise",
    description:
      "Une session stratégique approfondie pour analyser votre modèle, identifier vos forces et sécuriser votre trajectoire.",
    target: "Entrepreneurs confirmés et dirigeants de TPE",
    includes: [
      "Diagnostic complet du modèle économique",
      "Analyse de la viabilité financière",
      "Cartographie des forces et faiblesses",
      "Feuille de route stratégique",
    ],
    duration: "1 session approfondie",
    cta: "Réserver ma session ADN",
    highlighted: false,
  },
  {
    slug: "accompagnement",
    palier: 4,
    name: "Lancéo Access — Accompagnement stratégique",
    tagline: "Un partenaire stratégique à vos côtés",
    description:
      "Un accompagnement structuré sur plusieurs semaines pour transformer votre vision en résultats concrets et durables.",
    target:
      "Dirigeants de TPE/PME en phase de croissance ou repositionnement",
    includes: [
      "Accompagnement personnalisé sur plusieurs semaines",
      "Sessions de conseil régulières",
      "Suivi opérationnel et ajustements",
      "Accès aux outils et templates exclusifs",
      "Support entre les sessions",
    ],
    duration: "Programme sur mesure",
    cta: "Découvrir l'accompagnement",
    highlighted: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Durand",
    role: "Fondatrice",
    company: "Atelier Vert",
    content:
      "Grâce à Mariam, j'ai enfin pu structurer mon projet et passer à l'action. Sa méthode est claire, concrète et bienveillante. En quelques semaines, j'avais une vision limpide de mon modèle économique.",
  },
  {
    name: "Karim Benali",
    role: "Dirigeant",
    company: "KB Consulting",
    content:
      "Le diagnostic ADN a été un vrai tournant pour mon entreprise. Mariam a su identifier des leviers de croissance que je n'avais pas vus. Son approche stratégique est redoutablement efficace.",
  },
  {
    name: "Claire Martin",
    role: "Entrepreneure",
    company: "Les Belles Choses",
    content:
      "L'accompagnement de Lanceo Access m'a permis de passer d'une idée floue à un business structuré et rentable. Mariam est à la fois exigeante et bienveillante, exactement ce dont j'avais besoin.",
  },
  {
    name: "Thomas Leroy",
    role: "Co-fondateur",
    company: "DigitalFlow",
    content:
      "Le programme GO nous a donné les fondations solides dont nous avions besoin. La méthodologie est pragmatique et les résultats concrets. Je recommande sans hésitation.",
  },
];

export const stats = [
  { value: "50+", label: "Entrepreneurs accompagnés" },
  { value: "4", label: "Paliers d'accompagnement" },
  { value: "95%", label: "Taux de satisfaction" },
  { value: "12", label: "Semaines en moyenne" },
];

export const faqItems = [
  {
    question: "À qui s'adresse Lanceo Access ?",
    answer:
      "Lanceo Access accompagne trois profils principaux : les porteurs de projet qui veulent structurer leur idée avant de se lancer, les entrepreneurs et indépendants en début d'activité qui cherchent à poser des fondations solides, et les dirigeants de TPE/PME qui souhaitent optimiser leur stratégie de croissance.",
  },
  {
    question: "Comment choisir le bon palier d'accompagnement ?",
    answer:
      "Chaque palier correspond à un niveau de maturité et de besoin différent. Le Check-up Lancéo est idéal pour un premier état des lieux. Lancéo Access GO convient aux entrepreneurs qui démarrent. Le Diagnostic ADN s'adresse aux entreprises existantes. L'Accompagnement stratégique est un suivi complet sur la durée. Un appel découverte gratuit vous aidera à identifier le palier adapté.",
  },
  {
    question: "Combien coûtent les accompagnements ?",
    answer:
      "Les tarifs varient selon le palier et la durée d'accompagnement choisis. Le Check-up Lancéo est accessible à partir d'un tarif fixe. Pour les autres paliers, un devis personnalisé est établi après l'appel découverte, en fonction de vos besoins spécifiques.",
  },
  {
    question: "Les accompagnements se font-ils en présentiel ou en ligne ?",
    answer:
      "Les deux formats sont proposés. Les sessions peuvent se tenir en présentiel à Lille ou en visioconférence, selon vos préférences et votre localisation. La qualité de l'accompagnement reste identique dans les deux cas.",
  },
  {
    question: "Quelle est la durée d'un accompagnement ?",
    answer:
      "La durée varie selon le palier choisi. Le Check-up Lancéo se déroule sur une session unique. Le programme GO s'étale sur plusieurs sessions. Le Diagnostic ADN est une session approfondie. L'Accompagnement stratégique est un programme sur mesure de plusieurs semaines.",
  },
  {
    question: "Comment se déroule un appel découverte ?",
    answer:
      "L'appel découverte est un échange gratuit de 30 minutes. C'est l'occasion de faire connaissance, de comprendre vos enjeux et de déterminer ensemble le palier d'accompagnement le plus adapté à votre situation. Sans engagement.",
  },
];
