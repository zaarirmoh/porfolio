import { Link } from "react-router-dom"
import { SocialLinks } from "@/components/social-links"
import { profile } from "@/data/portfolio"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link
            to="/"
            className="font-heading text-sm font-semibold tracking-tight"
          >
            {profile.name}
          </Link>
          <p className="text-xs text-muted-foreground">
            © {year} · Built with React + TypeScript
          </p>
        </div>
        <SocialLinks includeEmail />
      </div>
    </footer>
  )
}
