"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                LANCEO
              </span>
              <span className="text-xs tracking-[0.3em] text-primary-light font-medium">
                ACCESS
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Cabinet de conseil en stratégie entrepreneuriale. Accompagnement
              sur mesure pour porteurs de projet, entrepreneurs et dirigeants.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/methode"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  La Méthode
                </Link>
              </li>
              <li>
                <Link
                  href="/offres"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  Nos Offres
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/ressources"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  Ressources
                </Link>
              </li>
              <li>
                <Link
                  href="/ressources/blog"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/rendez-vous"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  Prendre RDV
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary-light transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.address}</li>
              <li className="flex gap-4 pt-2">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Recevez nos conseils stratégiques et ressources directement dans
              votre boîte mail.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lanceo Access. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
