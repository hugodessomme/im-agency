import Image from "next/image"
import Link from "next/link"
import { Reference } from "@/types"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface PortfolioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  reference: Reference
}

export function PortfolioItem({ reference, className }: PortfolioItemProps) {
  return (
    <div
      className={cn(
        "group relative z-10 flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:px-12",
        className
      )}
    >
      <Image
        src={reference.image}
        alt={reference.label}
        fill
        quality={100}
        className="-z-10 object-cover transition-transform group-hover:scale-105"
      />
      <Badge className="mb-6">{reference.badge}</Badge>
      <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
        <Link href={reference.url}>
          <span className="absolute inset-0"></span>
          {reference.label}
        </Link>
      </p>
    </div>
  )
}
