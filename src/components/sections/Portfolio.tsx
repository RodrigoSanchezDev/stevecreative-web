"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  ChevronRight,
  Target,
  Lightbulb,
  TrendingDown,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Section, Container, SectionHeader } from "@/components/ui";
import { CostPerLeadChart } from "./CostPerLeadChart";

const projectImages: Record<number, string> = {
  1: "/projects/anrabess.png",
  2: "/projects/bar95.png",
  3: "/projects/westtravel.png",
  4: "/projects/verifone.png",
};

const projectGradients: Record<number, string> = {
  1: "from-primary-600/30 to-accent-600/30",
  2: "from-orange-600/30 to-red-600/30",
  3: "from-emerald-600/30 to-teal-600/30",
  4: "from-violet-600/30 to-indigo-600/30",
};

export function Portfolio() {
  const t = useTranslations("portfolio");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject, closeModal]);

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
          {projects.map((num, i) => {
            const url = t(`projects.${num}.url`);
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(num)}
              >
                {/* Project image */}
                <div
                  className={`aspect-16/10 bg-linear-to-br ${projectGradients[num]} relative overflow-hidden`}
                >
                  <Image
                    src={projectImages[num]}
                    alt={t(`projects.${num}.title`)}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-dark-950/30 group-hover:bg-dark-950/10 transition-all duration-500" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      <ChevronRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                      {t(`projects.${num}.category`)}
                    </span>
                    {url ? (
                      <ExternalLink className="h-4 w-4 text-dark-600 group-hover:text-primary-400 transition-colors" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-dark-600 group-hover:text-primary-400 transition-colors" />
                    )}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {t(`projects.${num}.title`)}
                  </h3>
                  <p className="text-sm text-dark-400 line-clamp-2">
                    {t(`projects.${num}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-dark-950/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-dark-900 overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-dark-800/80 border border-white/10 text-dark-400 hover:text-white hover:bg-dark-700/80 transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Project image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={projectImages[selectedProject]}
                  alt={t(`projects.${selectedProject}.title`)}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 -mt-16 relative z-10">
                <span className="inline-block text-xs font-medium text-primary-400 uppercase tracking-wider mb-2">
                  {t(`projects.${selectedProject}.category`)}
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {t(`projects.${selectedProject}.title`)}
                </h2>

                {/* Services tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {t(`projects.${selectedProject}.services`)
                    .split(",")
                    .map((service: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-dark-300"
                      >
                        {service.trim()}
                      </span>
                    ))}
                </div>

                {/* Long description */}
                <p className="text-dark-300 leading-relaxed mb-6">
                  {t(`projects.${selectedProject}.longDescription`)}
                </p>

                {/* Verifone-specific case study sections */}
                {selectedProject === 4 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Objective */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/20">
                            <Target className="h-4 w-4 text-primary-400" />
                          </div>
                          <h4 className="text-sm font-semibold text-white">
                            Objective
                          </h4>
                        </div>
                        <p className="text-sm text-dark-400 leading-relaxed">
                          {t("projects.4.objective")}
                        </p>
                      </div>

                      {/* Challenge */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20">
                            <Zap className="h-4 w-4 text-orange-400" />
                          </div>
                          <h4 className="text-sm font-semibold text-white">
                            Challenge
                          </h4>
                        </div>
                        <p className="text-sm text-dark-400 leading-relaxed">
                          {t("projects.4.challenge")}
                        </p>
                      </div>
                    </div>

                    {/* Strategy */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                          <Lightbulb className="h-4 w-4 text-emerald-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-white">
                          Strategy & Execution
                        </h4>
                      </div>
                      <p className="text-sm text-dark-400 leading-relaxed">
                        {t("projects.4.strategy")}
                      </p>
                    </div>

                    {/* Results with chart */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20">
                          <TrendingDown className="h-4 w-4 text-violet-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-white">
                          Results
                        </h4>
                      </div>
                      <p className="text-sm text-dark-400 leading-relaxed">
                        {t("projects.4.results")}
                      </p>
                      <CostPerLeadChart />
                    </div>
                  </div>
                )}

                {/* Visit Website button */}
                {t(`projects.${selectedProject}.url`) && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href={t(`projects.${selectedProject}.url`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
                    >
                      {t("viewProject")}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
