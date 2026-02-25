"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Code2,
  Megaphone,
  Palette,
  BarChart3,
  Layers,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { Section, Container, SectionHeader, Card } from "@/components/ui";

const serviceIcons = [Code2, Megaphone, Palette, BarChart3, Layers, Lightbulb];
const serviceKeys = [
  "web",
  "marketing",
  "branding",
  "analytics",
  "uiux",
  "consulting",
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <Section id="services">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          title2={t("title2")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            const features: string[] = t.raw(`${key}.features`) as string[];

            return (
              <Card key={key} delay={i * 0.1}>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20">
                    <Icon className="h-7 w-7 text-primary-400" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-dark-600 group-hover:text-primary-400 transition-colors duration-300" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {t(`${key}.title`)}
                </h3>
                <p className="text-dark-400 leading-relaxed mb-6 text-sm">
                  {t(`${key}.description`)}
                </p>
                <ul className="space-y-2">
                  {features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-dark-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
