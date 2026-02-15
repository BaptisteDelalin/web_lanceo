import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

const blogPosts = [
  {
    slug: "structurer-son-projet-entrepreneurial",
    title: "Comment structurer son projet entrepreneurial en 5 étapes",
    description:
      "Un guide pratique pour passer de l'idée au plan d'action concret, en évitant les pièges classiques du démarrage.",
    date: "2025-12-15",
    author: "Mariam Sahid",
    tags: ["Stratégie", "Lancement"],
    readingTime: "8 min",
    content: `
## Introduction

Se lancer dans l'entrepreneuriat est un acte courageux. Mais l'enthousiasme du début ne suffit pas à construire un projet viable. Sans structure, même les meilleures idées s'essoufflent.

Voici les 5 étapes essentielles pour transformer votre vision en plan d'action concret.

## 1. Clarifier votre proposition de valeur

Avant toute chose, répondez à cette question : **quel problème résolvez-vous et pour qui ?** Votre proposition de valeur est le socle de tout votre projet. Sans elle, vous construisez sur du sable.

Prenez le temps de formuler clairement ce que vous apportez de différent, de meilleur, de plus adapté que les alternatives existantes.

## 2. Définir votre cible avec précision

"Tout le monde" n'est pas une cible. Plus vous serez précis dans la définition de votre client idéal, plus votre message sera percutant et votre offre pertinente.

Créez un persona détaillé : qui est-il, quels sont ses défis, où le trouver, qu'est-ce qui le pousse à agir ?

## 3. Construire votre modèle économique

Comment allez-vous gagner de l'argent ? C'est la question que beaucoup d'entrepreneurs évitent au départ, préférant se concentrer sur le produit. Pourtant, un modèle économique clair est indispensable.

Identifiez vos sources de revenus, votre structure de coûts, votre pricing et vos marges prévisionnelles.

## 4. Élaborer votre plan d'action à 90 jours

Un business plan de 50 pages ne vous sera d'aucune utilité si vous ne savez pas quoi faire demain matin. Concentrez-vous sur les 90 prochains jours : quelles sont les 3 à 5 actions prioritaires ?

Chaque action doit être spécifique, mesurable et avoir une deadline.

## 5. Tester et itérer rapidement

Ne cherchez pas la perfection. Lancez une version minimale de votre offre, confrontez-la au marché, recueillez des retours et ajustez. L'apprentissage terrain vaut mille heures de planification.

## Conclusion

Structurer son projet, c'est se donner les moyens de réussir. Ce n'est pas brider la créativité, c'est lui donner un cadre pour s'exprimer pleinement. Si vous sentez que vous avez besoin d'un regard extérieur pour franchir ces étapes, n'hésitez pas à nous contacter.
    `,
  },
  {
    slug: "modele-economique-viable",
    title: "Construire un modèle économique viable : les fondamentaux",
    description:
      "Les clés pour bâtir un modèle économique solide qui résiste au temps et soutient votre croissance.",
    date: "2025-11-28",
    author: "Mariam Sahid",
    tags: ["Business Model", "Croissance"],
    readingTime: "10 min",
    content: `
## Pourquoi le modèle économique est-il si important ?

Beaucoup d'entrepreneurs se concentrent sur leur produit ou service sans prendre le temps de réfléchir à la mécanique financière qui le soutient. Pourtant, un modèle économique solide est ce qui sépare un projet passionnant d'une entreprise viable.

## Les composantes clés

### La proposition de valeur
C'est le cœur de votre modèle. Quelle valeur créez-vous et pour qui ? Plus votre proposition est claire et différenciante, plus votre modèle sera robuste.

### Les flux de revenus
Comment monétisez-vous votre valeur ? Vente directe, abonnement, commission, freemium... Chaque modèle de revenus a ses avantages et contraintes.

### La structure de coûts
Quels sont vos coûts fixes et variables ? À quel point de chiffre d'affaires atteignez-vous l'équilibre ? Cette analyse est cruciale pour la pérennité.

### Les canaux de distribution
Comment atteignez-vous vos clients ? En direct, via des partenaires, en ligne ? Le choix de vos canaux impacte directement votre rentabilité.

## Les pièges à éviter

- **Sous-estimer ses coûts** : Toujours prévoir une marge de sécurité
- **Copier un modèle sans l'adapter** : Ce qui marche pour un autre peut ne pas fonctionner pour vous
- **Négliger le cash-flow** : Être rentable sur le papier ne suffit pas, il faut gérer la trésorerie

## Conclusion

Un modèle économique viable, c'est un modèle que vous comprenez parfaitement, que vous pouvez expliquer simplement et qui résiste à l'épreuve des chiffres. Prenez le temps de le construire solidement.
    `,
  },
  {
    slug: "erreurs-entrepreneurs-debutants",
    title: "Les 7 erreurs que font les entrepreneurs débutants",
    description:
      "Retour d'expérience sur les obstacles les plus fréquents et comment les transformer en opportunités d'apprentissage.",
    date: "2025-11-10",
    author: "Mariam Sahid",
    tags: ["Conseils", "Lancement"],
    readingTime: "6 min",
    content: `
## Apprendre des erreurs des autres

L'entrepreneuriat est un chemin d'apprentissage. Mais certaines erreurs sont tellement fréquentes qu'il est possible de les anticiper. Voici les 7 que je rencontre le plus souvent chez les entrepreneurs que j'accompagne.

## 1. Attendre que tout soit parfait pour se lancer

Le perfectionnisme est l'ennemi du progrès. Votre première version ne sera jamais parfaite, et c'est normal. L'important est de commencer, tester et améliorer.

## 2. Ne pas connaître ses chiffres

Beaucoup d'entrepreneurs ne connaissent pas leur coût de revient, leur marge ou leur point mort. Sans ces repères, vous pilotez à l'aveugle.

## 3. Vouloir plaire à tout le monde

Essayer de séduire tout le monde, c'est ne séduire personne. Choisissez votre cible et adressez-vous à elle avec précision.

## 4. Négliger la partie commerciale

Un bon produit ne se vend pas tout seul. La vente est un métier qui s'apprend. Consacrez-y du temps et de l'énergie dès le départ.

## 5. S'isoler

L'entrepreneuriat peut être solitaire. Ne restez pas seul : entourez-vous, faites-vous accompagner, rejoignez des communautés.

## 6. Confondre être occupé et être productif

Être débordé n'est pas un signe de succès. Concentrez-vous sur les tâches à forte valeur ajoutée et déléguez ou éliminez le reste.

## 7. Ne pas investir en soi

Votre entreprise est le reflet de vos compétences. Formez-vous, lisez, faites-vous coacher. C'est l'investissement le plus rentable.

## Le mot de la fin

Faire des erreurs fait partie du jeu. L'important est d'en tirer des leçons et d'avancer. Et si vous sentez que vous avez besoin d'un guide pour naviguer ces défis, c'est exactement pour cela que Lanceo Access existe.
    `,
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Lanceo Access`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return <BlogPostClient post={post} relatedPosts={otherPosts} />;
}
