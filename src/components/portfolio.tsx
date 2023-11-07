"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { references } from "@/config/references"
import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { PortfolioItem } from "@/components/portfolio-item"

export function Portfolio() {
  const pathname = usePathname()

  return (
    <section className="mb-36 xl:mb-48">
      <div className="container">
        <Heading
          as="h2"
          size="2"
          color="white"
          prefix="Portfolio"
          className="mb-9 items-center"
        >
          Latest Work
        </Heading>

        <ul className="mb-16 flex flex-wrap justify-center gap-x-14 gap-y-4">
          <li>
            <Link href={routes.portfolio} className="text-white/[.64]">
              <span className={pathname === "/" ? "text-white" : ""}>
                Show All
              </span>
              <span className="inline-block -translate-y-2 text-sm">14</span>
            </Link>
          </li>

          <li>
            <Link href={routes.portfolio} className="text-white/[.64]">
              <span className={pathname === "/design" ? "text-white" : ""}>
                Design
              </span>
              <span className="inline-block -translate-y-2 text-sm">6</span>
            </Link>
          </li>

          <li>
            <Link href={routes.portfolio} className="text-white/[.64]">
              <span className={pathname === "/branding" ? "text-white" : ""}>
                Branding
              </span>
              <span className="inline-block -translate-y-2 text-sm">4</span>
            </Link>
          </li>

          <li>
            <Link href={routes.portfolio} className="text-white/[.64]">
              <span
                className={pathname === "/illustration" ? "text-white" : ""}
              >
                Illustration
              </span>
              <span className="inline-block -translate-y-2 text-sm">3</span>
            </Link>
          </li>

          <li>
            <Link href={routes.portfolio} className="text-white/[.64]">
              <span className={pathname === "/motion" ? "text-white" : ""}>
                Motion
              </span>
              <span className="inline-block -translate-y-2 text-sm">1</span>
            </Link>
          </li>
        </ul>

        <div className="mb-16 grid grid-cols-1 gap-7 xl:grid-cols-3">
          {references.map((reference) => (
            <PortfolioItem
              key={reference.url}
              reference={reference}
              className={cn(
                "xl:[&:nth-child(4n+2)]:col-span-2 xl:[&:nth-child(4n+3)]:col-span-2"
              )}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href={routes.portfolio}
            className={cn(buttonVariants({ variant: "outline" }), "text-white")}
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  )
}
