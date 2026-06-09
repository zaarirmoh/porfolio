import { GraduationCap } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Card } from "@/components/ui/card"
import { education } from "@/data/portfolio"

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <FadeIn>
        <Card className="flex-row items-start gap-4 p-6">
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
            <GraduationCap className="size-5" />
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-heading text-lg font-semibold">
                {education.degree}
              </h3>
              <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                {education.period}
              </span>
            </div>
            <p className="text-sm font-medium text-brand">{education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.detail}
            </p>
          </div>
        </Card>
      </FadeIn>
    </Section>
  )
}
