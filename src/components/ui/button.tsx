import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex items-center justify-center gap-2 px-2",
  {
    variants: {
      variant: {
        default: 'text-white bg-primary-600 hover:bg-primary-700 selected:bg-primary-750 dark:bg-gray-700',
        outline: 'text-primary-600 bg-white hover:bg-primary-600 hover:text-white border border-solid border-primary-600',
      },
      size: {
        default: "h-10 px-4 py-2",
        m: "h-10 py-2 buttonSM",
        lg: "h-10 px-8",
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