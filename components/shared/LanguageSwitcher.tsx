"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <button
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className="rounded-full border px-3 py-1.5 text-sm font-medium transition-all hover:bg-primary/10 hover:border-primary"
            >
                {language === "en" ? "አማ" : "EN"}
            </button>
        </div>
    );
}
