import { Award, ExternalLink, GraduationCap, Sparkles } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { certifications, education } from "@/data/portfolio"

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education & Certifications">
      <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Degree */}
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                <Sparkles className="size-3.5" />
                {education.honors}
              </span>
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

        {/* Certifications */}
        <div className="flex h-full flex-col gap-3">
          {certifications.map((cert, i) => {
            const Wrapper = cert.url ? "a" : "div"
            return (
              <FadeIn key={cert.name} delay={0.08 + i * 0.07} className="flex-1">
                <Wrapper
                  {...(cert.url
                    ? {
                        href: cert.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group/cert flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover/cert:scale-110">
                    <Award className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium transition-colors group-hover/cert:text-brand">
                      {cert.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </span>
                  </span>
                  {cert.url && (
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover/cert:translate-x-0.5 group-hover/cert:opacity-100" />
                  )}
                </Wrapper>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
