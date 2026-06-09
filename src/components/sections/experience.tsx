import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { experience } from "@/data/portfolio"

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Track record"
      title="Experience"
      description="Impact first — what shipped and what it moved."
    >
      <ol className="relative space-y-10 before:absolute before:top-1 before:bottom-1 before:left-[7px] before:w-px before:bg-border">
        {experience.map((job, i) => (
          <FadeIn
            as="li"
            key={`${job.company}-${job.period}`}
            delay={i * 0.06}
            className="relative pl-8 sm:pl-10"
          >
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute top-1 left-0 size-3.5 rounded-full bg-brand ring-4 ring-background"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-heading text-lg font-semibold">
                {job.role} <span className="text-brand">· {job.company}</span>
              </h3>
              <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                {job.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {job.location}
            </p>
            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-sm text-muted-foreground before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-brand/60"
                >
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </ol>
    </Section>
  )
}
