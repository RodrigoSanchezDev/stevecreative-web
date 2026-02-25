"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight: string;
  title2?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  title2,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
          align === "center" && "mx-auto max-w-4xl"
        )}
        style={{ fontFamily: "var(--font-space)" }}
      >
        {title}{" "}
        <span className="gradient-text">{titleHighlight}</span>
        {title2 && <> {title2}</>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "mt-6 text-lg text-dark-400 leading-relaxed",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
