import { useState } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { profile } from "@/data/portfolio"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot — bots fill hidden fields; humans don't.
    if (data.get("company")) {
      setStatus("success")
      form.reset()
      return
    }

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    }

    setStatus("submitting")

    // No backend configured → open a pre-filled email draft as a graceful fallback.
    if (!profile.contactEndpoint) {
      const subject = encodeURIComponent(`Portfolio contact from ${payload.name}`)
      const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} (${payload.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus("success")
      form.reset()
      return
    }

    try {
      const res = await fetch(profile.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setError("Something went wrong. Please email me directly instead.")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-brand/15 text-brand">
          <Check className="size-7" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-semibold">Message on its way</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out — I'll get back to you within a day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a bit about the role or project…"
          required
          rows={5}
        />
      </div>

      {/* Honeypot field — visually hidden, ignored by humans */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 h-12 w-full px-6 text-base transition-transform hover:-translate-y-0.5 [&_svg]:size-5"
      >
        {status === "submitting" ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending…
          </>
        ) : (
          <>
            <Send />
            Send message
          </>
        )}
      </Button>
    </form>
  )
}
