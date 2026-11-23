"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "am" : "en")}
      aria-label={language === "en" ? "Switch to Amharic" : "Switch to English"}
      className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold transition-all hover:border-primary hover:bg-primary/10 cursor-pointer shadow-2xs"
    >
      <Languages className="h-3.5 w-3.5 text-primary shrink-0" />
      <span>{language === "en" ? "አማ" : "EN"}</span>
    </button>
  );
}
