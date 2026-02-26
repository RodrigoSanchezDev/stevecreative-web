"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import {
  Section,
  Container,
  SectionHeader,
  Button,
  Input,
  Textarea,
  Select,
} from "@/components/ui";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData),
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const serviceOptions = [
    { value: "", label: "---" },
    { value: "web", label: t("form.serviceOptions.web") },
    { value: "marketing", label: t("form.serviceOptions.marketing") },
    { value: "branding", label: t("form.serviceOptions.branding") },
    { value: "consulting", label: t("form.serviceOptions.consulting") },
    { value: "other", label: t("form.serviceOptions.other") },
  ];

  const budgetOptions = [
    { value: "", label: "---" },
    { value: "small", label: t("form.budgetOptions.small") },
    { value: "medium", label: t("form.budgetOptions.medium") },
    { value: "large", label: t("form.budgetOptions.large") },
    { value: "enterprise", label: t("form.budgetOptions.enterprise") },
  ];



  return (
    <Section id="contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-100 h-100 bg-primary-600/10 rounded-full blur-[128px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label={t("form.name")}
                  name="name"
                  placeholder={t("form.namePlaceholder")}
                  required
                />
                <Input
                  label={t("form.email")}
                  name="email"
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  required
                />
              </div>

              <Input
                label={t("form.company")}
                name="company"
                placeholder={t("form.companyPlaceholder")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label={t("form.service")}
                  name="service"
                  options={serviceOptions}
                  required
                />
                <Select
                  label={t("form.budget")}
                  name="budget"
                  options={budgetOptions}
                />
              </div>

              <Textarea
                label={t("form.message")}
                name="message"
                placeholder={t("form.message")}
                required
              />

              <div className="flex items-center justify-between gap-4">
                <Button type="submit" size="lg" disabled={status === "sending"}>
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                  <Send className="h-4 w-4" />
                </Button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-emerald-400"
                  >
                    {t("form.success")}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-400"
                  >
                    {t("form.error")}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden h-full">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/8 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl translate-y-8 -translate-x-8 pointer-events-none" />

              {/* Email Section */}
              <a
                href="mailto:Hola@stevecreative.cl"
                className="group relative block p-7 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 ring-1 ring-primary-500/25">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-500 mb-0.5">Email</p>
                    <p className="text-[15px] text-white font-medium group-hover:text-primary-300 transition-colors truncate">Hola@stevecreative.cl</p>
                  </div>
                </div>
              </a>

              <div className="mx-7 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

              {/* Phone Section */}
              <div className="p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 ring-1 ring-primary-500/25">
                    <Phone className="h-5 w-5 text-primary-400" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-500">
                    {locale === 'es' ? 'Teléfonos' : 'Phone'}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 pl-[60px]">
                  <a href="tel:+56227541639" className="group flex items-center gap-3">
                    <span className="w-6 text-center text-[11px] font-bold tracking-wide text-dark-500">CL</span>
                    <span className="h-4 w-px bg-white/10" />
                    <span className="text-sm text-dark-300 group-hover:text-primary-400 transition-colors">+56 2 2754 1639</span>
                  </a>
                  <a href="tel:+13462565888" className="group flex items-center gap-3">
                    <span className="w-6 text-center text-[11px] font-bold tracking-wide text-dark-500">US</span>
                    <span className="h-4 w-px bg-white/10" />
                    <span className="text-sm text-dark-300 group-hover:text-primary-400 transition-colors">+1 (346) 256-5888</span>
                  </a>
                </div>
              </div>

              <div className="mx-7 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

              {/* Offices Section */}
              <div className="p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 ring-1 ring-primary-500/25">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-500">
                    {locale === 'es' ? 'Oficinas' : 'Offices'}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 pl-[60px]">
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-center text-[11px] font-bold tracking-wide text-dark-500">US</span>
                    <span className="h-4 w-px bg-white/10" />
                    <span className="text-sm text-dark-300">Houston, TX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-center text-[11px] font-bold tracking-wide text-dark-500">CL</span>
                    <span className="h-4 w-px bg-white/10" />
                    <span className="text-sm text-dark-300">Las Condes, Santiago</span>
                  </div>
                </div>
              </div>

              {/* Map Strip */}
              <div className="relative h-32 border-t border-white/5 bg-gradient-to-b from-dark-900/50 to-dark-950/80">
                <div className="absolute inset-0">
                  <svg viewBox="0 0 400 128" fill="none" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="32" x2="400" y2="32" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
                    <line x1="0" y1="64" x2="400" y2="64" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
                    <line x1="0" y1="96" x2="400" y2="96" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="100" y2="128" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
                    <line x1="200" y1="0" x2="200" y2="128" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
                    <line x1="300" y1="0" x2="300" y2="128" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
                    {/* Connection arc */}
                    <path d="M120,64 Q200,20 280,64" stroke="rgba(96,165,250,0.2)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                    {/* Dots */}
                    <circle cx="120" cy="64" r="12" fill="rgba(96,165,250,0.08)" />
                    <circle cx="120" cy="64" r="5" fill="rgba(96,165,250,0.15)" />
                    <circle cx="120" cy="64" r="2.5" fill="#3b82f6" />
                    <circle cx="280" cy="64" r="12" fill="rgba(96,165,250,0.08)" />
                    <circle cx="280" cy="64" r="5" fill="rgba(96,165,250,0.15)" />
                    <circle cx="280" cy="64" r="2.5" fill="#3b82f6" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-between px-16">
                  <div className="text-center">
                    <p className="text-[10px] font-semibold tracking-wider text-primary-400/70 mt-10">HOUSTON</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-semibold tracking-wider text-primary-400/70 mt-10">SANTIAGO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
