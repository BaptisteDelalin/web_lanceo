import { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Lanceo Access",
  description: "Politique de confidentialité et protection des données personnelles de Lanceo Access.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-dark mb-8">
            Politique de confidentialité
          </h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <p>
                Dernière mise à jour : janvier 2026
              </p>
              <p className="mt-2">
                Lanceo Access s&apos;engage à protéger la vie privée de ses utilisateurs.
                Cette politique de confidentialité décrit comment nous collectons, utilisons
                et protégeons vos données personnelles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                1. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données est :<br />
                Lanceo Access — Mariam Sahid<br />
                Email : contact@lanceo-access.fr
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                2. Données collectées
              </h2>
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nom et prénom (formulaires de contact et de réservation)</li>
                <li>Adresse email (formulaires, newsletter)</li>
                <li>Numéro de téléphone (formulaire de réservation)</li>
                <li>Toute information que vous choisissez de partager dans les messages</li>
              </ul>
              <p className="mt-2">
                Ce site n&apos;utilise pas de cookies de suivi ni d&apos;outil
                d&apos;analyse comportementale. Aucune donnée de navigation
                n&apos;est collectée à des fins publicitaires.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                3. Finalités du traitement
              </h2>
              <p>Vos données sont collectées pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Répondre à vos demandes de contact</li>
                <li>Gérer les prises de rendez-vous</li>
                <li>Envoyer la newsletter (avec votre consentement)</li>
                <li>Améliorer notre site et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                4. Base légale par traitement
              </h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Formulaire de contact / réservation :</strong> consentement explicite (case à cocher)</li>
                <li><strong>Newsletter :</strong> consentement explicite (case à cocher, désinscription possible à tout moment)</li>
                <li><strong>Cookies techniques :</strong> intérêt légitime (fonctionnement du site)</li>
                <li><strong>Amélioration du service :</strong> intérêt légitime</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                5. Durée de conservation
              </h2>
              <p>
                Vos données sont conservées pendant une durée maximale de 3 ans à
                compter de votre dernière interaction avec nous, sauf obligation légale
                contraire.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                6. Sous-traitants et partage des données
              </h2>
              <p>
                Vos données ne sont jamais vendues à des tiers. Elles peuvent être
                partagées avec nos sous-traitants techniques, dans le strict cadre de
                la fourniture de nos services :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Vercel Inc.</strong> (hébergement du site) — États-Unis — protégé par le EU-US Data Privacy Framework</li>
                <li><strong>Resend Inc.</strong> (envoi d&apos;emails transactionnels) — États-Unis — protégé par le EU-US Data Privacy Framework</li>
              </ul>
              <p className="mt-2">
                Ces sous-traitants sont soumis à des obligations contractuelles conformes
                au RGPD et ne peuvent utiliser vos données qu&apos;aux fins prévues.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                7. Transferts hors Union européenne
              </h2>
              <p>
                Certains de nos sous-traitants sont situés aux États-Unis (Vercel, Resend).
                Ces transferts sont encadrés par le EU-US Data Privacy Framework, garantissant
                un niveau de protection adéquat conformément à la décision d&apos;adéquation de
                la Commission européenne du 10 juillet 2023.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                8. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit de retrait du consentement à tout moment, sans remettre en cause la licéité du traitement effectué avant le retrait</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, envoyez votre demande accompagnée d&apos;un
                justificatif d&apos;identité à : contact@lanceo-access.fr. Nous nous engageons
                à répondre dans un délai d&apos;un mois suivant la réception de votre demande.
                Ce délai peut être prolongé de deux mois en cas de demande complexe,
                auquel cas vous en serez informé.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                9. Cookies
              </h2>
              <p>
                Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs tiers.
                Seuls des cookies strictement nécessaires au fonctionnement technique
                du site peuvent être déposés. Aucun cookie ne nécessite votre
                consentement préalable.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                10. Sécurité
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données contre tout accès non autorisé,
                modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                11. Contact
              </h2>
              <p>
                Pour toute question relative à cette politique de confidentialité,
                vous pouvez nous contacter à : contact@lanceo-access.fr
              </p>
              <p className="mt-2">
                Vous pouvez également introduire une réclamation auprès de la CNIL
                (Commission Nationale de l&apos;Informatique et des Libertés) :
                www.cnil.fr
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
