"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl",
        hover &&
          "transition-all duration-500 hover:border-primary-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1",
        glow && "glow-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
