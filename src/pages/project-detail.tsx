import type { ReactNode } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Network,
} from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StackTags } from "@/components/stack-tags"
import { GitHubIcon } from "@/components/icons"
import { FadeIn } from "@/components/fade-in"
import { useDocumentTitle } from "@/hooks/use-document-title"
import { getProject } from "@/data/portfolio"
import type { KeyPoint, Metric } from "@/data/portfolio"

/* A consistent section heading used throughout the case study. */
function CaseSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-border pt-10">
      <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      {metric.side && (
        <span className="text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
          {metric.side}
        </span>
      )}
      <div className="mt-0.5 font-heading text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
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
        <li key={point.title} className="rounded-xl border border-border bg-card p-5">
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
  const reduce = useReducedMotion()

  // Hooks must run unconditionally; title falls back when missing.
  useDocumentTitle(project?.name)

  if (!project) return <ProjectNotFound />

  const { links } = project
  const hasLinks = links.live || links.repo || links.docs

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
              <Button asChild>
                <a href={links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  Live demo
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
        )}
      </FadeIn>

      {/* Preview image */}
      {project.screenshot && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-border bg-muted"
        >
          <img
            src={project.screenshot}
            alt={`${project.name} preview`}
            className="aspect-[16/9] w-full object-cover"
          />
        </motion.div>
      )}

      {/* Metrics */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {project.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-12 space-y-10">
        {/* Problem */}
        <CaseSection title="Problem">
          <p className="text-muted-foreground">{project.problem}</p>
        </CaseSection>

        {/* Architecture + diagram placeholder */}
        <CaseSection title="Architecture">
          <p className="text-muted-foreground">{project.architecture}</p>
          <div className="mt-5 grid place-items-center rounded-xl border border-dashed border-border bg-muted/40 p-10 text-center">
            <Network className="size-7 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium">Architecture diagram</p>
            <p className="text-xs text-muted-foreground">
              Drop a diagram here (e.g. /public/projects/{project.slug}-diagram.svg)
            </p>
          </div>
        </CaseSection>

        {/* Frontend */}
        <CaseSection title="Frontend">
          <p className="text-muted-foreground">{project.frontend}</p>
        </CaseSection>

        {/* Stack & key decisions */}
        <CaseSection title="Stack & key decisions">
          <KeyPointList points={project.decisions} />
        </CaseSection>

        {/* Challenges / trade-offs */}
        <CaseSection title="Challenges & trade-offs">
          <KeyPointList points={project.challenges} />
        </CaseSection>

        {/* Outcome */}
        <CaseSection title="Outcome & metrics">
          <p className="text-muted-foreground">{project.outcome}</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </CaseSection>

        {/* Links */}
        {hasLinks && (
          <CaseSection title="Links">
            <div className="flex flex-wrap gap-3">
              {links.live && (
                <Button variant="outline" asChild>
                  <a href={links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Live demo
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

      {/* Footer nav */}
      <div className="mt-14 border-t border-border pt-8">
        <Button variant="ghost" asChild className="-ml-2 text-muted-foreground">
          <Link to="/projects">
            <ArrowLeft className="size-4" />
            Back to all projects
          </Link>
        </Button>
      </div>
    </article>
  )
}
