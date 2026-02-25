"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Section, Container, SectionHeader, Card } from "@/components/ui";

export function About() {
  const t = useTranslations("about");

  const values = [
    { key: "innovation", icon: Sparkles },
    { key: "quality", icon: Zap },
    { key: "transparency", icon: Shield },
    { key: "results", icon: TrendingUp },
  ];

  return (
    <Section id="about">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-100 h-100 bg-accent-600/10 rounded-full blur-[128px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          title2={t("title2")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Mission */}
          <Card delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/20 border border-primary-500/20">
                <Target className="h-6 w-6 text-primary-400" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {t("mission.title")}
                </h3>
                <p className="text-dark-400 leading-relaxed">
                  {t("mission.description")}
                </p>
              </div>
            </div>
          </Card>

          {/* Vision */}
          <Card delay={0.2}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 border border-accent-500/20">
                <Eye className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {t("vision.title")}
                </h3>
                <p className="text-dark-400 leading-relaxed">
                  {t("vision.description")}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {t("values.title")}
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary-500/30 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary-500/20 to-accent-500/20">
                  <Icon className="h-6 w-6 text-primary-400" />
                </div>
                <span className="text-sm font-semibold text-white text-center">
                  {t(`values.${value.key}`)}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
