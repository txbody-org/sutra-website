import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300",
        premium: "relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white font-semibold shadow-sm transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-slate-950 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:via-blue-500/20 before:to-purple-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:shadow-md",
        glass: "relative overflow-hidden bg-white/8 backdrop-blur-lg border border-white/20 text-slate-200 hover:bg-white/12 hover:border-white/30 hover:text-white shadow-sm hover:shadow-md transition-all duration-500 hover:scale-[1.01] focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-blue-500/10 before:to-purple-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300",
        secondary:
          "bg-white/8 text-slate-300 hover:bg-white/12 hover:text-white backdrop-blur-sm border border-white/5 transition-all duration-300",
        ghost: "text-slate-300 hover:bg-white/8 hover:text-white transition-all duration-300",
        link: "text-purple-400 underline-offset-4 hover:underline hover:text-purple-300 transition-colors duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
