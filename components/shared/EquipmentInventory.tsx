"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Disc,
  Layers,
  Filter,
} from "lucide-react";
import { EQUIPMENT_INVENTORY, EquipmentRecord } from "@/constants/equipment";
import { useLanguage } from "@/contexts/LanguageContext";

interface EquipmentInventoryProps {
  showTitle?: boolean;
  className?: string;
}

export function EquipmentInventory({
  showTitle = true,
  className = "",
}: EquipmentInventoryProps) {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    {
      id: "all",
      label: language === "am" ? "ሁሉም መሣሪያዎች (12)" : "All Equipment (12)",
      icon: Filter,
    },
    {
      id: "machinery",
      label:
        language === "am"
          ? "ማሽኖች እና የወለል ማብሪያዎች"
          : "Machinery & Floor Polishers",
      icon: Disc,
    },
    {
      id: "manual",
      label:
        language === "am"
          ? "የእጅ መሣሪያዎች እና መጥረጊያዎች"
          : "Manual Tools & Wipers",
      icon: Layers,
    },
    {
      id: "chemicals",
      label:
        language === "am"
          ? "ኬሚካሎች እና ጀርም ማጥፊያዎች"
          : "Chemicals & Disinfection",
      icon: Sparkles,
    },
    {
      id: "safety",
      label: language === "am" ? "የደህንነት መጠበቂያ (PPE) እና ቆሻሻ" : "Safety & Waste Gear",
      icon: ShieldCheck,
    },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return EQUIPMENT_INVENTORY;
    return EQUIPMENT_INVENTORY.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={`w-full ${className}`}>
      {showTitle && (
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
            <Wrench className="h-4 w-4" />
            <span>
              {language === "am"
                ? "የተሟሉ የጽዳት መሣሪያዎች እና ቁሳቁሶች"
                : "Standard Cleaning Equipment & Materials"}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {language === "am"
              ? "የመሣሪያዎች እና ቁሳቁሶች ዝርዝር"
              : "Equipment & Materials Inventory"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
            {language === "am"
              ? "ለእያንዳንዱ ተቋም እና አገልግሎት ትክክለኛ ፍላጎት የተበጁ ተገቢ የጽዳት መሣሪያዎችን እና ቁሳቁሶችን እንጠቀማለን።"
              : "We utilize appropriate cleaning equipment and materials tailored to the exact requirements of each facility and service."}
          </p>

          {/* Quick Stats Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3.5 py-1 font-medium shadow-xs">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {language === "am" ? "12 ልዩ ምድቦች" : "12 Specialized Categories"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3.5 py-1 font-medium shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {language === "am" ? "ከፍተኛ የማብሪያ አጨራረስ" : "High-Shine Polished Finishes"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3.5 py-1 font-medium shadow-xs">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              {language === "am" ? "የደህንነት እና የንጽህና መስፈርት (PPE)" : "100% PPE Safety Compliant"}
            </span>
          </div>
        </div>
      )}

      {/* Category Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "border border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Equipment Cards Grid */}
      <motion.div
        layout
        className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            const name = item.name[language] || item.name.en;
            const purpose = item.purpose[language] || item.purpose.en;
            const badge = item.badge[language] || item.badge.en;
            const applications = item.applications[language] || item.applications.en;
            const facilities =
              item.suitableFacilities[language] || item.suitableFacilities.en;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Header with Icon and Badge */}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {name}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-foreground/90">
                    <span className="text-muted-foreground">
                      {language === "am" ? "ተግባር፦ " : "Purpose: "}
                    </span>
                    {purpose}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {applications}
                  </p>
                </div>

                {/* Footer with Facility Suitability */}
                <div className="mt-5 border-t border-border/50 pt-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="truncate">
                      <strong className="font-medium text-foreground">
                        {language === "am" ? "ተስማሚ ቦታዎች፦ " : "Facilities: "}
                      </strong>
                      {facilities}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
