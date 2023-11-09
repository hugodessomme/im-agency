import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

interface BackLinkProps {
  href: string
  label: string
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <div className="container my-12 max-w-[39rem]">
      <p>
        <Link
          href={href}
          className="inline-flex items-center text-xs font-bold uppercase hover:underline"
        >
          <ArrowLeftIcon className="mr-3 h-4 w-4" />
          {label}
        </Link>
      </p>
    </div>
  )
}
