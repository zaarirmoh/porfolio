import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollManager } from "@/components/scroll-manager"
import { ScrollProgress } from "@/components/scroll-progress"

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollManager />
      <ScrollProgress />
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
