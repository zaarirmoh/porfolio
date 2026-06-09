import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { profile } from "@/data/portfolio"
import { cn } from "@/lib/utils"

type SocialLinksProps = {
  className?: string
  /** Include a mailto button alongside the social icons. */
  includeEmail?: boolean
}

export function SocialLinks({ className, includeEmail = false }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="size-10 transition-transform hover:-translate-y-0.5 hover:text-brand"
      >
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <GitHubIcon className="size-5" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="size-10 transition-transform hover:-translate-y-0.5 hover:text-brand"
      >
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon className="size-5" />
        </a>
      </Button>
      {includeEmail && (
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
      )}
    </div>
  )
}
