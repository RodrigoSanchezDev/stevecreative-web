"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui";

const stepIcons = [Search, PenTool, Rocket, BarChart3];

export function Process() {
  const t = useTranslations("process");

  const steps = [1, 2, 3, 4];

  return (
    <Section>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
        />

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-12 left-0 right-0 hidden lg:block">
            <div className="h-px w-full bg-linear-to-r from-transparent via-primary-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((num, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number & icon */}
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-dark-900 border border-white/10">
                      <Icon className="h-7 w-7 text-primary-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                      {num}
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {t(`steps.${num}.title`)}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed">
                    {t(`steps.${num}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
