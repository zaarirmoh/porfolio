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
  /** Flat list of tech tags — powers the card pills. */
  stack: string[]
  /** Hard numbers. Cards surface the first one; detail page shows them all. */
  metrics: Metric[]
  /** Featured projects appear on the landing page. */
  featured: boolean
  /**
   * Preview images (paths under /public). The first is the card thumbnail;
   * the detail page shows them all in a carousel. Empty/undefined → a
   * branded placeholder is rendered instead.
   */
  screenshots?: string[]
  /** Short domain label, e.g. "Logistics". */
  domain: string
  year: string
  /* ----- case-study body — every field optional so a project can be
     as light or as deep as its real detail allows ----- */
  /** Backend / system architecture write-up. */
  architecture?: string
  /** Frontend ownership: UI decisions, state management, key interactions. */
  frontend?: string
  /** Stack & key engineering decisions. */
  decisions?: KeyPoint[]
  /** Challenges and the trade-offs made. */
  challenges?: KeyPoint[]
  /** Outcome & impact narrative. */
  outcome?: string
  links: { live?: string; repo?: string; docs?: string }
}

export type SkillGroup = {
  label:
    | "Backend"
    | "Frontend"
    | "Databases"
    | "DevOps & Infra"
    | "Mobile"
    | "Testing & API"
  /** lucide icon key resolved in the TechStack component. */
  icon: "server" | "code" | "database" | "cloud" | "mobile" | "testing"
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
  name: "Mohamed Rayan Zaarir",
  role: "Full-Stack Engineer",
  /** Hero identity line — leads full-stack, backend depth shows in the work. */
  positioning:
    "Mohamed Rayan Zaarir — Full-Stack Engineer specializing in scalable backend architecture and modern web applications, based in Algeria (UTC+1)",
  /** One-sentence value prop. */
  valueProp:
    "I design and build production-grade web platforms end to end: normalized PostgreSQL schemas, high-throughput REST APIs, modern React and Next.js interfaces, and the Docker and CI/CD pipelines that ship them. Backend architecture and scalable system design are my specialty, and I own features all the way from the database to the deployed UI.",
  /** Longer about copy (2–3 sentences). */
  about:
    "I'm a full-stack engineer based in Algeria, currently completing a Master's in Computer Science at ESI-SBA with a focus on software engineering and system design. Over the past three years I've shipped production platforms for real clients, from distribution and inventory systems to financial workflows and real-time collaboration tools, owning each one from the database schema and API up to the deployed interface. Backend architecture is where I go deepest, and I care about clean, SOLID design, well-modeled data, and systems that stay fast and maintainable as they grow.",
  /** Availability note. */
  availability:
    "Open to new opportunities, whether fully remote or on-site and hybrid in Algeria. I'm comfortable working in async, English-speaking teams, and can collaborate in French and Arabic too.",
  location: "Algeria (UTC+1)",
  email: "zaarirmo07@gmail.com",
  /**
   * Web3Forms access key (free, from https://web3forms.com — enter your
   * email and copy the key). When set, the contact form POSTs to Web3Forms
   * and messages land in your inbox. Leave empty to fall back to a mailto: draft.
   */
  web3formsAccessKey: "13868ad8-0c74-44f2-999e-ff6d78228955",
  /** CV lives in /public — drop your real PDF at this path to swap it. */
  cv: "/Mohamed_Rayan_Zaarir_CV.pdf",
  /** Filename the browser saves the CV as when downloaded. */
  cvFileName: "Mohamed_Rayan_Zaarir_CV.pdf",
  /** Photos live in /public/images — see README notes. Optional. */
  heroImage: "/images/profile-hero.jpg",
  aboutImage: "/images/profile-about.jpg",
  socials: {
    github: "https://github.com/zaarirmoh",
    linkedin: "https://www.linkedin.com/in/mohamed-zaarir-b24573265/",
  },
} as const

/** Rotating phrases for the animated hero title (typewriter). */
export const heroPhrases: string[] = [
  "Scalable backend architecture",
  "Modern React & Next.js interfaces",
  "Dockerized, CI/CD-driven delivery",
]

/* -------------------------------------------------------------------------- */
/*  Animated stat counters (About section)                                     */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "years building software" },
  { value: 5, suffix: "+", label: "full-stack platforms shipped" },
  { value: 500, suffix: "+", label: "API endpoints built" },
]

/* -------------------------------------------------------------------------- */
/*  Tech stack — Backend and Frontend kept deliberately balanced               */
/* -------------------------------------------------------------------------- */

export const techStack: SkillGroup[] = [
  {
    label: "Backend",
    icon: "server",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST",
      "WebSockets",
      "Celery",
      "JWT",
    ],
  },
  {
    label: "Frontend",
    icon: "code",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit",
      "TanStack Query",
    ],
  },
  {
    label: "Databases",
    icon: "database",
    items: ["PostgreSQL", "Redis", "SQLite", "MongoDB"],
  },
  {
    label: "DevOps & Infra",
    icon: "cloud",
    items: [
      "Docker",
      "Nginx",
      "Gunicorn",
      "GitLab CI/CD",
      "DigitalOcean",
      "Linux",
      "Git",
    ],
  },
  {
    label: "Mobile",
    icon: "mobile",
    items: ["Kotlin", "Jetpack Compose"],
  },
  {
    label: "Testing & API",
    icon: "testing",
    items: ["pytest", "Postman", "Swagger / OpenAPI"],
  },
]

/* -------------------------------------------------------------------------- */
/*  Experience — condensed, impact-first                                       */
/* -------------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    role: "Backend Engineer",
    company: "Originova",
    period: "Aug 2025 — Present",
    location: "Remote",
    points: [
      "Architected and shipped the Yassir Distribution Management System, a large-scale distribution and inventory platform serving up to 1,000 concurrent users across five operational roles.",
      "Designed a highly normalized PostgreSQL schema of 150+ tables and built 500+ REST API endpoints powering desktop and mobile apps, covering inventory, financial accounting, supplier and client ledgers, rentals, and audit logging.",
      "Implemented complex financial workflows (credit, debt tracking, automated ledgers, payment reconciliation) and asynchronous pipelines with Celery and Redis, deployed on DigitalOcean with Docker, Nginx, Gunicorn, and GitLab CI/CD.",
    ],
  },
  {
    role: "Full-Stack Engineer · Freelance",
    company: "Lift & Cable Installation Co.",
    period: "Oct 2025 — Dec 2025",
    location: "Freelance · Remote",
    points: [
      "Built a complete enterprise management platform with Django REST Framework, React, and TypeScript, covering the full project lifecycle from client registration and verification to employee assignment and maintenance scheduling.",
      "Designed inventory management with real-time stock tracking, reorder alerts, and profit-margin calculations, plus a flexible multi-line invoicing system with product integration.",
      "Added an interactive scheduling calendar and an analytics dashboard for financial and operational insights, secured with JWT auth and role-based access control.",
    ],
  },
  {
    role: "Network Engineering Intern",
    company: "Algérie Télécom",
    period: "Jul 2025 — Aug 2025",
    location: "On-site · Algeria",
    points: [
      "Worked on enterprise networking infrastructure: routing, switching, LAN/WAN configuration, and firewall basics.",
      "Helped diagnose multi-site connectivity issues across the network.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "University FYP Platform",
    period: "Mar 2025 — Jun 2025",
    location: "Remote",
    points: [
      "Designed and built a platform managing 60+ projects and 200+ users, handling the full final-year-project lifecycle.",
      "Built the backend with Django and DRF alongside the frontend interfaces, with real-time collaboration powered by Django Channels and Redis.",
      "Delivered a modular, containerized architecture with Docker and full API documentation via Swagger (drf-yasg).",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "State Library of Tisemsilt",
    period: "Jan 2025 — Mar 2025",
    location: "Remote",
    points: [
      "Engineered a full-stack platform serving thousands of monthly users for the official state library.",
      "Integrated the PMB library system through JRPC web services and cut response times by 40% with Redis caching.",
      "Delivered scalable infrastructure with Django, PostgreSQL, Redis, and Docker.",
    ],
  },
  {
    role: "Full-Stack Engineer · Mobile & Backend",
    company: "Lotok",
    period: "Jan 2024 — Jun 2024",
    location: "Remote",
    points: [
      "Developed backend services for authentication, booking, and car management on a car-rental platform.",
      "Built the Android app with Kotlin and Jetpack Compose, integrating Google and Facebook sign-in.",
      "Containerized services for seamless frontend-to-backend integration.",
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Education                                                                  */
/* -------------------------------------------------------------------------- */

export const education = {
  degree: "Engineering & Master's Degree in Computer Science",
  school: "Higher National School of Computer Science (ESI-SBA), Sidi Bel Abbès",
  period: "2022 — 2027",
  detail:
    "Specializing in Software Engineering and System Design, with coursework spanning distributed systems, scalable architectures, embedded systems, IoT, and networking.",
  /** Short chips shown under the degree. */
  focus: [
    "Software Engineering",
    "System Design",
    "Distributed Systems",
    "Embedded Systems",
    "IoT",
    "Networking",
  ],
}

export const baccalaureate = {
  title: "Baccalaureate",
  school: "Kritli Mokhtar High School, Blida",
  period: "2022",
  score: "17.60 / 20",
  detail: "Graduated first in the city of Blida with distinction.",
  highlight: "Ranked 1st in the city",
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                    */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    slug: "yassir-distribution-platform",
    screenshots: ["/projects/yassir-architecture.svg", "/projects/yassir-swagger.png", "/projects/yassir-pipeline.png"],
    name: "Yassir Distribution & Inventory Platform",
    problem:
      "A regional distribution operation ran orders, stock, and finances across disconnected tools, with no reliable real-time view of inventory or money owed across its different roles.",
    summary:
      "A large-scale distribution and inventory management platform for Yassir, serving up to 1,000 concurrent users across five operational roles, with deep financial workflows and full inventory traceability.",
    stack: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Nginx",
      "GitLab CI/CD",
      "DigitalOcean",
    ],
    metrics: [
      { label: "concurrent users", value: "1,000", side: "backend" },
      { label: "PostgreSQL tables", value: "150+", side: "data" },
      { label: "REST API endpoints", value: "500+", side: "backend" },
      { label: "operational roles", value: "5", side: "backend" },
    ],
    featured: true,
    domain: "Logistics · ERP",
    year: "2025",
    architecture:
      "A Django and Django REST Framework backend sits over a highly normalized PostgreSQL schema of 150+ tables, covering inventory control, financial accounting, supplier and client ledgers, rentals, penalties, and audit logging. Redis and Celery (with Celery Beat) run scheduled jobs, financial calculations, and background processing off the request path. Everything is containerized with Docker and deployed on DigitalOcean behind Nginx and Gunicorn, with GitLab CI/CD pipelines for delivery.",
    decisions: [
      {
        title: "Highly normalized 150+ table schema",
        detail:
          "Modeled inventory, accounting, ledgers, rentals, and audit logging into a normalized PostgreSQL schema so every stock level and balance stays consistent and auditable.",
      },
      {
        title: "Async pipelines with Celery + Redis",
        detail:
          "Moved financial calculations and scheduled jobs into Celery workers backed by Redis, keeping the API responsive while heavy work runs in the background.",
      },
      {
        title: "Batch-level inventory traceability",
        detail:
          "Tracked stock at batch level with expiry monitoring, stock transfers, and automated alerts, so inventory movements can be traced and reconciled over time.",
      },
    ],
    challenges: [
      {
        title: "Keeping financial state correct under load",
        detail:
          "Credit management, debt tracking, automated ledger entries, and payment reconciliation had to stay correct while many users acted at once. A ledger-based accounting model and async reconciliation kept balances trustworthy.",
      },
      {
        title: "Serving 1,000 concurrent users",
        detail:
          "Supporting a thousand concurrent users across five roles meant offloading heavy work to background workers and caching hot reads in Redis to hold latency down.",
      },
    ],
    outcome:
      "Replaced a patchwork of tools with a single platform for a 1,000-user distribution operation, with traceable inventory, reliable financial workflows, and changes shipped through GitLab CI/CD.",
    links: { docs: "https://51.254.104.61/swagger/" },
  },
  {
    slug: "lift-cable-platform",
    screenshots: ["/projects/management-1.png", "/projects/management-2.png", "/projects/management-3.png", "/projects/management-4.png", "/projects/management-5.png"],
    name: "Lift & Cable Management Platform",
    problem:
      "A lift and cable installation company tracked projects, inventory, and invoicing by hand, with nothing tying clients, jobs, stock, and finances together.",
    summary:
      "A complete enterprise management platform for a lift and cable installation company, covering the full project lifecycle, inventory, invoicing, scheduling, and analytics.",
    stack: [
      "Django REST Framework",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "JWT",
    ],
    metrics: [],
    featured: true,
    domain: "Enterprise · ERP",
    year: "2025",
    architecture:
      "A Django REST Framework backend models the full project lifecycle: client registration, project creation, verification workflows, employer assignment, and maintenance scheduling. Inventory is tracked in real time with reorder alerts and profit-margin calculations, and a flexible multi-line invoicing system ties products to financial tracking. Access is secured with JWT authentication and role-based access control.",
    frontend:
      "A React and TypeScript front end with Tailwind CSS, including an interactive scheduling and maintenance calendar with advanced filtering, and an analytics dashboard surfacing financial and operational insights.",
    decisions: [
      {
        title: "One system for the whole lifecycle",
        detail:
          "Unified client registration, projects, verification, employer assignment, and maintenance into a single workflow instead of separate, disconnected tools.",
      },
      {
        title: "Real-time inventory with margins",
        detail:
          "Stock tracking with reorder alerts and profit-margin calculations so operations and finance read from the same source of truth.",
      },
      {
        title: "JWT + role-based access",
        detail:
          "Secured the platform with JWT auth and RBAC so each role only sees and does what it should.",
      },
    ],
    challenges: [
      {
        title: "Flexible multi-line invoicing",
        detail:
          "Invoices had to combine multiple products and line items while staying tied to financial tracking. A flexible invoice model handled varied billing without bespoke code per case.",
      },
      {
        title: "Scheduling teams can trust",
        detail:
          "Project and maintenance planning needed an interactive calendar with advanced filtering so teams could plan and re-plan quickly.",
      },
    ],
    outcome:
      "Replaced manual project and invoice tracking with one platform spanning clients, jobs, inventory, invoicing, scheduling, and analytics.",
    links: { live: "http://5.135.241.51/" },
  },
  {
    slug: "state-library-tisemsilt",
    screenshots: ["/projects/library-1.PNG", "/projects/library-2.PNG", "/projects/library-3.PNG", "/projects/library-4.PNG", "/projects/library-5.PNG", "/projects/library-6.PNG", "/projects/library-7.PNG", "/projects/library-8.PNG", "/projects/library-9.PNG"],
    name: "State Library Platform — Tisemsilt",
    problem:
      "The official state library needed a modern, fast platform for thousands of monthly users, working with its existing PMB library system rather than replacing it.",
    summary:
      "A full-stack platform for the official State Library of Tisemsilt, serving thousands of monthly users and integrating with the PMB library system.",
    stack: ["Django", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: "faster via Redis caching", value: "40%", side: "backend" },
      { label: "monthly users", value: "1,000s", side: "backend" },
    ],
    featured: true,
    domain: "Public Sector",
    year: "2025",
    architecture:
      "A Django backend over PostgreSQL, integrated with the library's existing PMB system through JRPC web services. Redis caching cut response times by 40%, and the platform is containerized with Docker for scalable, reproducible deployment.",
    frontend:
      "A public-facing interface for thousands of monthly library users, built to stay fast under load.",
    decisions: [
      {
        title: "Integrate, don't replace",
        detail:
          "Connected to the library's existing PMB system over JRPC web services instead of rebuilding it, meeting users where their data already lived.",
      },
      {
        title: "Redis caching for speed",
        detail:
          "Cached hot reads in Redis, cutting response times by 40% for a public audience of thousands.",
      },
    ],
    challenges: [
      {
        title: "Bridging a legacy system",
        detail:
          "PMB's JRPC interface had to be wrapped cleanly so the new platform could serve its data reliably to the public.",
      },
    ],
    outcome:
      "Delivered a fast, scalable public platform for the state library, 40% quicker after Redis caching and integrated with its existing catalog.",
    links: { live: "https://bplptissemsilt.dz/" },
  },
  {
    slug: "encash",
    screenshots: ["/projects/enercash-1.png", "/projects/enercash-2.png", "/projects/enercash-3.png", "/projects/enercash-4.png", "/projects/enercash-5.png", "/projects/enercash-6.png", "/projects/enercash-7.png", "/projects/enercash-8.png"],
    name: "Encash",
    problem:
      "Households in France routinely overpay for electricity because comparing providers means decoding a dense bill and second-guessing which tariff actually fits their usage.",
    summary:
      "A web app for a French company where users upload their electricity bill, OCR pulls out the details, and the app recommends the best-value electricity provider for their real consumption. Fully bilingual in French and English.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "i18next",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Google Vision OCR",
      "JWT",
    ],
    metrics: [],
    featured: true,
    domain: "Energy · SaaS",
    year: "2026",
    architecture:
      "A FastAPI backend handles authentication, bill uploads, OCR extraction, and provider recommendation, using PostgreSQL for core relational data and MongoDB (via the Beanie ODM) for flexible document storage like parsed bills. Uploaded bills run through Google Cloud Vision OCR to extract the text, which is parsed for consumption and tariff details and matched against a catalog of electricity providers to surface the best-value option.",
    frontend:
      "A React and TypeScript SPA with Redux Toolkit for state and Tailwind CSS with shadcn/ui for the interface. It's internationalized with i18next so the whole app works in both French and English, and talks to the API through Axios.",
    decisions: [
      {
        title: "OCR-driven bill intake",
        detail:
          "Users upload a photo or PDF of their bill and Google Cloud Vision OCR extracts the text, which is parsed into consumption and tariff details, so there's nothing to type in by hand.",
      },
      {
        title: "Bilingual from day one",
        detail:
          "Built for a French audience, the app is fully internationalized with i18next so it works seamlessly in French and English.",
      },
      {
        title: "Recommendation over a provider catalog",
        detail:
          "Extracted consumption is matched against a catalog of electricity providers to recommend the best-value option for each user.",
      },
    ],
    challenges: [
      {
        title: "Reading varied bill formats",
        detail:
          "Electricity bills differ from one provider to the next, so the OCR and parsing layer has to reliably pull the same fields from inconsistent layouts.",
      },
    ],
    links: { live: "https://enercash.vercel.app/" },
  },
  {
    slug: "university-fyp-platform",
    screenshots: ["/projects/pfe-1.jpg", "/projects/pfe-2.png", "/projects/pfe-3.png", "/projects/pfe-4.png", "/projects/pfe-5.png", "/projects/pfe-6.png"],
    name: "Final-Year Project Management Platform",
    problem:
      "Running final-year projects across many students and supervisors meant scattered spreadsheets and email, with no shared place to track a project through its lifecycle.",
    summary:
      "A university platform managing 60+ final-year projects and 200+ users through the full project lifecycle, with real-time collaboration.",
    stack: [
      "Django",
      "Django REST Framework",
      "Django Channels",
      "Redis",
      "React",
      "Docker",
      "Swagger / OpenAPI",
    ],
    metrics: [
      { label: "projects managed", value: "60+", side: "data" },
      { label: "users", value: "200+", side: "backend" },
    ],
    featured: false,
    domain: "EdTech",
    year: "2025",
    architecture:
      "A Django and DRF backend manages the full final-year-project lifecycle for 60+ projects and 200+ users. Real-time collaboration is powered by Django Channels over Redis, and the system runs as a modular, containerized architecture with Docker. The API is fully documented with Swagger via drf-yasg.",
    frontend:
      "Interfaces for students and supervisors to move projects through each stage, with live updates so collaborators see changes as they happen.",
    decisions: [
      {
        title: "Real-time over Channels + Redis",
        detail:
          "Used Django Channels with a Redis layer so project updates appear live, without polling.",
      },
      {
        title: "Documented API with Swagger",
        detail:
          "Generated full API docs with drf-yasg so the frontend and any integrators always work against a current contract.",
      },
      {
        title: "Containerized from the start",
        detail:
          "Packaged the system with Docker for a modular, reproducible setup across environments.",
      },
    ],
    challenges: [
      {
        title: "Coordinating several roles",
        detail:
          "Students, supervisors, and admins needed different views over the same projects; the data model and permissions kept each role's workflow clean.",
      },
    ],
    outcome:
      "Gave a department one place to run 60+ final-year projects for 200+ users, with live collaboration replacing scattered spreadsheets and email.",
    links: { repo: "https://github.com/zaarirmoh/PFE" },
  },
  {
    slug: "lotok-car-rental",
    screenshots: ["/projects/lotok-1.png", "/projects/lotok-2.jpg", "/projects/lotok-3.png", "/projects/lotok-4.png", "/projects/lotok-5.png", "/projects/lotok-6.png"],
    name: "Lotok — Car Rental Platform",
    problem:
      "A car-rental service needed a mobile app and backend for browsing, booking, and managing cars, with quick, low-friction sign-in.",
    summary:
      "A car-rental platform with a native Android app and backend services for authentication, booking, and car management.",
    stack: ["Kotlin", "Jetpack Compose", "Django", "PostgreSQL", "Docker"],
    metrics: [],
    featured: false,
    domain: "Mobile · Marketplace",
    year: "2024",
    architecture:
      "Backend services handle authentication, booking, and car management, with Google and Facebook sign-in integrated. Services are containerized for clean frontend-to-backend integration.",
    frontend:
      "A native Android app built with Kotlin and Jetpack Compose for browsing cars, booking, and managing rentals.",
    decisions: [
      {
        title: "Native Android with Compose",
        detail:
          "Built the app in Kotlin with Jetpack Compose for a modern, declarative UI.",
      },
      {
        title: "Social sign-in",
        detail:
          "Integrated Google and Facebook authentication to lower the barrier to a first booking.",
      },
    ],
    challenges: [
      {
        title: "Smooth mobile-to-backend flow",
        detail:
          "Containerized services kept the app and backend in sync across environments for reliable booking flows.",
      },
    ],
    outcome:
      "Shipped a car-rental Android app backed by booking and car-management services, with social sign-in for quick onboarding.",
    links: { repo: "https://github.com/zaarirmoh/Lotok" },
  },
  {
    slug: "smart-shopping-cart",
    screenshots: ["/projects/smart-cart-architecture.svg"],
    name: "Smart Shopping Cart",
    problem:
      "Supermarket checkout is slow: shoppers queue while a cashier scans every item one by one, and there's no view of a cart's contents until they reach the till.",
    summary:
      "An IoT smart shopping cart that recognizes items as they're added using an ESP32-CAM and an object-detection model, shows a live total on an on-cart screen, and lets shoppers check out in seconds by scanning the cart's RFID tag.",
    stack: [
      "ESP32-CAM",
      "MQTT",
      "YOLOv8",
      "Computer Vision",
      "Python",
      "RFID",
      "React",
    ],
    metrics: [],
    featured: false,
    domain: "IoT · Computer Vision",
    year: "2026",
    architecture:
      "Each cart carries an ESP32-CAM that streams video to a central in-store server, where a YOLOv8 object-detection model identifies items as they're added. The cart has an LCD screen showing the running list and total, a button to switch modes, and indicator lights for feedback; devices talk to the server over MQTT. That same central server also hosts the cashier and admin backends and frontends. Every cart carries an RFID tag, so at checkout the cashier scans the tag to pull up the cart and everything in it, then takes payment by card or cash.",
    frontend:
      "Cashier and admin web interfaces (React) run on the store's central server. The cashier view shows a scanned cart's contents for a one-scan checkout, while the admin side manages the catalog and operations.",
    decisions: [
      {
        title: "Detection at the edge, model on the server",
        detail:
          "The ESP32-CAM streams to a central server that runs a YOLOv8 object-detection model, keeping the cart hardware cheap while centralizing the heavy compute.",
      },
      {
        title: "MQTT for device messaging",
        detail:
          "Carts and server communicate over MQTT, a lightweight protocol well-suited to many constrained IoT devices at once.",
      },
      {
        title: "RFID for instant checkout",
        detail:
          "Each cart's RFID tag lets the cashier pull up its full contents with a single scan instead of re-scanning every item, with card and cash payment supported.",
      },
    ],
    challenges: [
      {
        title: "One responsive device from many parts",
        detail:
          "Coordinating the ESP32-CAM, LCD screen, mode button, and indicator lights into a single responsive cart took careful firmware and messaging.",
      },
      {
        title: "Detecting items in real conditions",
        detail:
          "Items are added in varied lighting and angles, so the object-detection model and the video stream had to stay accurate outside of ideal conditions.",
      },
    ],
    outcome:
      "Delivered a working end-to-end smart-cart flow: items detected on the cart, a live total on the on-cart screen, and a one-scan RFID checkout with card and cash payment.",
    links: {},
  },
]

/* -------------------------------------------------------------------------- */
/*  Derived helpers                                                             */
/* -------------------------------------------------------------------------- */

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
