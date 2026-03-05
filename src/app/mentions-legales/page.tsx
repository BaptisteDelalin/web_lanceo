import { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Mentions légales | Lanceo Access",
  description: "Mentions légales du site Lanceo Access.",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Section background="cream" className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-dark mb-8">
            Mentions légales
          </h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Éditeur du site
              </h2>
              <p>
                Lanceo Access<br />
                Fondée par Mariam Sahid<br />
                Adresse : Lille, France<br />
                Email : contact@lanceo-access.fr<br />
                Téléphone : 06 10 33 92 37
              </p>
              <p className="mt-2">
                SIRET : [Numéro SIRET à compléter]<br />
                Forme juridique : [À compléter]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Directeur de la publication
              </h2>
              <p>Mariam Sahid</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Hébergement
              </h2>
              <p>
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, États-Unis<br />
                Site web : vercel.com
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, marques)
                est protégé par le droit d&apos;auteur et le droit des marques. Toute reproduction,
                représentation, modification, publication, transmission ou dénaturation,
                totale ou partielle, du site ou de son contenu, par quelque procédé que ce
                soit, et sur quelque support que ce soit, est interdite sans l&apos;autorisation
                écrite préalable de Lanceo Access.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Limitation de responsabilité
              </h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible
                et le site est périodiquement remis à jour, mais peut toutefois contenir
                des inexactitudes, des omissions ou des lacunes. Lanceo Access ne pourra
                être tenue responsable des dommages directs ou indirects résultant de
                l&apos;utilisation de ce site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD)
                et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
                de rectification, de suppression et d&apos;opposition concernant vos données
                personnelles. Pour exercer ces droits, contactez-nous à l&apos;adresse :
                contact@lanceo-access.fr.
              </p>
              <p className="mt-2">
                Pour plus d&apos;informations, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-3">
                Cookies
              </h2>
              <p>
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et
                à des fins statistiques. En poursuivant votre navigation, vous acceptez
                l&apos;utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
