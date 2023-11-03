import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/heading"

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export function Banner({
  title,
  description,
  className,
  ...props
}: BannerProps) {
  return (
    <div
      className={cn("bg-tertiary pb-20 pt-16 text-center", className)}
      {...props}
    >
      <div className="container">
        <Heading size="1" color="white" className="mb-3">
          {title}
        </Heading>
        <p className="mx-auto max-w-xl text-white/[.64]">{description}</p>
      </div>
    </div>
  )
}
