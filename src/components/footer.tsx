import { Link } from "react-router-dom"
import { ArrowUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { profile } from "@/data/portfolio"

const SECTION_LINKS = [
  { label: "Work", to: { pathname: "/", hash: "work" } },
  { label: "Experience", to: { pathname: "/", hash: "experience" } },
  { label: "About", to: { pathname: "/", hash: "about" } },
  { label: "Stack", to: { pathname: "/", hash: "stack" } },
  { label: "Contact", to: { pathname: "/", hash: "contact" } },
  { label: "All projects", to: "/projects" },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + pitch */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-heading text-base font-semibold tracking-tight"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-brand text-xs font-bold text-brand-foreground">
                MZ
              </span>
              {profile.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Full-stack engineer building reliable web platforms end to end.
              Open to new opportunities, remote or on-site in Algeria.
            </p>
            <div className="mt-4 flex items-center gap-1">
              <SocialLinks />
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="size-10 transition-transform hover:-translate-y-0.5 hover:text-brand"
              >
                <a href={`mailto:${profile.email}`} aria-label="Email me">
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3 md:grid-cols-2">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Back to top */}
          <Button
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="size-4" />
            Back to top
          </Button>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
