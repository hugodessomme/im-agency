"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  totalPages: number
}

export function Pagination({ totalPages, className }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1
  const allPages = generatePagination(currentPage, totalPages)

  function generatePageURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())

    return `${pathname}?${params}`
  }

  return (
    <nav className={className}>
      <ul className="flex items-center justify-center gap-2">
        <li>
          <PaginationArrow
            direction="left"
            href={generatePageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </li>

        {allPages.map((page) => (
          <li key={page}>
            <PaginationNumber
              href={generatePageURL(page)}
              page={page}
              isActive={currentPage === page}
            />
          </li>
        ))}

        <li>
          <PaginationArrow
            direction="right"
            href={generatePageURL(currentPage + 1)}
            isDisabled={currentPage >= totalPages}
          />
        </li>
      </ul>
    </nav>
  )
}

function PaginationArrow({
  direction,
  href,
  isDisabled,
}: {
  direction: "left" | "right"
  href: string
  isDisabled: boolean
}) {
  const Icon = direction === "left" ? ArrowLeftIcon : ArrowRightIcon

  return isDisabled ? (
    <div
      className={cn(
        buttonVariants({ variant: "light", size: "icon" }),
        isDisabled && "opacity-25"
      )}
    >
      <Icon />
    </div>
  ) : (
    <Link
      href={href}
      className={buttonVariants({ variant: "light", size: "icon" })}
    >
      <Icon />
    </Link>
  )
}

function PaginationNumber({
  href,
  page,
  isActive,
}: {
  href: string
  page: number | string
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? "default" : "light",
        size: "icon",
      })}
    >
      {page}
    </Link>
  )
}

function generatePagination(currentPage: number, totalPages: number) {
  // totalPages = 5
  // => [1, 2, 3, 4, 5]
  if (totalPages < 10) {
    return Array.from({ length: totalPages }).map((_, index) => index + 1)
  }

  // totalPages = 12 / currentPage = 2
  // => [1, 2, 3, "...", 11, 12]
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]
  }

  // totalPages = 12 / currentPage = 11
  // [1, 2, "...", 10, 11, 12]
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
  }

  // totalPages = 12 / currentPage = 5
  // [1, "...", 4, 5, 6, "...", 12]
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}
