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
                <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
                <li>Toute information que vous choisissez de partager dans les messages</li>
              </ul>
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
                4. Base légale
              </h2>
              <p>
                Le traitement de vos données repose sur votre consentement explicite
                (formulaires avec case à cocher) et sur notre intérêt légitime
                (amélioration de nos services).
              </p>
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
                6. Partage des données
              </h2>
              <p>
                Vos données ne sont jamais vendues à des tiers. Elles peuvent être
                partagées avec nos prestataires techniques (hébergement, envoi d&apos;emails)
                dans le strict cadre de la fourniture de nos services, et toujours dans
                le respect du RGPD.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                7. Vos droits
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
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à : contact@lanceo-access.fr
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                8. Cookies
              </h2>
              <p>
                Ce site utilise des cookies essentiels au fonctionnement du site et
                des cookies analytiques (avec votre consentement) pour mesurer
                l&apos;audience. Vous pouvez gérer vos préférences via le bandeau cookies
                affiché lors de votre première visite.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                9. Sécurité
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données contre tout accès non autorisé,
                modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                10. Contact
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
