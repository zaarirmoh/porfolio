import { Download, Mail } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { profile } from "@/data/portfolio"

export function Contact() {
  return (
    <Section id="contact">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
          />
          <p className="text-sm font-medium tracking-wide text-brand uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let's build something solid together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Open to remote full-stack roles across the EU and US. The fastest way
            to reach me is email — I usually reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-heading text-lg font-medium text-foreground underline-offset-4 hover:text-brand hover:underline sm:text-xl"
          >
            {profile.email}
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                Email me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.cv} download>
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-6 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
