import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full p-0.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
      },
      size: {
        default: "h-8 w-8",
        md: "h-16 w-16",
        lg: "h-20 w-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface IconBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBadgeVariants> {}

export default function IconBadge({
  variant,
  size,
  className,
  ...props
}: IconBadgeProps) {
  return (
    <div
      className={cn(iconBadgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}
