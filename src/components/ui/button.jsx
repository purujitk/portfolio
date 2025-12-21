import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button" // Simplified for your current needs
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

export { Button }
