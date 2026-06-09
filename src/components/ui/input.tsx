import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-3.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none",
        "placeholder:text-muted-foreground selection:bg-brand selection:text-brand-foreground",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        "dark:bg-input/30",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
