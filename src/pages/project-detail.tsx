import type { ReactNode } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
  Lightbulb,
  Link2,
  MonitorSmartphone,
  Network,
  Puzzle,
  Target,
  TrendingUp,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StackTags } from "@/components/stack-tags"
import { ProjectGallery } from "@/components/project-media"
import { GitHubIcon } from "@/components/icons"
import { FadeIn } from "@/components/fade-in"
import { useDocumentTitle } from "@/hooks/use-document-title"
import { getProject, projects } from "@/data/portfolio"
import type { KeyPoint, Metric } from "@/data/portfolio"

/* A consistent, icon-led section heading used throughout the case study. */
function CaseSection({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: ReactNode
}) {
  return (
    <FadeIn as="section" className="border-t border-border pt-10">
      <h2 className="flex items-center gap-3 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
          <Icon className="size-5" />
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </FadeIn>
  )
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
      {metric.side && (
        <span className="text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
          {metric.side}
        </span>
      )}
      <div className="mt-0.5 font-heading text-2xl font-semibold tracking-tight text-brand tabular-nums sm:text-3xl">
        {metric.value}
      </div>
      <div className="mt-0.5 text-sm text-muted-foreground">{metric.label}</div>
    </div>
  )
}

function KeyPointList({ points }: { points: KeyPoint[] }) {
  return (
    <ul className="space-y-4">
      {points.map((point) => (
        <li
          key={point.title}
          className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
        >
          <h3 className="font-medium">{point.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{point.detail}</p>
        </li>
      ))}
    </ul>
  )
}

function ProjectNotFound() {
  useDocumentTitle("Project not found")
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="font-heading text-5xl font-semibold">404</p>
      <p className="mt-3 text-muted-foreground">
        That project doesn't exist (or moved).
      </p>
      <Button className="mt-6" asChild>
        <Link to="/projects">
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>
      </Button>
    </div>
  )
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  // Hooks must run unconditionally; title falls back when missing.
  useDocumentTitle(project?.name)

  if (!project) return <ProjectNotFound />

  const { links } = project
  const hasLinks = links.live || links.repo || links.docs

  // Prev/next navigation (wraps around) to keep visitors browsing.
  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8">
      {/* Back */}
      <Button variant="ghost" size="sm" asChild className="-ml-2 mb-8 text-muted-foreground">
        <Link to="/projects">
          <ArrowLeft className="size-4" />
          All projects
        </Link>
      </Button>

      {/* Header */}
      <FadeIn>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-brand">{project.domain}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </div>
        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
        <StackTags items={project.stack} className="mt-5" />

        {hasLinks && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.live && (
              <Button asChild className="transition-transform hover:-translate-y-0.5">
                <a href={links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  Live site
                </a>
              </Button>
            )}
            {links.repo && (
              <Button variant="outline" asChild className="transition-transform hover:-translate-y-0.5">
                <a href={links.repo} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="size-4" />
                  Repository
                </a>
              </Button>
            )}
            {links.docs && (
              <Button variant="outline" asChild className="transition-transform hover:-translate-y-0.5">
                <a href={links.docs} target="_blank" rel="noopener noreferrer">
                  <FileText className="size-4" />
                  API docs
                </a>
              </Button>
            )}
          </div>
        )}
      </FadeIn>

      {/* Media — carousel, single image, or branded placeholder */}
      <FadeIn className="mt-10">
        <ProjectGallery project={project} />
      </FadeIn>

      {/* Metrics */}
      {project.metrics.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      )}

      <div className="mt-12 space-y-10">
        {/* Problem */}
        <CaseSection icon={Target} title="Problem">
          <p className="text-muted-foreground">{project.problem}</p>
        </CaseSection>

        {/* Architecture */}
        {project.architecture && (
          <CaseSection icon={Network} title="Architecture">
            <p className="text-muted-foreground">{project.architecture}</p>
          </CaseSection>
        )}

        {/* Frontend */}
        {project.frontend && (
          <CaseSection icon={MonitorSmartphone} title="Frontend">
            <p className="text-muted-foreground">{project.frontend}</p>
          </CaseSection>
        )}

        {/* Stack & key decisions */}
        {project.decisions && project.decisions.length > 0 && (
          <CaseSection icon={Lightbulb} title="Stack & key decisions">
            <KeyPointList points={project.decisions} />
          </CaseSection>
        )}

        {/* Challenges / trade-offs */}
        {project.challenges && project.challenges.length > 0 && (
          <CaseSection icon={Puzzle} title="Challenges & trade-offs">
            <KeyPointList points={project.challenges} />
          </CaseSection>
        )}

        {/* Outcome */}
        {project.outcome && (
          <CaseSection icon={TrendingUp} title="Outcome & metrics">
            <p className="text-muted-foreground">{project.outcome}</p>
          </CaseSection>
        )}

        {/* Links */}
        {hasLinks && (
          <CaseSection icon={Link2} title="Links">
            <div className="flex flex-wrap gap-3">
              {links.live && (
                <Button variant="outline" asChild>
                  <a href={links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Live site
                  </a>
                </Button>
              )}
              {links.repo && (
                <Button variant="outline" asChild>
                  <a href={links.repo} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="size-4" />
                    Repository
                  </a>
                </Button>
              )}
              {links.docs && (
                <Button variant="outline" asChild>
                  <a href={links.docs} target="_blank" rel="noopener noreferrer">
                    <FileText className="size-4" />
                    API docs
                  </a>
                </Button>
              )}
            </div>
          </CaseSection>
        )}
      </div>

      {/* Prev / next project */}
      <nav
        aria-label="More projects"
        className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
      >
        <Link
          to={`/projects/${prev.slug}`}
          className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous project
          </span>
          <span className="mt-1.5 block font-heading font-semibold transition-colors group-hover:text-brand">
            {prev.name}
          </span>
        </Link>
        <Link
          to={`/projects/${next.slug}`}
          className="group rounded-xl border border-border bg-card p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Next project
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-1.5 block font-heading font-semibold transition-colors group-hover:text-brand">
            {next.name}
          </span>
        </Link>
      </nav>
    </article>
  )
}
