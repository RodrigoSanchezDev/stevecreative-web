"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-white/5 bg-dark-950">
      {/* Top section */}
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-accent-500 font-bold text-white text-lg">
                S
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Steve<span className="text-primary-400">Creative</span>
              </span>
            </a>
            <p className="text-dark-400 leading-relaxed mb-8 max-w-sm">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram", "dribbble"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-dark-400 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4">{t("services")}</h4>
            <ul className="space-y-3">
              {["webDev", "digitalMarketing", "brandStrategy", "uiuxDesign"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {t(item)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              {["aboutUs", "ourWork", "careers", "blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-white mb-2">
              {t("newsletter.title")}
            </h4>
            <p className="text-sm text-dark-400 mb-4">
              {t("newsletter.description")}
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-dark-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all"
              />
              <button
                type="submit"
                className="rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-500 transition-colors cursor-pointer"
              >
                {t("newsletter.button")}
              </button>
            </form>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:Hola@stevecreative.cl"
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Hola@stevecreative.cl
              </a>
              <a
                href="tel:+56227541639"
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +56 2 2754 1639
              </a>
              <a
                href="tel:+13462565888"
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +1 (346) 256-5888
              </a>
              <div className="flex items-center gap-2 text-sm text-dark-400">
                <MapPin className="h-4 w-4" />
                Houston, TX
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-400">
                <MapPin className="h-4 w-4" />
                Las Condes, Santiago
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-sm text-dark-500">{t("copyright")}</p>
          <div className="flex gap-6">
            {["privacy", "terms", "cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-dark-500 hover:text-dark-300 transition-colors"
              >
                {t(item)}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
