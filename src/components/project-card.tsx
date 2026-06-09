import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StackTags } from "@/components/stack-tags"
import type { Project } from "@/data/portfolio"

export function ProjectCard({ project }: { project: Project }) {
  const headline = project.metrics[0]

  return (
    <Card className="group/card relative h-full gap-0 p-0 ring-foreground/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/40">
      <Link
        to={`/projects/${project.slug}`}
        className="flex h-full flex-col rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        {/* Preview image (when present) */}
        {project.screenshot && (
          <div className="aspect-[16/9] overflow-hidden border-b border-border bg-muted">
            <img
              src={project.screenshot}
              alt={`${project.name} preview`}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
            />
          </div>
        )}

        <CardHeader className="gap-2 p-6 pb-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-brand">{project.domain}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <CardTitle className="flex items-start justify-between gap-3 text-xl">
            <span className="leading-snug transition-colors group-hover/card:text-brand">
              {project.name}
            </span>
            <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-brand" />
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 p-6 pt-3">
          <p className="text-[0.95rem] text-muted-foreground">{project.problem}</p>

          <StackTags items={project.stack} max={4} className="mt-auto" />

          {headline && (
            <div className="flex items-baseline gap-2 border-t border-border pt-4">
              <span className="font-heading text-3xl font-semibold tracking-tight text-brand tabular-nums">
                {headline.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {headline.label}
              </span>
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}
