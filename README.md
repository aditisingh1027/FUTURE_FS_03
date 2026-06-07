# The Reading Room Café – Conceptual Redesign Case Study

**This project is a conceptual redesign case study created for educational and portfolio purposes.**  
It showcases a premium‑grade, responsive website for a local café concept, built with Next.js 16 (App Router) and vanilla CSS.

---

## Project Overview
A quiet, library‑style café in Midtown Atlanta that blends specialty coffee, curated books, and comfortable workspaces.  
The site demonstrates modern UI/UX patterns, accessibility best‑practices, and SEO‑focused metadata while remaining a **static, front‑end‑only** implementation.

---

## Conceptual Redesign Case Study
- The café does *not* exist; the project is a realistic mock‑up meant for an internship portfolio.  
- All contact details are clearly labeled as **demonstration data** (`+1 555 0199`, WhatsApp link, mock address).  
- No backend or real‑world data storage is involved.

---

## Features
- Hero section with daily coffee recommendation (auto‑rotates by weekday).  
- Calendar‑style **Events** page with WhatsApp RSVP buttons.  
- **Menu** with tabbed categories & dietary notice.  
- Asymmetrical **Gallery** with lightbox, filter controls, and keyboard navigation.  
- Contact page with opening‑hours widget, map mock, and the floating action bar (FAB).  
- Dark‑mode toggle and theme persistence.

---

## Tech Stack
| Layer | Technology |
|------|-------------|
| Framework | **Next.js 16 (App Router)** |
| Language | **React 19** (client components) |
| Styling | **Vanilla CSS** with HSL design tokens & custom spacing variables |
| Fonts | **next/font/google** – Inter, Playfair Display, Lora |
| Build | Turbopack (default Next.js optimizer) |
| Lint | ESLint (Next.js preset) |

---

## Accessibility Features
- Semantic HTML5 structure with a single **`<h1>`** per page.  
- Proper ARIA roles/labels for navigation, tabs, dialogs, and FAB actions.  
- Focus‑visible outlines (`:focus-visible`) and logical tab order.  
- Keyboard‑controlled lightbox (Esc / ← / →).  
- Color contrast meets WCAG AA (using calibrated HSL palette).

---

## SEO Improvements
- Global `metadata` helper (`src/lib/seo.js`) supplies unique **title**, **description**, and Open Graph tags for every route.  
- Clean URLs, `lang="en"` on `<html>`, and `viewport` settings.  
- Structured address markup (`<address>` with micro‑data) on the Contact page.

---

## Performance Optimizations
- Fonts loaded via **`next/font/google`** – no external CSS requests.  
- Static generation for all pages (`next build` → 100 % static).  
- Image assets served with `next/image` (lazy‑loaded except hero).  
- CSS variables for spacing reduce duplicated values, and `backdrop-filter` is hardware‑accelerated.

---

## Installation

```bash
git clone https://github.com/aditisingh1027/FUTURE_FS_03.git
cd FUTURE_FS_03
npm ci            # install exact lockfile versions
npm run dev       # start dev server at http://localhost:3000
```

---

## Usage
- Explore the site locally or deploy to Vercel/Netlify for a live demo.  
- Review the code for accessibility patterns, SEO metadata, and performance tricks.

---

## License
MIT License – see `LICENSE` file.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
