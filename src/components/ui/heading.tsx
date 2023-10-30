import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva("font-extrabold", {
  variants: {
    size: {
      "1": "text-[3.5rem] leading-[4rem] tracking-tight xl:mb-6 xl:text-7xl",
      "2": "text-[2.5rem] leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]",
      "3": "text-[2.5rem] leading-[3rem]",
      "4": "text-2xl font-extrabold",
    },
    color: {
      default: "text-foreground",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "1",
    color: "default",
  },
})

interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  prefix?: string
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, size, color, as: Tag = "h1", prefix, children, ...props },
    ref
  ) => {
    return (
      <Tag className={cn("flex flex-col", className)} ref={ref} {...props}>
        {prefix && (
          <span className="mb-5 uppercase text-primary">{prefix}</span>
        )}
        <span className={cn(headingVariants({ size, color }))}>{children}</span>
      </Tag>
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
