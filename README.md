# Mohamed Rayan Zaarir — Portfolio

My personal portfolio and project case-study site.

🔗 **Live:** [mohamedzaarir.dev](https://mohamedzaarir.dev)

A full-stack engineer's portfolio with a single-page landing experience and a
detailed case study for every project (problem → architecture → decisions →
challenges → outcome). Built for speed, accessibility, and a polished feel:
light/dark theme, subtle motion, and a responsive layout that scales from phone
to wide desktop.

## Tech stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4 + shadcn/ui**
- **React Router** — landing page, projects index, and per-project case studies
- **Framer Motion** — entrance, hover, and carousel animation
- **lucide-react** icons
- Deployed on **Vercel** (custom domain, auto SSL)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/        # reusable UI (navbar, footer, project card, section, …)
    sections/        # landing-page sections (hero, tech stack, experience, …)
    ui/              # shadcn/ui primitives
  pages/             # route-level pages (home, projects, project-detail, 404)
  data/portfolio.ts  # ← ALL content lives here (single source of truth)
  hooks/             # useTheme, useDocumentTitle
  lib/utils.ts       # cn() helper
public/
  images/            # profile photos
  projects/          # per-project screenshots + architecture diagrams
  og.png             # social-share preview image
  sitemap.xml        # SEO sitemap
```

## Routing

- `/` — single-page scroll: Hero → Featured Projects → Tech Stack → Experience →
  About → Education → Contact.
- `/projects` — every project as a card grid.
- `/projects/:slug` — a consistent case-study template per project.

## Editing content

Everything is driven by **`src/data/portfolio.ts`** — edit the `profile`,
`projects`, `techStack`, `experience`, `education`, and `stats` exports and the
whole site updates. Projects with `featured: true` also appear on the landing
page.

## SEO

- Per-page `<title>` via `useDocumentTitle`
- Open Graph + Twitter Card tags and a branded `og.png`
- `robots.txt` + `sitemap.xml`
- JSON-LD `Person` structured data
- Canonical URL pointing to the custom domain

## Deploy

`vercel.json` includes the SPA rewrite so client-side routes work on direct load
and refresh. Vercel auto-detects Vite (build `npm run build`, output `dist`).
