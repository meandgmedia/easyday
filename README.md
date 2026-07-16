# Easy Day Notary

Production website for **Easy Day Notary**, a Florida mobile & Remote
Online Notary business. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com), deployed on Cloudflare Pages.

## Tech Stack

- **Astro 7** — static site generation, file-based routing, content collections
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **TypeScript** — strict mode
- No client-side framework; minimal JavaScript (only the mobile menu toggle and FAQ `<details>` elements, which are native HTML)

This stack was chosen for Cloudflare Pages because it ships fully static
HTML/CSS with near-zero JavaScript, giving fast Core Web Vitals, excellent
SEO out of the box, and a simple, dependency-light build.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
  components/       Reusable UI components (Header, Footer, cards, etc.)
  consts.ts         Site-wide config: business name, phone, email, hours, nav links
  content/blog/      Markdown blog posts (Astro content collection)
  content.config.ts  Blog collection schema
  layouts/Layout.astro  Base HTML shell: fonts, SEO head, header, footer
  lib/schema.ts      JSON-LD structured data helpers
  pages/             File-based routes — one file/folder per URL
  styles/global.css  Design tokens (colors, type, shadows) + Tailwind

public/
  images/            Logo, favicon, OG image
  robots.txt, llms.txt, sitemap.xml
```

## Before You Launch — Things To Personalize

Search the codebase for `TODO` comments, or update these directly:

| What | Where |
|---|---|
| Phone number, email, hours, service area | `src/consts.ts` |
| Social media links | `src/consts.ts` |
| Production domain | `src/consts.ts` (`SITE.url`) and `astro.config.mjs` (`site`) |
| Personal biography | `src/pages/about/index.astro` |
| Calendly embed | `src/pages/schedule.astro` |
| BlueNotary embed | `src/pages/schedule.astro` |
| Contact form (Web3Forms) | `src/pages/contact.astro` |
| Google Map embed | `src/pages/contact.astro` |
| Testimonials (currently placeholders) | `src/pages/index.astro` |
| Privacy Policy / Terms | `src/pages/privacy-policy.astro`, `src/pages/terms.astro` — have a Florida attorney review before publishing |

If your production domain changes from `easydaynotary.com`, update it in:
`src/consts.ts`, `astro.config.mjs`, `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt`.

## SEO

Every page includes a unique title, meta description, canonical URL, Open
Graph tags, Twitter Card tags, and JSON-LD structured data (Organization,
LocalBusiness, BreadcrumbList, Article on blog posts, and FAQPage where
relevant) via `src/components/Seo.astro` and `src/lib/schema.ts`.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub (already configured for
   `github.com/meandgmedia/easyday`).
2. In the Cloudflare dashboard, create a new Pages project connected to
   the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 (see `engines` in `package.json`)
4. Deploy. Cloudflare will rebuild automatically on every push to `main`.

No environment variables or server functions are required — this is a
fully static site.
