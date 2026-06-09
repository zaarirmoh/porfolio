import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Handles scroll position on client-side navigation:
 *  - scrolls to a section when the URL carries a #hash (works even when
 *    arriving from another page, e.g. /projects → /#about)
 *  - otherwise resets to the top on every route change
 * Renders nothing.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the destination page has painted its anchors.
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          return
        }
        window.scrollTo({ top: 0 })
      })
      return
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash, key])

  return null
}
