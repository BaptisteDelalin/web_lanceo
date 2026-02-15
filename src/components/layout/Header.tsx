"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold tracking-tight text-dark">
              LANCEO
            </span>
            <span className="text-xs font-sans tracking-[0.3em] text-primary font-medium">
              ACCESS
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-dark-soft hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-cream-dark p-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-dark-soft hover:text-primary hover:bg-cream rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button href="/rendez-vous" size="sm">
              Prendre RDV
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-dark"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-dark"
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-dark"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-cream z-40"
          >
            <div className="flex flex-col items-center justify-center gap-6 p-8 h-full">
              {navigation.map((item) => (
                <div key={item.href} className="text-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold text-dark hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-base text-text-secondary hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <Button
                  href="/rendez-vous"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Prendre RDV
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
