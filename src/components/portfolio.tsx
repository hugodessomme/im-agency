"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

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

        <div className="mb-16 grid grid-cols-1 gap-7 xl:grid-cols-12">
          <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-4 xl:px-12">
            <Badge className="mb-6">Illustration</Badge>
            <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
              Work Media
            </p>
          </div>
          <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-8 xl:px-12">
            <Badge className="mb-6">Illustration</Badge>
            <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
              Work Media
            </p>
          </div>
          <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-8 xl:px-12">
            <Badge className="mb-6">Illustration</Badge>
            <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
              Work Media
            </p>
          </div>
          <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-4 xl:px-12">
            <Badge className="mb-6">Illustration</Badge>
            <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
              Work Media
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className={cn(buttonVariants({ variant: "outline" }), "text-white")}
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  )
}
