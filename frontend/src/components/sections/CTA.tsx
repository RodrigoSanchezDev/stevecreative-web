"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, Container, Button } from "@/components/ui";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <Section>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-primary-900/80 via-dark-900/90 to-accent-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-accent-500/20" />
          <div className="absolute top-0 left-1/4 w-75 h-75 bg-primary-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-50 h-50 bg-accent-500/15 rounded-full blur-[80px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space)" }}
            >
              {t("title")}{" "}
              <span className="gradient-text">{t("titleHighlight")}</span>{" "}
              {t("title2")}
            </h2>
            <p className="text-lg text-dark-300 max-w-xl mx-auto mb-10">
              {t("description")}
            </p>
            <Button href="#contact" size="lg">
              {t("button")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
