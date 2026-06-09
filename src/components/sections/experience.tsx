import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Card } from "@/components/ui/card"
import { experience } from "@/data/portfolio"

/** "Northwind Systems" → "NS" */
function initials(company: string) {
  return company
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Track record"
      title="Experience"
      description="Impact first — what shipped and what it moved."
    >
      <ol className="space-y-5">
        {experience.map((job, i) => {
          const isCurrent = i === 0
          const isLast = i === experience.length - 1
          return (
            <FadeIn
              as="li"
              key={`${job.company}-${job.period}`}
              delay={i * 0.08}
              className="group relative flex gap-4 sm:gap-6"
            >
              {/* Rail: company monogram + connector */}
              <div className="flex flex-col items-center pt-1">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 font-heading text-sm font-bold text-brand ring-1 ring-brand/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {initials(job.company)}
                  {isCurrent && (
                    <span className="absolute -top-1 -right-1 flex size-3.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex size-3.5 rounded-full border-2 border-background bg-emerald-500" />
                    </span>
                  )}
                </span>
                {!isLast && (
                  <span
                    aria-hidden
                    className="mt-2 w-px flex-1 bg-gradient-to-b from-brand/40 to-transparent"
                  />
                )}
              </div>

              {/* Card */}
              <Card className="mb-2 flex-1 gap-3 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:ring-brand/30 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-heading text-lg font-semibold">
                    {job.role} <span className="text-brand">· {job.company}</span>
                  </h3>
                  <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                    {job.period}
                  </span>
                </div>
                <div className="-mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{job.location}</span>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <ul className="mt-1 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-sm text-muted-foreground before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-brand/60"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          )
        })}
      </ol>
    </Section>
  )
}
