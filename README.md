# Portfolio — Full-Stack Engineer

A personal portfolio site for a backend-leaning full-stack engineer. Built with
React + TypeScript + Vite, Tailwind CSS + shadcn/ui, React Router, lucide-react,
and Framer Motion. Light/dark theme respects the OS on first load and persists
your manual choice in `localStorage`.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4 + shadcn/ui** (radix-nova style)
- **React Router** for the three page layers
- **lucide-react** icons + **Framer Motion** for subtle entrance/hover animation

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
    sections/        # landing-page sections (hero, tech stack, about, …)
    ui/              # shadcn/ui primitives
  pages/             # route-level pages (home, projects, project-detail, 404)
  data/portfolio.ts  # ← ALL content lives here (single source of truth)
  hooks/             # useTheme, useDocumentTitle
  lib/utils.ts       # cn() helper
public/
  images/            # profile photo(s)
  projects/          # per-project screenshots (+ optional diagrams)
  cv.pdf             # your CV (downloaded by the "Download CV" buttons)
```

### Three layers (routing)

- `/` — single-page scroll: Hero → Featured Projects → Tech Stack → Experience
  → About → Education → Contact.
- `/projects` — all projects with a filter-by-tag control.
- `/projects/:slug` — a consistent case-study template for every project
  (Problem → Architecture + diagram → Frontend → Decisions → Challenges →
  Outcome → Links).

## Editing content

Everything is driven by **`src/data/portfolio.ts`** — edit the `profile`,
`projects`, `techStack`, `experience`, `education`, and `stats` exports and the
whole site updates. Featured projects (those with `featured: true`) appear on the
landing page; all of them appear on `/projects`.

### Your photos

Two photo slots are already wired through `profile` in `src/data/portfolio.ts`:

| Field                | Where it shows         | Suggested ratio    |
| -------------------- | ---------------------- | ------------------ |
| `profile.heroImage`  | Hero (right side)      | 4:5 portrait       |
| `profile.aboutImage` | About section portrait | 4:5 portrait       |

To use your own photos, drop them in `public/images/` and point the fields at
them, e.g. `heroImage: "/images/headshot.jpg"`,
`aboutImage: "/images/working.jpg"`. They can be the same photo or two
different ones. (Placeholders currently live at `public/images/profile.svg`.)

> Want a third photo? Good spots are a candid inside the About text or a small
> avatar next to the Contact heading — say the word and it can be wired in.

### Project screenshots & diagrams

- Card/detail previews: `public/projects/<slug>.svg` (16:9). Swap the
  placeholders for real screenshots (PNG/JPG) and update each project's
  `screenshot` path.
- Architecture diagrams: each detail page shows a placeholder hinting at
  `public/projects/<slug>-diagram.svg` — drop a diagram there and wire it in.

### Your CV

Replace `public/cv.pdf` with your real resume (keep the filename, or update
`profile.cv`).

## Deploy to Vercel

`vercel.json` already includes the SPA rewrite so client-side routes like
`/projects/<slug>` work on direct load and refresh. See deploy steps in the
project hand-off notes (Vercel auto-detects Vite: build `npm run build`,
output `dist`).
