import {
  Brush,
  Wind,
  Layers,
  Sparkles,
  Trash2,
  ShieldCheck,
  Disc,
  Maximize2,
  SprayCan,
  FileText,
  Droplets,
  Paintbrush,
  LucideIcon,
} from "lucide-react";

export interface EquipmentRecord {
  id: string;
  name: { en: string; am: string };
  purpose: { en: string; am: string };
  category: "machinery" | "manual" | "chemicals" | "safety";
  badge: { en: string; am: string };
  applications: { en: string; am: string };
  icon: LucideIcon;
  suitableFacilities: { en: string; am: string };
}

export const EQUIPMENT_INVENTORY: EquipmentRecord[] = [
  {
    id: "mops",
    name: {
      en: "Mops",
      am: "ሞፖች",
    },
    purpose: {
      en: "Floor cleaning & excess water wringing",
      am: "የወለል ጽዳት እና ትርፍ ውሃ መጭመቂያ",
    },
    category: "manual",
    badge: {
      en: "Water Control & Mopping",
      am: "የውሃ ቁጥጥር እና ማድረቂያ",
    },
    applications: {
      en: "Heavy-duty microfiber wet mopping and moisture extraction across all hard flooring.",
      am: "ለሁሉም ጠንካራ ወለሎች ጥራት ያለው እርጥብ ማጽጃ እና የውሃ መሳቢያ።",
    },
    icon: Brush,
    suitableFacilities: {
      en: "Offices, Corridors, Restrooms, Banquet Halls",
      am: "ቢሮዎች፣ ኮሪደሮች፣ መጸዳጃ ቤቶች፣ የድግስ አዳራሾች",
    },
  },
  {
    id: "brooms",
    name: {
      en: "Brooms",
      am: "መጥረጊያዎች",
    },
    purpose: {
      en: "General sweeping",
      am: "አጠቃላይ መጥረጊያ እና ማጽጃ",
    },
    category: "manual",
    badge: {
      en: "Daily Sweeping",
      am: "ዕለታዊ መጥረጊያ",
    },
    applications: {
      en: "Fine and coarse bristle brooms for debris clearing on interior and exterior surfaces.",
      am: "ለውስጥ እና ውጭ ወለል ቆሻሻ ማስወገጃ ለስላሳ እና ጠንካራ መጥረጊያዎች።",
    },
    icon: Paintbrush,
    suitableFacilities: {
      en: "Warehouses, Entrances, Parking Areas, Hallways",
      am: "መጋዘኖች፣ መግቢያዎች፣ የመኪና ማቆሚያዎች፣ መተላለፊያዎች",
    },
  },
  {
    id: "buckets-wringers",
    name: {
      en: "Buckets & Wringers",
      am: "ባልዲዎች እና መጭመቂያዎች",
    },
    purpose: {
      en: "Cleaning, water handling, and water removal",
      am: "ጽዳት፣ የውሃ አያያዝ እና የውሃ ማስወገጃ",
    },
    category: "manual",
    badge: {
      en: "Water Handling",
      am: "የውሃ አያያዝ",
    },
    applications: {
      en: "Dual-compartment mop buckets with ergonomic down-press wringers for hygienic solution separation.",
      am: "የንጹህ እና ቆሻሻ ውሃ መለያየት ያለው ባለሁለት ክፍል ባልዲ እና መጭመቂያ።",
    },
    icon: Droplets,
    suitableFacilities: {
      en: "Multi-Floor Buildings, Commercial Centers, Hospitals",
      am: "ባለብዙ ፎቅ ህንፃዎች፣ የንግድ ማዕከላት፣ ሆስፒታሎች",
    },
  },
  {
    id: "vacuum-cleaners",
    name: {
      en: "Vacuum Cleaners",
      am: "ቫክዩም ክሊነሮች",
    },
    purpose: {
      en: "Dust and surface extraction",
      am: "አቧራ እና የወለል ቆሻሻ መሳቢያ",
    },
    category: "machinery",
    badge: {
      en: "High-Power Extraction",
      am: "ከፍተኛ ኃይል ያለው መሳቢያ",
    },
    applications: {
      en: "Industrial HEPA-filter dry and wet vacuums for thorough deep-fiber dust and allergen removal.",
      am: "አቧራ፣ ቆሻሻ እና አለርጂ የሚያስወግዱ የኢንዱስትሪ ደረጃ ቫክዩም ማሽኖች።",
    },
    icon: Wind,
    suitableFacilities: {
      en: "Executive Suites, Meeting Rooms, Carpeted Halls, Gala Venues",
      am: "የስራ አስኪያጅ ቢሮዎች፣ የስብሰባ ክፍሎች፣ ምንጣፎች፣ የዝግጅት አዳራሾች",
    },
  },
  {
    id: "cleaning-cloths-dusters",
    name: {
      en: "Cleaning Cloths, Rags, & Dusters",
      am: "ማጽጃ ጨርቆች፣ ጨርቅ ቆራጮች እና አቧራ አራጋፊዎች",
    },
    purpose: {
      en: "Surface wiping and dusting",
      am: "የገጽታ ማበሻ እና አቧራ ማጽጃ",
    },
    category: "manual",
    badge: {
      en: "Color-Coded Microfiber",
      am: "ቀለም የተለየላቸው ማይክሮፋይበሮች",
    },
    applications: {
      en: "Color-coded lint-free microfiber cloths preventing cross-contamination across zones.",
      am: "የጀርም መተላለፍን የሚከላከሉ ቀለም የተለየላቸው ማይክሮፋይበር ጨርቆች።",
    },
    icon: Layers,
    suitableFacilities: {
      en: "Workstations, Desktops, Glass Dividers, Touchpoints",
      am: "የስራ ጠረጴዛዎች፣ ዴስኮች፣ የመስታወት ግድግዳዎች፣ ንክኪ ቦታዎች",
    },
  },
  {
    id: "brushes-sponges",
    name: {
      en: "Brushes & Sponges",
      am: "ብሩሾች እና ስፖንጆች",
    },
    purpose: {
      en: "Detailed cleaning and surface scrubbing",
      am: "ዝርዝር ጽዳት እና የገጽታ ማሸጊያ",
    },
    category: "manual",
    badge: {
      en: "Detailed Scrubbing",
      am: "ጥልቅ ማሸጊያ",
    },
    applications: {
      en: "Non-scratch scouring pads, grout detail brushes, and heavy-duty angle scrubbers.",
      am: "የማይቧጭሩ ስፖንጆች እና የከርሰ-ወለል ማጽጃ ብሩሾች።",
    },
    icon: Sparkles,
    suitableFacilities: {
      en: "Sanitary Facilities, Tile Joints, Kitchens, Restrooms",
      am: "የንጽህና ክፍሎች፣ የሰድር መጋጠሚያዎች፣ ማብሰያ ቤቶች፣ መጸዳጃ ቤቶች",
    },
  },
  {
    id: "waste-bins-bags",
    name: {
      en: "Waste Bins, Trash Cans, & Bags",
      am: "የቆሻሻ ማጠራቀሚያዎች፣ ቅርጫቶች እና ከረጢቶች",
    },
    purpose: {
      en: "Waste and garbage collection",
      am: "ቆሻሻ መሰብሰብ እና ደህንነቱ የተጠበቀ አወጋገድ",
    },
    category: "safety",
    badge: {
      en: "Sanitary Waste Handling",
      am: "ንጽህና የተጠበቀ ቆሻሻ አያያዝ",
    },
    applications: {
      en: "Durable high-micron heavy-duty trash liners and color-coded bins for safe refuse disposal.",
      am: "ጠንካራ የቆሻሻ ከረጢቶች እና የተከፋፈሉ የቆሻሻ ማጠራቀሚያዎች።",
    },
    icon: Trash2,
    suitableFacilities: {
      en: "All Office Floors, Gala Venues, External Compounds",
      am: "ሁሉም የቢሮ ፎቆች፣ የድግስ ስፍራዎች፣ የግቢ ዙሪያ",
    },
  },
  {
    id: "protective-uniforms",
    name: {
      en: "Protective Equipment & Uniforms",
      am: "የደህንነት መጠበቂያዎች እና ዩኒፎርሞች (PPE)",
    },
    purpose: {
      en: "Staff safety, hygiene, and identification",
      am: "የሠራተኞች ደህንነት፣ ንጽህና እና መለያ",
    },
    category: "safety",
    badge: {
      en: "Occupational Safety (PPE)",
      am: "የስራ ላይ ደህንነት (PPE)",
    },
    applications: {
      en: "Branded company uniforms, nitrile safety gloves, non-slip boots, face masks, and safety goggles.",
      am: "የኩባንያ መለያ ዩኒፎርም፣ ጓንት፣ የማያንሸራትት ጫማ እና የደህንነት መነጽር።",
    },
    icon: ShieldCheck,
    suitableFacilities: {
      en: "Standard on All 40+ Field Cleaners & On-Site Teams",
      am: "ለሁሉም 40+ የሜዳ ሠራተኞች እና በቦታው ላሉ ቡድኖች ግዴታ",
    },
  },
  {
    id: "polishing-buffing-machines",
    name: {
      en: "Polishing & Buffing Machines",
      am: "የወለል ማብሪያ እና ማጽጃ ማሽኖች",
    },
    purpose: {
      en: "Floor scrubbing and high-shine maintenance",
      am: "የወለል ማሸት እና ከፍተኛ ብሩህነት መስጫ",
    },
    category: "machinery",
    badge: {
      en: "High-Shine Polish Finish",
      am: "ከፍተኛ የማብሪያ አጨራረስ",
    },
    applications: {
      en: "Single-disc rotary floor scrubbers and high-speed burnishers delivering glossy polished finishes.",
      am: "ወለልን በጥልቀት አሽተው የሚያበሩ ከፍተኛ ፍጥነት ያላቸው ማሽኖች።",
    },
    icon: Disc,
    suitableFacilities: {
      en: "Commercial Buildings, Corporate Lobbies, Polished Terrazzo & Marble",
      am: "የንግድ ህንፃዎች፣ የመግቢያ አዳራሾች፣ እብነ-በረድ እና ቴራዞ ወለሎች",
    },
  },
  {
    id: "squeegees-scrapers",
    name: {
      en: "Squeegees & Scrapers",
      am: "ስኩዊጂ እና መፋቂያዎች",
    },
    purpose: {
      en: "Window, surface, and tough residue cleaning",
      am: "የመስኮት፣ የገጽታ እና ጠንካራ እድፍ ማጽጃ",
    },
    category: "manual",
    badge: {
      en: "Streak-Free Detailing",
      am: "ያለ ጭረት ማጽዳት",
    },
    applications: {
      en: "Architectural window squeegees, telescopic extension poles, and safety floor paint/cement scrapers.",
      am: "የመስኮት መስታወት ማድረቂያ ስኩዊጂ እና የወለል ቀለም/ሲሚንቶ መፋቂያዎች።",
    },
    icon: Maximize2,
    suitableFacilities: {
      en: "Glass Facades, Storefronts, Post-Construction Sites",
      am: "የመስታወት ህንፃዎች፣ የሱቅ ፊት ለፊት፣ ከግንባታ በኋላ ያሉ ህንፃዎች",
    },
  },
  {
    id: "specialized-chemicals",
    name: {
      en: "Specialized Chemicals & Detergents",
      am: "ልዩ ኬሚካሎች እና ሳሙናዎች (Vim, Dettol)",
    },
    purpose: {
      en: "Disinfection, stain removal, and glass/surface polish (including Vim, Dettol/restroom cleaners, and glass cleaners)",
      am: "የጀርም ማጥፊያ፣ የእድፍ ማስለቀቂያ እና የመስታወት/ገጽታ ማብሪያ (ቪም፣ ዴቶል እና የመስታወት ማጽጃዎችን ጨምሮ)",
    },
    category: "chemicals",
    badge: {
      en: "Certified Disinfection",
      am: "የተረጋገጠ የጀርም ማጥፊያ",
    },
    applications: {
      en: "Hospital-grade Dettol disinfectant, Vim abrasive stain-release cream, ammonia-free glass polish, and pH-neutral floor cleaners.",
      am: "ዴቶል የጀርም ማጥፊያ፣ ቪም የእድፍ ማስለቀቂያ፣ የመስታወት ማብሪያ እና ደህንነቱ የተጠበቀ የወለል ሳሙናዎች።",
    },
    icon: SprayCan,
    suitableFacilities: {
      en: "Healthcare Facilities, Restrooms, Gala Venues, Kitchens",
      am: "የጤና ተቋማት፣ መጸዳጃ ቤቶች፣ የድግስ አዳራሾች፣ ማብሰያ ቤቶች",
    },
  },
  {
    id: "paper-towels-tissues",
    name: {
      en: "Paper Towels & Tissues",
      am: "የወረቀት ፎጣዎች እና ሶፍቶች",
    },
    purpose: {
      en: "Drying and final surface detailing",
      am: "ማድረቂያ እና የመጨረሻ የገጽታ አጨራረስ",
    },
    category: "chemicals",
    badge: {
      en: "Finishing & Detailing",
      am: "የመጨረሻ አጨራረስ",
    },
    applications: {
      en: "Ultra-absorbent virgin pulp hand towels and soft lint-free facial tissues for executive hygiene dispensaries.",
      am: "ከፍተኛ ውሀ መሳብ አቅም ያላቸው ጥራት ያላቸው የወረቀት ፎጣዎች እና ሶፍቶች።",
    },
    icon: FileText,
    suitableFacilities: {
      en: "Executive Washrooms, VIP Gala Lounges, Meeting Rooms",
      am: "የቪአይፒ መጸዳጃ ቤቶች፣ የድግስ ላውንጆች፣ የስብሰባ ክፍሎች",
    },
  },
];
