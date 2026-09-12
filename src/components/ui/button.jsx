import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  (
    { className, variant = "default", size = "default", asChild = false, children, ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-white text-zinc-950 hover:bg-zinc-200",
      outline: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
      ghost: "text-zinc-200 hover:bg-white/5",
    };

    const sizes = {
      default: "h-11 px-5 text-sm font-medium",
      sm: "h-9 px-3 text-xs font-medium",
      lg: "h-12 px-6 text-base font-medium",
    };

    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, children.props.className),
        ref,
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
