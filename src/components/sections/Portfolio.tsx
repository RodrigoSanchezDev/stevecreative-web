"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui";

const projectColors = [
  "from-primary-600/40 to-accent-600/40",
  "from-emerald-600/40 to-teal-600/40",
  "from-orange-600/40 to-red-600/40",
  "from-violet-600/40 to-indigo-600/40",
];

export function Portfolio() {
  const t = useTranslations("portfolio");

  const projects = [1, 2, 3, 4];

  return (
    <Section id="portfolio">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Project image placeholder */}
              <div
                className={`aspect-16/10 bg-linear-to-br ${projectColors[i]} relative`}
              >
                <div className="absolute inset-0 bg-dark-950/40 group-hover:bg-dark-950/20 transition-all duration-500" />

                {/* Mock UI elements */}
                <div className="absolute inset-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="h-8 border-b border-white/10 flex items-center gap-2 px-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    <div className="ml-4 h-3 w-40 rounded bg-white/10" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-3/4 rounded bg-white/10" />
                    <div className="h-3 w-1/2 rounded bg-white/10" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-white/5" />
                      <div className="h-16 rounded-lg bg-white/5" />
                      <div className="h-16 rounded-lg bg-white/5" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                    {t(`projects.${num}.category`)}
                  </span>
                  <ExternalLink className="h-4 w-4 text-dark-600 group-hover:text-primary-400 transition-colors" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {t(`projects.${num}.title`)}
                </h3>
                <p className="text-sm text-dark-400">
                  {t(`projects.${num}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
