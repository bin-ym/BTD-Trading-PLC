# Translation Implementation Guide

## ✅ Completed
- ✅ Translations file (`lib/translations.ts`) with English and Amharic
- ✅ Language Context (`contexts/LanguageContext.tsx`)
- ✅ Language Switcher component
- ✅ Navbar with translations
- ✅ Hero component with translations
- ✅ About component with translations
- ✅ Layout wrapped with LanguageProvider

## 🔄 How to Add Translations to Other Components

### Import the hook at the top of any component:
```tsx
import { useLanguage } from "@/contexts/LanguageContext";
```

### Use it in your component:
```tsx
export function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
    </div>
  );
}
```

## 📝 Components That Still Need Translation

### Home Page Components:
1. **Services.tsx** - Replace hardcoded text with:
   - `t.services.badge` - "What We Offer"
   - `t.services.title` - "Professional Cleaning Services"
   - `t.services.description` - Description text
   - `t.services.office` - "Office Cleaning"
   - `t.services.building` - "Building Cleaning"
   - `t.services.commercial` - "Commercial Facility Cleaning"
   - `t.services.hospital` - "Hospital Cleaning"
   - `t.services.learnMore` - "Learn more"
   
2. **WhyChooseUs.tsx** - Replace with:
   - `t.whyChooseUs.badge`
   - `t.whyChooseUs.title`
   - `t.whyChooseUs.experiencedTeam`
   - etc.

3. **Process.tsx** - Replace with:
   - `t.process.badge`
   - `t.process.title`
   - `t.process.step1`, `t.process.step2`, etc.

4. **CTA.tsx** - Replace with:
   - `t.cta.badge`
   - `t.cta.title`
   - `t.cta.description`
   - `t.cta.getQuote`
   - `t.cta.ourServices`

### Footer:
- `t.footer.description`
- `t.footer.quickLinks`
- `t.footer.contact`
- `t.footer.rights`

### Page Components:
- Contact page form labels
- About page sections
- Services page details
- Gallery page filters

## 🚀 Quick Example

Before:
```tsx
<h1>Professional Cleaning Services</h1>
```

After:
```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export function Component() {
  const { t } = useLanguage();
  
  return <h1>{t.services.title}</h1>;
}
```

## 🎯 Testing
1. Click the language switcher in the navbar (shows "አማ" for English, "EN" for Amharic)
2. All translated components will switch language instantly
3. Language preference is saved in localStorage

## 📋 All Available Translations

Check `lib/translations.ts` for the complete list of available translation keys organized by section:
- `t.nav.*` - Navigation
- `t.hero.*` - Hero section
- `t.about.*` - About section
- `t.services.*` - Services section
- `t.whyChooseUs.*` - Why Choose Us section
- `t.process.*` - Process section
- `t.cta.*` - Call to Action
- `t.footer.*` - Footer
- `t.contact.*` - Contact page

## ✨ Benefits
- ✅ Language persists across page refreshes
- ✅ No page reload needed when switching
- ✅ Easy to add more languages later
- ✅ TypeScript support for all translation keys
