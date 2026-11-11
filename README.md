# BTD Trading PLC — Professional Cleaning Services & Proposal Platform

A modern, responsive web application and digital proposal platform for **BTD Trading PLC** (ቢቲዲ ትሬዲንግ ኃ.የተ. የግል. ማህበር), a premier professional cleaning and facility support company based in Addis Ababa, Ethiopia.

Built with **Next.js 16 (Turbopack)**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui**, featuring full bilingual support (English & Amharic), on-site leadership tracking, and interactive equipment inventory schemas.

---

## 🏢 Unified Company Profile & Core Statistics

* **Hero Title / Branding:** Hero section with official brand identity, company logo (`/images/logo.png`), verified workers info badge, and location tags (Megenagna / Amecha, Addis Ababa).
* **Core Statistics:**
  * **Experience:** **1–2 years of field experience** in commercial and institutional facilities.
  * **Team Members:** **40+ dedicated staff members** trained, vetted, and equipped with full PPE.
  * **Contract Terms:** **Flexible long-term and short-term service contracts** (1, 2, 3+ years or seasonal/one-time).
  * **Leadership Structure:** **Dedicated Shift Leaders managing on-site teams** directly on client premises.

---

## 🧹 Key Service Categories

1. **Building Cleanup & Maintenance (with polished finishes):**
   * Multi-story commercial and residential property maintenance.
   * Post-construction deep cleaning with rotary floor scrubbers and high-speed buffing machines.
   * Facade window cleaning with squeegees, extension poles, and residue scrapers.
2. **Service & Galas Support:**
   * High-profile gala, corporate event, and ceremonial gathering hospitality & sanitization.
   * Live on-site shift leadership for discreet trash clearance and rapid spill management.
   * Continuous luxury restroom attendance and post-event turnaround.
3. **Office Cleaning:**
   * Workstations, boardrooms, shared amenities, and executive suite care.
4. **Commercial Facility Cleaning:**
   * Malls, retail storefronts, markets, and warehouses.
5. **Hospital & Healthcare Sanitation:**
   * Clinic sanitation, hospital-grade disinfection, and infection prevention.

---

## 🧰 Equipment & Materials Inventory (12 Specialized Items)

The platform features an interactive catalog component (`<EquipmentInventory />`) backed by Schema.org `ItemList` structured data:

1. **Mops** — Floor cleaning & excess water wringing
2. **Brooms** — General sweeping
3. **Buckets & Wringers** — Cleaning, water handling, and water removal
4. **Vacuum Cleaners** — Dust and surface extraction
5. **Cleaning Cloths, Rags, & Dusters** — Surface wiping and dusting
6. **Brushes & Sponges** — Detailed cleaning and surface scrubbing
7. **Waste Bins, Trash Cans, & Bags** — Waste and garbage collection
8. **Protective Equipment & Uniforms** — Staff safety, hygiene, and identification
9. **Polishing & Buffing Machines** — Floor scrubbing and high-shine maintenance
10. **Squeegees & Scrapers** — Window, surface, and tough residue cleaning
11. **Specialized Chemicals & Detergents** — Disinfection, stain removal, and glass/surface polish (including Vim, Dettol/restroom cleaners, and glass cleaners)
12. **Paper Towels & Tissues** — Drying and final surface detailing

---

## ✨ Features

- **Full responsive design** — optimized for mobile, tablet, and desktop
- **Bilingual English & Amharic (አማርኛ)** — instant language switching with persistent storage
- **Structured Data Schemas (JSON-LD)** — `LocalBusiness`, `CleaningService`, `OfferCatalog`, and `ItemList`
- **Interactive Equipment Inventory Component** — categorized filter tabs, icons, and facility suitability tags
- **Dedicated Shift Leadership Hierarchy** — highlights on-site team management and supervision checklists
- **Dark / Light mode** — persistent theme toggle with system preference detection
- **Scroll animations** — framer-motion entrance reveals throughout
- **Dynamic SSG Service Routes** — `/services/[slug]` pre-rendered for fast delivery

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org/) | App Router & Turbopack SSG |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Strict type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility styling & CSS variables |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible UI primitives |
| [Framer Motion](https://www.framer.com/motion/) | Smooth animations & layout transitions |
| [Lucide React](https://lucide.dev/) | Iconography |

---

## 📁 Project Structure

```
├── app/
│   ├── about/                   # About page (Company Profile, Stats, Leadership, Inventory)
│   ├── contact/                 # Contact page + form + Google Map
│   ├── gallery/                 # Project gallery with filtering
│   ├── services/                # Services listing & Equipment Inventory
│   │   └── [slug]/              # Dynamic service detail pages (SSG)
│   ├── globals.css              # Global styles, OKLCH theme variables, Ethiopian accents
│   ├── layout.tsx               # Root layout with JSON-LD Structured Data
│   └── page.tsx                 # Homepage
├── components/
│   ├── home/                    # Hero, About, Services, WhyChooseUs, Process, CTA
│   ├── layout/                  # Navbar with LanguageSwitcher & Footer
│   ├── shared/                  # EquipmentInventory, StructuredData, Container, AnimateInView
│   └── ui/                      # Base UI primitives
├── constants/
│   ├── equipment.ts             # 12 Equipment & Material Inventory records (Bilingual)
│   └── navigation.ts            # Navigation items
├── contexts/
│   └── LanguageContext.tsx      # Bilingual React Context (EN / AM)
├── lib/
│   ├── translations.ts          # Unified English & Amharic translation dictionary
│   └── utils.ts                 # Utility functions & blur placeholders
├── public/
│   ├── Company Profile.md       # Comprehensive markdown company proposal document
│   └── images/                  # Project work photos & company logo
└── types/
    └── equipment.ts             # TypeScript definitions for inventory items
```

---

## 🏃 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

---

## 📝 License

Private and proprietary to **BTD Trading PLC**. All rights reserved.
