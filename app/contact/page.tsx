"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Addis Ababa, Ethiopia",
    description: "Visit our office during business hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 911 234 567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@btdtrading.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM",
    description: "Emergency services available",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Get in Touch
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Ready to transform your space? Let&apos;s discuss your cleaning
                needs.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-16 xl:gap-24 lg:grid-cols-2">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold">Let&apos;s Connect</h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions about our services? Need a free quote?
                  We&apos;re here to help. Reach out through any of the channels
                  below.
                </p>

                <div className="mt-8 space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="flex gap-4 rounded-2xl border bg-card p-4 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-primary text-sm sm:text-base">{item.value}</p>
                          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
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

        {/* Map placeholder */}
        <section className="py-16 sm:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">Visit Our Office</h2>
                <p className="mt-2 text-muted-foreground">
                  You can find us at Alemenesh Plaza, Bole Medhanialem, Addis
                  Ababa.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.378473899303!2d38.784367380452025!3d8.997987529640856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e9d21532d1%3A0xaa03ce0d1a2ec63d!2sAlemenesh%20Plaza%20%7C%20Bole%20Medhanialem%20%7C!5e1!3m2!1sen!2set!4v1784045373328!5m2!1sen!2set"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="BTD Trading PLC Location"
                  className="h-[250px] sm:h-[350px] md:h-[450px]"
                />
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
