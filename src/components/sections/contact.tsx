import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { Check, Clock, Copy, Download, Globe, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { ContactForm } from "@/components/contact-form"
import { profile } from "@/data/portfolio"

/** Live clock pinned to UTC+1 (the timezone advertised across the site). */
function useUtcPlusOneTime() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])
  // Etc/GMT-1 is UTC+1 (the sign is inverted in the Etc zone names).
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Etc/GMT-1",
  }).format(now)
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <div className="mt-0.5 text-sm font-medium sm:text-base">{children}</div>
      </div>
    </div>
  )
}

export function Contact() {
  const time = useUtcPlusOneTime()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    let ok: boolean
    try {
      await navigator.clipboard.writeText(profile.email)
      ok = true
    } catch {
      // Legacy fallback for contexts where the async clipboard is blocked.
      const ta = document.createElement("textarea")
      ta.value = profile.email
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.left = "-9999px"
      document.body.appendChild(ta)
      ta.select()
      try {
        ok = document.execCommand("copy")
      } catch {
        ok = false
      }
      ta.remove()
    }
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Section id="contact">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 sm:px-10 sm:py-16">
          {/* Decorations: gradient hairline, corner glows, faint grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
            <div className="absolute -top-32 -right-24 size-80 rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_10%,transparent_70%)] dark:opacity-20" />
          </div>

          <div className="relative grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            {/* Left: pitch + direct channels */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for work — remote or in Algeria
              </span>

              <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Let's build something{" "}
                <span className="animate-gradient-text bg-gradient-to-r from-brand via-fuchsia-500 to-brand bg-clip-text text-transparent">
                  solid
                </span>{" "}
                together
              </h2>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Drop a note with the form, or reach me directly. I usually
                reply within a day.
              </p>

              <div className="mt-8 space-y-5">
                <InfoRow icon={Mail} label="Email">
                  <span className="flex items-center gap-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="truncate transition-colors hover:text-brand"
                    >
                      {profile.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="grid size-7 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      {copied ? (
                        <Check className="size-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                    </button>
                    <span
                      aria-live="polite"
                      className={`text-xs font-medium text-emerald-500 transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
                    >
                      Copied!
                    </span>
                  </span>
                </InfoRow>

                <InfoRow icon={Globe} label="Location">
                  Algeria · UTC+1
                </InfoRow>

                <InfoRow icon={Clock} label="My local time">
                  <span className="tabular-nums">{time}</span>
                  <span className="ml-1.5 text-sm text-muted-foreground">
                    (UTC+1)
                  </span>
                </InfoRow>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-border pt-7">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-11 px-5 text-base transition-transform hover:-translate-y-0.5 [&_svg]:size-5"
                >
                  <a href={profile.cv} download={profile.cvFileName}>
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
