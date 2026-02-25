"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "portfolio", href: "#portfolio" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const currentLocale =
      window.location.pathname.split("/")[1] === "es" ? "es" : "en";
    const newLocale = currentLocale === "en" ? "es" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-accent-500 font-bold text-white text-lg transition-transform duration-300 group-hover:scale-110">
                S
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary-500 to-accent-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Steve
                <span className="text-primary-400">Creative</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-dark-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-medium">
                  {typeof window !== "undefined" &&
                  window.location.pathname.split("/")[1] === "es"
                    ? "EN"
                    : "ES"}
                </span>
              </button>
              <Button href="#contact" size="sm">
                {t("getStarted")}
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-dark-300 hover:text-white transition-colors cursor-pointer"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-dark-300 hover:text-white transition-colors rounded-xl hover:bg-white/5"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLocale();
                    setMobileOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-dark-300 hover:text-white transition-all cursor-pointer"
                >
                  <Globe className="h-4 w-4" />
                  Switch Language
                </button>
                <Button
                  href="#contact"
                  size="lg"
                  className="w-full justify-center"
                >
                  {t("getStarted")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
