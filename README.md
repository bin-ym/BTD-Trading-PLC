# BTD Trading PLC — Professional Cleaning Services

A modern, responsive website for BTD Trading PLC, a professional cleaning and facility management company based in Addis Ababa, Ethiopia.

Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui**.

## ✨ Features

- **Full responsive design** — optimized for mobile, tablet, and desktop
- **Dark / Light mode** — persistent theme toggle with system preference detection
- **Scroll animations** — smooth framer-motion entrance animations throughout
- **Image optimization** — blur placeholders for graceful image loading
- **Interactive gallery** — filter projects by category with animated transitions
- **Service detail pages** — individual pages for each cleaning service with images
- **Contact form** — ready for backend integration
- **Google Maps integration** — embedded office location map

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible, unstyled UI components |
| [Framer Motion](https://www.framer.com/motion/) | Scroll & hover animations |
| [Lucide React](https://lucide.dev/) | Icon library |

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page + form
│   ├── gallery/        # Project gallery with filtering
│   ├── services/       # Services listing + detail pages
│   ├── globals.css     # Global styles & theme variables
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── home/           # Homepage sections (Hero, About, Services, etc.)
│   ├── layout/         # Navbar & Footer
│   ├── shared/         # Reusable components (Container, AnimateInView)
│   ├── ui/             # shadcn/ui primitives
│   └── providers/      # Theme provider
├── constants/          # Navigation data
├── lib/                # Utility functions
└── public/             # Static assets
```

## 🏃 Getting Started

### Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **pnpm** (or npm / yarn)

### Install & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `app/globals.css` under the `:root` (light) and `.dark` selectors. The primary color is an OKLCH blue value:

```css
--primary: oklch(0.55 0.15 240);
```

### Images

Images are sourced from [Unsplash](https://unsplash.com/). To use your own images:

1. Add images to `public/images/`
2. Update the `src` props in the relevant components
3. Update `next.config.ts` if changing image domains

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About, Services, Why Choose Us, Process, CTA |
| About | `/about` | Mission/Vision/Values, Stats, Timeline, Team |
| Services | `/services` | Service cards with images & features |
| Service Detail | `/services/[slug]` | Individual service details |
| Gallery | `/gallery` | Filterable project gallery |
| Contact | `/contact` | Contact info, form, map |

## 🚢 Deployment

The easiest way to deploy is on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 License

This project is private and property of BTD Trading PLC.
