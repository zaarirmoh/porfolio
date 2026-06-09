import { useEffect } from "react"
import { profile } from "@/data/portfolio"

/** Sets document.title for the page and restores nothing (next page sets its own). */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} · ${profile.name}`
      : `${profile.name} — ${profile.role}`
  }, [title])
}
