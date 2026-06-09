import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDocumentTitle } from "@/hooks/use-document-title"

export function NotFoundPage() {
  useDocumentTitle("Page not found")
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="font-heading text-6xl font-semibold tracking-tight">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold">
        This page wandered off
      </h1>
      <p className="mt-2 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Button className="mt-8" asChild>
        <Link to="/">
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </Button>
    </div>
  )
}
