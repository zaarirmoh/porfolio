import { Download } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { ContactForm } from "@/components/contact-form"
import { profile } from "@/data/portfolio"

export function Contact() {
  return (
    <Section id="contact">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-brand/10 blur-3xl"
          />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: pitch + direct links */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                Contact
              </p>
              <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Let's build something solid together
              </h2>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Open to remote full-stack roles across the EU and US. Drop a note
                with the form — or reach me directly. I usually reply within a day.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-block font-heading text-lg font-medium text-foreground underline-offset-4 hover:text-brand hover:underline sm:text-xl"
              >
                {profile.email}
              </a>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-11 px-5 text-base transition-transform hover:-translate-y-0.5 [&_svg]:size-5"
                >
                  <a href={profile.cv} download>
                    <Download />
                    Download CV
                  </a>
                </Button>
                <SocialLinks />
              </div>
            </div>

            {/* Right: form */}
            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
