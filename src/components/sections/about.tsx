import { Globe, MapPin } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { StatCounter } from "@/components/stat-counter"
import { profile, stats } from "@/data/portfolio"

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me" className="bg-muted/30">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        {/* Portrait */}
        <FadeIn className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-brand/10 blur-2xl" />
            <img
              src={profile.aboutImage}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-lg"
            />
          </div>
        </FadeIn>

        {/* Copy + availability + stats */}
        <div className="order-1 lg:order-2">
          <FadeIn>
            <p className="text-lg leading-relaxed text-foreground/90">
              {profile.about}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-6 rounded-xl border border-border bg-card p-5">
              <div className="mb-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm font-medium">
                <span className="inline-flex items-center gap-1.5 text-brand">
                  <MapPin className="size-4" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-brand">
                  <Globe className="size-4" />
                  Fluent English
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {profile.availability}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
