import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { profile } from "@/data/portfolio"

/** Section anchors on the landing page. */
const NAV_LINKS = [
  { label: "Work", hash: "work" },
  { label: "Experience", hash: "experience" },
  { label: "About", hash: "about" },
  { label: "Stack", hash: "stack" },
  { label: "Contact", hash: "contact" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === "/"
  const onProjects = location.pathname.startsWith("/projects")

  // Subtle elevation once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy: highlight the section currently crossing the viewport middle.
  useEffect(() => {
    if (!isHome) return
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.hash),
    ).filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      // A thin horizontal band around the middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")

  const linkClass = (isActive: boolean) =>
    cn(
      "group relative px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:text-foreground",
      isActive ? "text-foreground" : "text-muted-foreground",
    )

  const underlineClass = (isActive: boolean) =>
    cn(
      "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300",
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
    )

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto grid h-20 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          to="/"
          className="group flex w-fit items-center gap-3 rounded-md font-heading text-base font-semibold tracking-tight focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-sm font-bold text-brand-foreground tabular-nums shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden lg:inline">{profile.name}</span>
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isHome && activeSection === link.hash
            return (
              <Link
                key={link.hash}
                to={{ pathname: "/", hash: link.hash }}
                aria-current={isActive ? "true" : undefined}
                className={linkClass(isActive)}
              >
                {link.label}
                <span className={underlineClass(isActive)} />
              </Link>
            )
          })}
          <Link
            to="/projects"
            aria-current={onProjects ? "page" : undefined}
            className={linkClass(onProjects)}
          >
            Projects
            <span className={underlineClass(onProjects)} />
          </Link>
        </div>

        {/* Right controls */}
        <div className="flex items-center justify-end gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="size-10 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.hash}
                  to={{ pathname: "/", hash: link.hash }}
                  onClick={() => setMenuOpen(false)}
                  className="flex h-12 items-center rounded-lg px-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="flex h-12 items-center rounded-lg px-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Projects
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
