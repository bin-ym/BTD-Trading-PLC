"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/ThemeProvider";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
          <span className="text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
            BTD Trading PLC
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-4 -bottom-px h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </motion.button>

          <Link href="/contact">
            <Button size="sm" className="rounded-full px-6">
              Get a Quote
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t bg-background md:hidden"
          >
            <nav className="container mx-auto px-6 py-4">
              <motion.div
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.06 } },
                }}
                className="space-y-2"
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
                        className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
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
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="mt-4 w-full rounded-xl">
                      Get a Quote
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
