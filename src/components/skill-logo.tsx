import {
  siApacheairflow,
  siApachekafka,
  siClickhouse,
  siDocker,
  siFastapi,
  siGithubactions,
  siGrafana,
  siGraphql,
  siKubernetes,
  siNestjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReactrouter,
  siReactquery,
  siRedis,
  siRedux,
  siShadcnui,
  siTailwindcss,
  siTerraform,
  siTypescript,
  siVite,
  siDjango,
  siNextdotjs,
  siJavascript,
  siCelery,
  siGunicorn,
  siGitlab,
  siDigitalocean,
  siLinux,
  siGit,
  siKotlin,
  siJetpackcompose,
  siJsonwebtokens,
  siPostman,
  siSwagger,
  siMongodb,
  siSqlite,
  siPytest,
} from "simple-icons"
import { Cloud, KeyRound, Network, Webhook } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Brand = { path: string }

/** Skill name → brand glyph (simple-icons). Rendered in currentColor so it's theme-safe. */
const BRAND: Record<string, Brand> = {
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  Python: siPython,
  FastAPI: siFastapi,
  GraphQL: siGraphql,
  React: siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "TanStack Query": siReactquery,
  "Redux Toolkit": siRedux,
  "shadcn/ui": siShadcnui,
  Vite: siVite,
  "React Router": siReactrouter,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  "GitHub Actions": siGithubactions,
  Terraform: siTerraform,
  Nginx: siNginx,
  Grafana: siGrafana,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  ClickHouse: siClickhouse,
  Kafka: siApachekafka,
  Airflow: siApacheairflow,
  Prisma: siPrisma,
  Django: siDjango,
  "Django REST Framework": siDjango,
  "Next.js": siNextdotjs,
  JavaScript: siJavascript,
  Celery: siCelery,
  Gunicorn: siGunicorn,
  "GitLab CI/CD": siGitlab,
  DigitalOcean: siDigitalocean,
  Linux: siLinux,
  Git: siGit,
  Kotlin: siKotlin,
  "Jetpack Compose": siJetpackcompose,
  JWT: siJsonwebtokens,
  Postman: siPostman,
  "Swagger / OpenAPI": siSwagger,
  MongoDB: siMongodb,
  SQLite: siSqlite,
  pytest: siPytest,
}

/** Concepts / brands without a simple-icon → lucide stand-ins. */
const FALLBACK: Record<string, LucideIcon> = {
  REST: Network,
  WebSockets: Webhook,
  "Auth / OAuth2": KeyRound,
  AWS: Cloud,
}

export function SkillLogo({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const brand = BRAND[name]
  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d={brand.path} />
      </svg>
    )
  }

  const Icon = FALLBACK[name]
  if (Icon) return <Icon aria-hidden className={className} />

  return null
}
