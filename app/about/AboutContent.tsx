"use client";

import Link from "next/link";
import {
  Target,
  Eye,
  Building2,
  Hospital,
  GraduationCap,
  ShoppingCart,
  Store,
  Landmark,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Shield,
  Users,
  Award,
  Clock,
  Sparkles,
  CalendarClock,
  MessageSquare,
  ThumbsUp,
  RefreshCw,
  Bell,
  UserCheck,
  FileCheck,
  PartyPopper,
  Disc,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimateInView";
import { EquipmentInventory } from "@/components/shared/EquipmentInventory";
import { useLanguage } from "@/contexts/LanguageContext";

const clientTypes = [
  { name: "Clinics", icon: Hospital },
  { name: "Hospitals", icon: Hospital },
  { name: "Offices", icon: Building2 },
  { name: "Markets", icon: Store },
  { name: "Shopping Malls", icon: ShoppingCart },
  { name: "Schools", icon: GraduationCap },
  { name: "Commercial Buildings", icon: Landmark },
];

export function AboutContent() {
  const { t, language } = useLanguage();

  const coreStats = [
    {
      value: t.aboutPage.stats.experienceValue,
      label: t.aboutPage.stats.experience,
      description:
        language === "am"
          ? "በተግባር የተመሰከረለት የሜዳ ላይ ልምድ"
          : "Proven commercial field experience",
      icon: Clock,
    },
    {
      value: t.aboutPage.stats.teamValue,
      label: t.aboutPage.stats.team,
      description:
        language === "am"
          ? "ሙሉ በሙሉ የሰለጠኑ እና ዩኒፎርም የለበሱ"
          : "Vetted, trained & uniformed personnel",
      icon: Users,
    },
    {
      value: t.aboutPage.stats.contractsValue,
      label: t.aboutPage.stats.contracts,
      description:
        language === "am"
          ? "የአጭር እና የረጅም ጊዜ (1-3+ ዓመታት)"
          : "Custom 1, 2, 3+ years or periodic terms",
      icon: FileCheck,
    },
    {
      value: t.aboutPage.stats.leadershipValue,
      label: t.aboutPage.stats.leadership,
      description:
        language === "am"
          ? "በቦታው ላይ ቡድኖችን የሚመሩ"
          : "Active on-site team management",
      icon: UserCheck,
    },
  ];

  const leadershipRoles = [
    {
      title: t.aboutPage.supervision.team[0].name,
      role: t.aboutPage.supervision.team[0].role,
      description: t.aboutPage.supervision.team[0].description,
      icon: UserCheck,
      highlight: true,
      badge: language === "am" ? "የቦታው ቀጥተኛ አመራር" : "Core On-Site Command",
    },
    {
      title: t.aboutPage.supervision.team[1].name,
      role: t.aboutPage.supervision.team[1].role,
      description: t.aboutPage.supervision.team[1].description,
      icon: Users,
      highlight: false,
      badge: language === "am" ? "ማስተባበር እና ሎጂስቲክስ" : "Operations & Logistics",
    },
    {
      title: t.aboutPage.supervision.team[2].name,
      role: t.aboutPage.supervision.team[2].role,
      description: t.aboutPage.supervision.team[2].description,
      icon: ShieldCheck,
      highlight: false,
      badge: language === "am" ? "የጥራት እና ደህንነት ቁጥጥር" : "Quality & HSE Audit",
    },
  ];

  const supervisionPoints = [
    { title: t.aboutPage.supervision.points[0], icon: UserCheck },
    { title: t.aboutPage.supervision.points[1], icon: Users },
    { title: t.aboutPage.supervision.points[2], icon: CheckCircle2 },
    { title: t.aboutPage.supervision.points[3], icon: MessageSquare },
    { title: t.aboutPage.supervision.points[4], icon: Bell },
    { title: t.aboutPage.supervision.points[5], icon: RefreshCw },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
              {t.aboutPage.badge}
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t.aboutPage.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.aboutPage.subtitle}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{t.aboutPage.location}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction + Clients + 4 Pillars */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateInView>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                {t.aboutPage.whoWeAre.label}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl tracking-tight">
                {t.aboutPage.whoWeAre.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {t.aboutPage.whoWeAre.p1}
              </p>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                {t.aboutPage.whoWeAre.p2}
              </p>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  {language === "am" ? "የምናገለግላቸው ተቋማት፦" : "Facilities We Serve:"}
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {clientTypes.map((client) => {
                    const Icon = client.icon;
                    return (
                      <div
                        key={client.name}
                        className="flex items-center gap-2 rounded-xl border border-border/80 bg-card px-3 py-2 text-xs sm:text-sm font-medium transition-colors hover:border-primary/40"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-primary" />
                        <span>{client.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateInView>

            <AnimateInView className="grid gap-4 sm:grid-cols-2">
              {[
                { label: t.aboutPage.focus.hygiene, icon: Sparkles, desc: "Hospital-grade disinfection" },
                { label: t.aboutPage.focus.safety, icon: Shield, desc: "Comprehensive PPE & safety protocols" },
                { label: t.aboutPage.focus.professionalism, icon: Award, desc: "Uniformed & disciplined crew" },
                { label: t.aboutPage.focus.reliability, icon: Clock, desc: "On-time delivery & shift leaders" },
              ].map((focus) => {
                const Icon = focus.icon;
                return (
                  <div
                    key={focus.label}
                    className="group rounded-2xl border border-border/80 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-4 text-base font-bold text-foreground">
                      {focus.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {focus.desc}
                    </p>
                  </div>
                );
              })}
            </AnimateInView>
          </div>
        </Container>
      </section>

      {/* Unified Core Statistics Strip */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
        <Container className="relative z-10">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider uppercase text-white/90">
              {language === "am" ? "የድርጅቱ ቁልፍ መረጃዎች" : "Verified Company Statistics"}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {language === "am"
                ? "በተግባር የተረጋገጡ የቢቲዲ ትሬዲንግ አቅሞች"
                : "Operational Strengths & Capabilities"}
            </h2>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-xs transition-all hover:bg-white/15">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/90">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      {stat.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
              {language === "am" ? "ተልዕኮ እና ራዕይ" : "Mission & Vision"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.aboutPage.missionVision.subtitle}
            </p>
          </AnimateInView>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            <StaggerItem>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">
                  {t.aboutPage.missionVision.mission}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.aboutPage.missionVision.missionText}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.aboutPage.missionVision.missionTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">
                  {t.aboutPage.missionVision.vision}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.aboutPage.missionVision.visionText}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.aboutPage.missionVision.visionTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Leadership Structure (Prominently Showcasing Dedicated Shift Leaders) */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {language === "am" ? "የአመራር መዋቅር" : "Leadership & Supervision"}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl tracking-tight">
              {t.aboutPage.supervision.leadershipTitle}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {t.aboutPage.supervision.leadershipSubtitle}
            </p>
          </AnimateInView>

          {/* Leadership Cards */}
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {leadershipRoles.map((role) => {
              const Icon = role.icon;
              return (
                <StaggerItem key={role.title}>
                  <div
                    className={`relative flex h-full flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                      role.highlight
                        ? "border-primary/50 bg-gradient-to-b from-primary/5 to-card ring-2 ring-primary/20 shadow-md"
                        : "border-border/80 bg-card hover:border-primary/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                            role.highlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
                          {role.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                        {role.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {role.role}
                      </p>

                      <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border/50 pt-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>
                          {role.highlight
                            ? language === "am"
                              ? "በእያንዳንዱ ተቋም ላይ የሚመደቡ የቡድን መሪዎች"
                              : "Assigned directly on-site to every facility"
                            : language === "am"
                            ? "የማዕከላዊ አስተዳደር እና የጥራት ቁጥጥር"
                            : "Central management & rigorous audit"}
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Supervision Checklists */}
          <div className="mt-12 rounded-3xl border border-border/80 bg-muted/20 p-6 sm:p-8">
            <h4 className="text-lg font-bold text-foreground text-center mb-6">
              {t.aboutPage.supervision.title}
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supervisionPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {point.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Equipment & Materials Inventory Component Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <EquipmentInventory showTitle={true} />
        </Container>
      </section>

      {/* Flexible Service Arrangements & Contracts */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {language === "am" ? "የውል እና የአገልግሎት ሁኔታዎች" : "Contract Terms & Shifts"}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl tracking-tight">
              {t.aboutPage.arrangements.title}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.aboutPage.arrangements.subtitle}
            </p>
          </AnimateInView>

          <div className="grid gap-8 lg:grid-cols-3">
            <AnimateInView className="lg:col-span-2">
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {t.aboutPage.arrangements.optionsTitle}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    100% Customized
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {t.aboutPage.arrangements.options.map((option) => (
                    <div
                      key={option}
                      className="flex items-center gap-3 rounded-xl border border-border/70 px-4 py-3 bg-muted/10 transition-colors hover:border-primary/40"
                    >
                      <CalendarClock className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {option}
                      </span>
                      <span className="ml-auto text-[11px] font-bold text-primary">
                        {t.aboutPage.arrangements.available}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateInView>

            <AnimateInView>
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold">
                      {t.aboutPage.arrangements.shiftsTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {t.aboutPage.arrangements.shifts.map((shift) => (
                      <li key={shift} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium text-foreground">{shift}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-border/50 pt-3 text-xs text-muted-foreground">
                    {t.aboutPage.arrangements.shiftsNote}
                  </p>
                </div>

                <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold">
                      {t.aboutPage.arrangements.contractTitle}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {t.aboutPage.arrangements.contractText}
                  </p>
                </div>
              </div>
            </AnimateInView>
          </div>
        </Container>
      </section>

      {/* Health & Safety Commitment */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateInView>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Shield className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl tracking-tight">
                {t.aboutPage.safety.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {t.aboutPage.safety.text}
              </p>
              <ul className="mt-6 space-y-3">
                {t.aboutPage.safety.practices.map((practice) => (
                  <li
                    key={practice}
                    className="flex items-start gap-3 text-sm text-foreground/90 font-medium"
                  >
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </AnimateInView>

            <AnimateInView>
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {language === "am"
                        ? "የደህንነት እና የንጽህና ደረጃዎች"
                        : "Hygiene & Polishing Standards"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {language === "am"
                        ? "100% የPPE እና የኬሚካል ደህንነት"
                        : "100% PPE & Chemical Safety Compliant"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-xs sm:text-sm">
                  <div className="rounded-xl border border-border/60 bg-muted/10 p-3.5">
                    <p className="font-bold text-foreground">
                      {language === "am"
                        ? "የኬሚካል ደህንነት (Vim, Dettol, Glass Cleaners)"
                        : "Specialized Chemicals Handling"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {language === "am"
                        ? "በሰለጠኑ ሰራተኞች የሚከናወን የጀርም ማጥፊያ እና የእድፍ ማስለቀቂያ አጠቃቀም።"
                        : "Proper dilutions, SDS safety protocols, and safe surface finishing."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-muted/10 p-3.5">
                    <p className="font-bold text-foreground">
                      {language === "am"
                        ? "የወለል ማብሪያ ማሽኖች (Polishing & Buffing)"
                        : "Floor Scrubbing & Polishing Machinery"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {language === "am"
                        ? "ለእብነ-በረድ፣ ቴራዞ እና ጠንካራ ወለሎች የሚሆን ከፍተኛ ብሩህነት ማብሪያ።"
                        : "Rotary scrubbing and high-speed burnishing for pristine polished finishes."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-muted/10 p-3.5">
                    <p className="font-bold text-foreground">
                      {language === "am"
                        ? "የፈረቃ መሪዎች ክትትል (Shift Leaders On-Site)"
                        : "Dedicated Shift Leaders Oversight"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {language === "am"
                        ? "በቦታው በመገኘት የሰራተኞችን ደህንነት እና የጥራት ደረጃ የሚቆጣጠሩ።"
                        : "Daily checklists, equipment inspections, and immediate client coordination."}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </Container>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
              {t.aboutPage.satisfaction.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {t.aboutPage.satisfaction.subtitle}
            </p>
          </AnimateInView>

          <StaggerContainer className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {t.aboutPage.satisfaction.factors.map((factor) => (
              <StaggerItem key={factor}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs">
                  <ThumbsUp className="h-4 w-4 text-primary" />
                  <span>{factor}</span>
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-12 shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                  {t.aboutPage.cta.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/90 leading-relaxed">
                  {t.aboutPage.cta.text}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-primary shadow-lg transition-all hover:bg-white/90 hover:scale-105"
                  >
                    {t.aboutPage.cta.getInTouch}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                  >
                    {t.aboutPage.cta.ourServices}
                  </Link>
                </div>
              </div>

              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>
          </AnimateInView>
        </Container>
      </section>
    </main>
  );
}
