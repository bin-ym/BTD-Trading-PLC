"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const links = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 shadow-xs backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2 sm:gap-3 min-w-0">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center overflow-hidden"
          >
            <Image
              src="/images/logo.png"
              alt="BTD Trading PLC Logo"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </motion.div>

          <span className="text-sm sm:text-lg md:text-xl font-bold tracking-tight transition-colors group-hover:text-primary truncate max-w-[130px] min-[380px]:max-w-[180px] sm:max-w-none">
            BTD Trading PLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-3.5 lg:px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-3.5 lg:inset-x-4 -bottom-px h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 lg:gap-3 md:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </motion.button>

          <LanguageSwitcher />

          <Link href="/contact">
            <Button size="sm" className="rounded-full px-5 lg:px-6">
              {t.nav.getQuote}
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          <LanguageSwitcher />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border bg-background hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            ) : (
              <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            )}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border bg-background hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t bg-background md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-4">
              <motion.div
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.05 } },
                }}
                className="space-y-1.5"
              >
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        closed: { opacity: 0, x: -20 },
                        open: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm sm:text-base font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0 },
                  }}
                  className="pt-2"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-xl py-3 text-sm sm:text-base font-semibold">
                      {t.nav.getQuote}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
