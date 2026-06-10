/**
 * Single source of truth for all portfolio content.
 *
 * Everything rendered across the site is driven by the typed values below —
 * swap the placeholder copy, metrics, links and image paths for your real
 * content and the UI updates everywhere. Nothing here is wired to a CMS or API,
 * so it is intentionally trivial to edit by hand.
 */

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export type Metric = {
  /** Short label, e.g. "p95 latency" */
  label: string
  /** The hard number, e.g. "180ms" */
  value: string
  /** Which end of the stack this metric speaks to (used only for a subtle tag). */
  side?: "frontend" | "backend" | "data"
}

export type KeyPoint = {
  title: string
  detail: string
}

export type Project = {
  /** URL segment: /projects/:slug */
  slug: string
  name: string
  /** One-line problem statement shown on cards. */
  problem: string
  /** A sentence or two of context shown on cards and detail header. */
  summary: string
  /** Flat list of tech tags — powers card pills and the /projects tag filter. */
  stack: string[]
  /** Hard numbers. Cards surface the first one; detail page shows them all. */
  metrics: Metric[]
  /** Featured projects appear on the landing page. */
  featured: boolean
  /** Optional preview image (path under /public). Rendered when present. */
  screenshot?: string
  /** Short domain label, e.g. "Logistics". */
  domain: string
  year: string
  /* ----- case-study body (same template for every project) ----- */
  /** Backend / system architecture write-up. */
  architecture: string
  /** Frontend ownership: UI decisions, state management, key interactions. */
  frontend: string
  /** Stack & key engineering decisions. */
  decisions: KeyPoint[]
  /** Challenges and the trade-offs made. */
  challenges: KeyPoint[]
  /** Outcome & impact narrative. */
  outcome: string
  links: { live?: string; repo?: string; docs?: string }
}

export type SkillGroup = {
  label: "Backend" | "Frontend" | "Infra & DevOps" | "Data"
  /** lucide icon key resolved in the TechStack component. */
  icon: "server" | "code" | "cloud" | "database"
  items: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  /** Impact-first bullets. */
  points: string[]
}

export type Stat = {
  value: number
  suffix: string
  label: string
}

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  // TODO: replace with your real name / details.
  name: "Mohammed Zaariri",
  role: "Full-Stack Engineer",
  /** Hero identity line — leads full-stack, backend depth shows in the work. */
  positioning:
    "Full-Stack Engineer · Backend-leaning · Remote (UTC+1 — overlaps EU & US-East)",
  /** One-sentence value prop. */
  valueProp:
    "I build complete products end-to-end — from the interface through the API to the database and deployment — with a backend engineer's eye for reliability, clean data modeling, and performance.",
  /** Longer about copy (2–3 sentences). */
  about:
    "I'm a full-stack engineer who likes owning a feature from the first Figma frame to the production dashboard that proves it works. My background is backend-heavy — data modeling, APIs, and the boring reliability work that keeps systems up — but I'm just as comfortable in a React codebase shipping accessible, fast interfaces. I care about systems that are simple to reason about and pleasant to use.",
  /** Remote availability note. */
  availability:
    "Available for remote roles. Based in UTC+1, with a working day that overlaps a full afternoon of EU hours and the US-East morning. Fluent, professional English — comfortable in async-first teams.",
  location: "Remote · UTC+1",
  email: "hello@example.com",
  /**
   * Contact-form backend. Paste a form endpoint here (e.g. Formspree
   * "https://formspree.io/f/xxxxxx" or Web3Forms) and the form POSTs to it
   * with inline success/error. Leave empty to fall back to a mailto: draft.
   */
  contactEndpoint: "",
  /** CV lives in /public — drop your real PDF at this path to swap it. */
  cv: "/cv.pdf",
  /** Photos live in /public/images — see README notes. Optional. */
  heroImage: "/images/profile.svg",
  aboutImage: "/images/profile.svg",
  socials: {
    github: "https://github.com/zaarirmoh",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
} as const

/** Rotating phrases for the animated hero title (typewriter). */
export const heroPhrases: string[] = [
  "Backend-leaning by default",
  "Remote · UTC+1 (EU & US-East)",
  "End-to-end product builder",
  "APIs, data & clean interfaces",
]

/* -------------------------------------------------------------------------- */
/*  Animated stat counters (About section)                                     */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "database tables modeled" },
  { value: 500, suffix: "+", label: "API endpoints shipped" },
  { value: 3, suffix: "", label: "production systems running" },
]

/* -------------------------------------------------------------------------- */
/*  Tech stack — Backend and Frontend kept deliberately balanced               */
/* -------------------------------------------------------------------------- */

export const techStack: SkillGroup[] = [
  {
    label: "Backend",
    icon: "server",
    items: [
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "REST",
      "GraphQL",
      "WebSockets",
      "Auth / OAuth2",
    ],
  },
  {
    label: "Frontend",
    icon: "code",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "shadcn/ui",
      "Vite",
      "React Router",
    ],
  },
  {
    label: "Infra & DevOps",
    icon: "cloud",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Terraform",
      "Nginx",
      "Grafana",
    ],
  },
  {
    label: "Data",
    icon: "database",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "Airflow", "Prisma"],
  },
]

/* -------------------------------------------------------------------------- */
/*  Experience — condensed, impact-first                                       */
/* -------------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Northwind Systems",
    period: "2023 — Present",
    location: "Remote",
    points: [
      "Led the rebuild of a distribution platform serving 1.2k daily users, cutting median order-entry time by 40% with a reworked React UI over a redesigned PostgreSQL schema.",
      "Owned the API layer end-to-end: 200+ endpoints behind a typed contract, p95 latency held under 200ms at 3× traffic growth.",
      "Mentored three engineers and introduced trunk-based delivery with CI gates, dropping mean time-to-merge from days to hours.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Lumen Labs",
    period: "2021 — 2023",
    location: "Remote",
    points: [
      "Shipped an AI bill-comparison SaaS from zero to first paying customers, building both the ingestion pipeline and the customer-facing dashboard.",
      "Designed an event-driven reconciliation service processing 50k documents/day with idempotent, replayable workers.",
      "Built a reusable component library in React + Tailwind adopted across three product surfaces.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Atlas IoT",
    period: "2019 — 2021",
    location: "On-site → Remote",
    points: [
      "Built the telemetry backend for a computer-vision platform ingesting 8M events/day from edge devices.",
      "Cut storage costs 35% by moving hot/cold data onto a tiered ClickHouse + S3 layout.",
      "Hardened the on-device sync protocol, taking field reliability from 92% to 99.9%.",
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Education & certifications                                                  */
/* -------------------------------------------------------------------------- */

export type Certification = {
  name: string
  issuer: string
  year: string
  /** Optional credential / verification link. */
  url?: string
}

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "University of Example",
  period: "2015 — 2019",
  detail:
    "Final-year project on fault-tolerant message delivery — a replicated queue that survives node loss without dropping messages.",
  honors: "Graduated with honors",
  /** Short chips shown under the degree. */
  focus: ["Distributed systems", "Databases", "Networking", "Algorithms"],
}

/** Placeholder certifications — swap for your real ones (or delete to hide). */
export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    url: "https://example.com",
  },
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
    url: "https://example.com",
  },
  {
    name: "PostgreSQL Professional Certification",
    issuer: "EDB",
    year: "2022",
  },
]

/* -------------------------------------------------------------------------- */
/*  Projects                                                                    */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    slug: "distribution-inventory-platform",
    name: "Distribution & Inventory Platform",
    problem:
      "Wholesale orders were entered by hand across spreadsheets, causing stockouts and slow fulfillment.",
    summary:
      "A full-stack platform that unifies catalog, inventory, and order entry for a regional distributor — from the warehouse React UI down to a normalized PostgreSQL core.",
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    metrics: [
      { label: "faster order entry", value: "40%", side: "frontend" },
      { label: "p95 API latency", value: "180ms", side: "backend" },
      { label: "normalized tables", value: "150+", side: "data" },
      { label: "uptime", value: "99.95%", side: "backend" },
    ],
    featured: true,
    screenshot: "/projects/distribution-inventory-platform.svg",
    domain: "Logistics",
    year: "2024",
    architecture:
      "A NestJS modular monolith fronts a normalized PostgreSQL schema (150+ tables) covering catalog, pricing, inventory ledgers, and orders. Inventory movements are stored as an append-only ledger rather than mutable counts, so any stock level is reproducible at a point in time. Redis backs hot reads (price lists, availability) and a small queue for label generation. Everything runs in Docker behind a single typed OpenAPI contract.",
    frontend:
      "The warehouse UI is a React + TypeScript SPA built for speed at a counter: keyboard-first order entry, optimistic updates via TanStack Query, and a virtualized catalog grid that stays smooth at 10k+ SKUs. State is split between server cache (TanStack Query) and a thin Redux slice for the active order. shadcn/ui + Tailwind keep the surface consistent and accessible, with full keyboard navigation for power users.",
    decisions: [
      {
        title: "Append-only inventory ledger",
        detail:
          "Chose an event-sourced ledger over mutable stock columns so corrections and audits never lose history. Current stock is a materialized view refreshed on write.",
      },
      {
        title: "TanStack Query as the data layer",
        detail:
          "Kept server state out of Redux entirely — caching, retries, and optimistic updates live in TanStack Query, leaving Redux for genuinely local UI state only.",
      },
      {
        title: "One typed contract",
        detail:
          "Generated TS types from the OpenAPI spec so the React client and NestJS server can never drift on a payload shape.",
      },
    ],
    challenges: [
      {
        title: "Concurrent stock writes",
        detail:
          "Two clerks fulfilling the same SKU could oversell. Solved with row-level locking on the ledger and a retry-with-backoff path surfaced as a gentle UI nudge rather than a hard error.",
      },
      {
        title: "Offline-ish counters",
        detail:
          "Warehouse Wi-Fi drops. The order form queues mutations locally and reconciles on reconnect, trading a little complexity for far fewer lost entries.",
      },
    ],
    outcome:
      "Order-entry time dropped ~40%, stockouts fell sharply once availability became real-time, and the team now trusts a single source of truth instead of five spreadsheets.",
    links: {
      live: "https://example.com",
      repo: "https://github.com/zaarirmoh",
      docs: "https://example.com/docs",
    },
  },
  {
    slug: "ai-bill-comparison-saas",
    name: "AI Bill-Comparison SaaS",
    problem:
      "Consumers overpay on utility bills because comparing tariffs means reading dense PDFs nobody reads.",
    summary:
      "A SaaS that ingests a user's bill, extracts the line items with an LLM pipeline, and shows a clear, interactive breakdown of cheaper alternatives — full-stack, from upload to dashboard.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Celery",
    ],
    metrics: [
      { label: "extraction accuracy", value: "97%", side: "data" },
      { label: "docs / day", value: "50k", side: "backend" },
      { label: "time-to-result (UI)", value: "<3s", side: "frontend" },
      { label: "avg. saving surfaced", value: "$220/yr", side: "data" },
    ],
    featured: true,
    screenshot: "/projects/ai-bill-comparison-saas.svg",
    domain: "FinTech · AI",
    year: "2023",
    architecture:
      "A FastAPI service accepts uploads and hands them to a Celery worker pool that runs OCR, an LLM extraction step, and a deterministic validation pass before persisting structured line items in PostgreSQL. The pipeline is idempotent and replayable — every document keeps its raw input so an improved model can re-process history. A pricing engine then matches extracted usage against a tariff catalog.",
    frontend:
      "The dashboard is a React + TypeScript SPA. Uploads stream progress over WebSockets so the user sees parsing happen live instead of staring at a spinner. Redux Toolkit holds the multi-step comparison wizard state; charts are rendered with an accessible, theme-aware component set. The result view is fully responsive and readable on a phone, where most bills are photographed.",
    decisions: [
      {
        title: "LLM + deterministic validator",
        detail:
          "The model proposes structured fields; a rules layer rejects anything that doesn't reconcile to the bill total. This bounded the LLM's failure modes and pushed accuracy to 97%.",
      },
      {
        title: "Keep raw inputs forever",
        detail:
          "Storing the original document made the pipeline replayable, so model upgrades retroactively improve old results with no user action.",
      },
      {
        title: "WebSocket progress",
        detail:
          "Parsing can take a few seconds; live progress over WebSockets cut perceived wait and support tickets about 'stuck' uploads.",
      },
    ],
    challenges: [
      {
        title: "Wildly varied PDFs",
        detail:
          "Every provider formats bills differently. A template-free, LLM-first approach generalized far better than the brittle regex parsers we started with.",
      },
      {
        title: "Cost per document",
        detail:
          "LLM calls aren't free at 50k/day. Caching by document hash and a cheap pre-filter for already-seen layouts kept inference spend flat as volume grew.",
      },
    ],
    outcome:
      "Reached first paying customers within a quarter; the average surfaced saving of ~$220/year became the headline conversion driver, and the replayable pipeline meant each model upgrade lifted accuracy across the whole history.",
    links: {
      live: "https://example.com",
      repo: "https://github.com/zaarirmoh",
      docs: "https://example.com/docs",
    },
  },
  {
    slug: "iot-vision-system",
    name: "IoT Vision System",
    problem:
      "A retail chain had no reliable, real-time view of shelf availability across hundreds of stores.",
    summary:
      "An edge-to-cloud computer-vision platform: cameras detect empty shelves on-device and stream events to a backend that turns 8M daily signals into actionable alerts.",
    stack: ["Python", "FastAPI", "ClickHouse", "Kafka", "React", "Grafana"],
    metrics: [
      { label: "events / day", value: "8M", side: "backend" },
      { label: "edge reliability", value: "99.9%", side: "backend" },
      { label: "storage saved", value: "35%", side: "data" },
      { label: "alert latency", value: "<5s", side: "backend" },
    ],
    featured: true,
    screenshot: "/projects/iot-vision-system.svg",
    domain: "IoT · Computer Vision",
    year: "2022",
    architecture:
      "Inference runs on-device; only compact detection events leave the camera, flowing through Kafka into a stream processor that aggregates by store and shelf. Hot events land in ClickHouse for sub-second analytical queries, with older raw data tiered to object storage. FastAPI exposes the query and alerting API; an ops React dashboard visualizes availability and trends.",
    frontend:
      "An operations dashboard in React surfaces a live store grid, drill-down shelf views, and trend charts. It leans on TanStack Query for polling-free live updates and a virtualized table for the long tail of stores. The UI is built so a regional manager on a tablet sees the same clear signal as an analyst on a wide monitor.",
    decisions: [
      {
        title: "Push inference to the edge",
        detail:
          "Sending only events — not video — slashed bandwidth and made the system viable over ordinary store connections.",
      },
      {
        title: "ClickHouse for hot analytics",
        detail:
          "Column storage made 'empty-shelf minutes by store this week' a sub-second query instead of a batch job.",
      },
      {
        title: "Tiered hot/cold storage",
        detail:
          "Aging raw events to S3 cut storage spend 35% while keeping recent data instantly queryable.",
      },
    ],
    challenges: [
      {
        title: "Flaky field connectivity",
        detail:
          "Edge devices lose network constantly. A store-and-forward buffer with idempotent ingestion took end-to-end reliability from 92% to 99.9%.",
      },
      {
        title: "Alert noise",
        detail:
          "Raw detections were too jittery to alert on. Time-windowed aggregation turned flickering signals into trustworthy, low-noise alerts.",
      },
    ],
    outcome:
      "Store teams get empty-shelf alerts within seconds, lost-sales from stockouts dropped measurably, and the platform now scales to new stores by shipping a camera, not a server.",
    links: {
      live: "https://example.com",
      repo: "https://github.com/zaarirmoh",
    },
  },
  {
    slug: "realtime-collab-workspace",
    name: "Realtime Collaboration Workspace",
    problem:
      "Distributed teams needed a shared planning canvas where edits appear instantly without conflicts.",
    summary:
      "A full-stack collaborative workspace with live multiplayer editing — a CRDT-backed sync engine on the backend and a fluid, presence-aware React canvas on the front.",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "Node.js",
      "WebSockets",
      "Redis",
      "PostgreSQL",
    ],
    metrics: [
      { label: "sync latency", value: "<80ms", side: "backend" },
      { label: "concurrent editors", value: "200+", side: "backend" },
      { label: "frame rate (UI)", value: "60fps", side: "frontend" },
      { label: "conflict rate", value: "0", side: "data" },
    ],
    featured: true,
    screenshot: "/projects/realtime-collab-workspace.svg",
    domain: "Productivity",
    year: "2024",
    architecture:
      "A Node.js WebSocket gateway fans out document operations through Redis pub/sub so any server can serve any room. Documents are CRDTs, so concurrent edits merge deterministically without a central lock; snapshots are persisted to PostgreSQL for durability and fast room loads. Presence and cursors ride a lightweight ephemeral channel separate from the durable document stream.",
    frontend:
      "The canvas is a React + TypeScript app tuned for 60fps under constant remote updates. Local state lives in Zustand, decoupled from the network layer so the UI never blocks on a socket. Remote cursors, selections, and presence avatars animate with Framer Motion; optimistic local edits apply instantly and reconcile when the authoritative op returns. Everything is keyboard accessible and theme-aware.",
    decisions: [
      {
        title: "CRDTs over operational transform",
        detail:
          "CRDTs gave conflict-free merges without a central authority, which kept the server simple and made offline edits reconcile cleanly.",
      },
      {
        title: "Split durable vs. ephemeral channels",
        detail:
          "Cursors and presence are high-frequency but disposable, so they bypass persistence entirely — keeping the durable write path lean.",
      },
      {
        title: "Zustand, not Redux, on the canvas",
        detail:
          "The hot path needed minimal-overhead updates many times per second; a tiny Zustand store beat the ceremony of Redux here.",
      },
    ],
    challenges: [
      {
        title: "Keeping 60fps under load",
        detail:
          "Naive re-renders tanked the frame rate with 200 editors. Batching remote ops per animation frame and memoizing the render tree held it at 60fps.",
      },
      {
        title: "Horizontal scaling of rooms",
        detail:
          "A single server couldn't hold every room. Redis pub/sub made servers stateless so rooms rebalance freely behind a load balancer.",
      },
    ],
    outcome:
      "Teams plan together in real time with no perceptible lag and zero merge conflicts; the stateless design lets the service scale rooms horizontally without sticky sessions.",
    links: {
      live: "https://example.com",
      repo: "https://github.com/zaarirmoh",
      docs: "https://example.com/docs",
    },
  },
  {
    slug: "payments-reconciliation-service",
    name: "Payments Reconciliation Service",
    problem:
      "Finance closed the books late every month because gateway payouts never matched internal orders cleanly.",
    summary:
      "An event-driven service that reconciles payment-gateway settlements against internal orders automatically, flagging only the genuine exceptions.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Kafka", "Airflow"],
    metrics: [
      { label: "auto-matched", value: "98.5%", side: "data" },
      { label: "monthly close", value: "−4 days", side: "data" },
      { label: "throughput", value: "50k/day", side: "backend" },
    ],
    featured: false,
    screenshot: "/projects/payments-reconciliation-service.svg",
    domain: "FinTech",
    year: "2023",
    architecture:
      "Settlement files and internal order events stream through Kafka into idempotent matching workers. A deterministic rules engine matches on amount, reference, and time window, escalating only true mismatches to a review queue. Airflow orchestrates daily settlement imports and a nightly integrity check; PostgreSQL stores the immutable match ledger.",
    frontend:
      "A lightweight exceptions console (React + TypeScript) lets finance review only the unmatched tail. It favors dense, scannable tables, saved filters, and one-click resolution actions — built for speed of triage rather than visual flourish.",
    decisions: [
      {
        title: "Idempotent, replayable workers",
        detail:
          "Every match is keyed so re-processing a settlement file can never double-count — essential for financial correctness.",
      },
      {
        title: "Escalate exceptions only",
        detail:
          "Auto-matching the 98.5% removed the busywork and let humans focus on the genuinely ambiguous 1.5%.",
      },
    ],
    challenges: [
      {
        title: "Fuzzy references",
        detail:
          "Gateways mangle reference fields. A tiered matcher (exact → normalized → windowed-amount) recovered most of the messy long tail.",
      },
      {
        title: "Auditability",
        detail:
          "Finance needs to trust every match. An immutable ledger with full lineage made each decision explainable on demand.",
      },
    ],
    outcome:
      "Auto-matching hit 98.5%, pulling four days out of the monthly close and turning reconciliation from a dreaded chore into a quick exception review.",
    links: {
      repo: "https://github.com/zaarirmoh",
      docs: "https://example.com/docs",
    },
  },
  {
    slug: "developer-analytics-dashboard",
    name: "Developer Analytics Dashboard",
    problem:
      "Engineering leads had no shared view of delivery health — data lived in five disconnected tools.",
    summary:
      "A full-stack analytics dashboard that pulls signals from Git, CI, and incident tools into one fast, drill-downable view of delivery health.",
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Node.js",
      "GraphQL",
      "ClickHouse",
    ],
    metrics: [
      { label: "data sources unified", value: "5", side: "data" },
      { label: "dashboard load", value: "<1s", side: "frontend" },
      { label: "metrics tracked", value: "30+", side: "data" },
    ],
    featured: false,
    screenshot: "/projects/developer-analytics-dashboard.svg",
    domain: "Developer Tools",
    year: "2022",
    architecture:
      "Connectors pull from Git, CI, and incident APIs on a schedule into ClickHouse, where DORA-style metrics are computed as materialized views. A Node.js GraphQL gateway lets the client ask for exactly the slices it needs, keeping payloads tight and queries fast.",
    frontend:
      "A React + TypeScript dashboard with composable, drill-downable charts. TanStack Query handles caching and background refresh so panels feel instant; URL-synced filters make any view shareable. Layout is responsive from a lead's laptop to a wall-mounted team display, and fully theme-aware.",
    decisions: [
      {
        title: "GraphQL for flexible slices",
        detail:
          "Dashboards ask for many different cuts of the same data; GraphQL avoided a sprawl of bespoke REST endpoints.",
      },
      {
        title: "Pre-compute in ClickHouse",
        detail:
          "Materialized views turned heavy aggregations into sub-second reads, keeping the dashboard under a one-second load.",
      },
    ],
    challenges: [
      {
        title: "Inconsistent source data",
        detail:
          "Each tool models 'a deploy' differently. A normalization layer mapped them to a shared event schema before metrics were computed.",
      },
      {
        title: "Shareable state",
        detail:
          "Leads wanted to send a link to an exact view. Encoding filters in the URL made every drill-down bookmarkable and shareable.",
      },
    ],
    outcome:
      "Engineering leads finally share one source of truth for delivery health; weekly reviews that used to mean stitching five tabs together now start from a single, fast dashboard.",
    links: {
      live: "https://example.com",
      repo: "https://github.com/zaarirmoh",
    },
  },
]

/* -------------------------------------------------------------------------- */
/*  Derived helpers                                                             */
/* -------------------------------------------------------------------------- */

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Unique, sorted list of every tag across all projects (for the filter UI). */
export const allTags: string[] = Array.from(
  new Set(projects.flatMap((p) => p.stack)),
).sort((a, b) => a.localeCompare(b))
