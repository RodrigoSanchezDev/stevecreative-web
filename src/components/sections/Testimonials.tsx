"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui";

export function Testimonials() {
  const t = useTranslations("testimonials");

  const items = [1, 2, 3];

  return (
    <Section>
      <Container className="relative z-10">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          title2={t("title2")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-primary-500/20 hover:bg-white/[0.07] transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-500/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-dark-300 leading-relaxed mb-8 italic">
                &ldquo;{t(`items.${num}.quote`)}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-accent-500 text-white font-bold">
                  {(t(`items.${num}.author`) as string).charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {t(`items.${num}.author`)}
                  </div>
                  <div className="text-sm text-dark-400">
                    {t(`items.${num}.role`)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
