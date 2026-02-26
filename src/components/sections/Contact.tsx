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

  const contactInfo = [
    { icon: Mail, text: t("info.email"), href: "mailto:Hola@stevecreative.cl" },
    { icon: Phone, text: t("info.phoneCL"), href: "tel:+5622754163" },
    { icon: Phone, text: t("info.phoneUS"), href: "tel:+13462565888" },
    { icon: MapPin, text: t("info.addressUS"), href: "#" },
    { icon: MapPin, text: t("info.addressCL"), href: "#" },
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
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:border-primary-500/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/20">
                    <Icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="text-dark-300 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </a>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary-900/30 to-dark-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                  <p className="text-sm text-dark-400">Houston, TX · Las Condes, Santiago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
