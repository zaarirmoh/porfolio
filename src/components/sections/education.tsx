import { GraduationCap, Sparkles, Trophy } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { baccalaureate, education } from "@/data/portfolio"

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        {/* University */}
        <FadeIn className="h-full">
          <Card className="group/edu relative h-full gap-5 overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-brand/10 blur-3xl transition-colors duration-500 group-hover/edu:bg-brand/20"
            />
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover/edu:scale-110 group-hover/edu:rotate-3">
                <GraduationCap className="size-6" />
              </span>
              <span className="shrink-0 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground tabular-nums">
                {education.period}
              </span>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-1 font-medium text-brand">{education.school}</p>
            </div>

            <p className="text-sm text-muted-foreground sm:text-[0.95rem]">
              {education.detail}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-5">
              {education.focus.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="px-2.5 py-1 text-xs font-normal text-muted-foreground"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </FadeIn>

        {/* Baccalaureate */}
        <FadeIn delay={0.08} className="h-full">
          <Card className="group/bac relative h-full gap-5 overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-brand/10 blur-3xl transition-colors duration-500 group-hover/bac:bg-brand/20"
            />
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover/bac:scale-110 group-hover/bac:rotate-3">
                <Trophy className="size-6" />
              </span>
              <span className="shrink-0 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground tabular-nums">
                {baccalaureate.period}
              </span>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {baccalaureate.title}
              </h3>
              <p className="mt-1 font-medium text-brand">{baccalaureate.school}</p>
            </div>

            <p className="text-sm text-muted-foreground sm:text-[0.95rem]">
              {baccalaureate.detail}
            </p>

            {/* Score + rank highlight */}
            <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border pt-5">
              <span className="font-heading text-3xl font-semibold tracking-tight text-brand tabular-nums">
                {baccalaureate.score}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                <Sparkles className="size-3.5" />
                {baccalaureate.highlight}
              </span>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
