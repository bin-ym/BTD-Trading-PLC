"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactContent() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
      description: t.contact.addressDesc,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: t.contact.phoneValue,
      description: t.contact.phoneDesc,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: t.contact.emailValue,
      description: t.contact.emailDesc,
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursValue,
      description: t.contact.hoursDesc,
    },
  ];

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-primary">
              {t.contact.badge}
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {t.contact.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.contact.description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:gap-16 xl:gap-24 grid-cols-1 lg:grid-cols-2 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{t.contact.letsConnect}</h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t.contact.connectDesc}
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 sm:p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-muted-foreground">{item.label}</p>
                        <p className="text-primary text-sm sm:text-base font-bold break-words">{item.value}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-12 sm:py-16 md:py-20 border-t bg-muted/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Visit Our Office
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                BTD Trading PLC - Addis Ababa, Ethiopia / Megenagna / Amecha
              </p>
            </div>

            <div className="overflow-hidden rounded-xl sm:rounded-2xl border shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=9.016333,38.805167&t=k&z=18&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="BTD Trading PLC - Satellite View"
                className="h-[250px] sm:h-[350px] md:h-[450px]"
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
