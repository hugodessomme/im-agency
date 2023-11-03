import Link from "next/link"
import { ClockIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

export function Events() {
  return (
    <section className="mb-28">
      <div className="container">
        <Heading
          as="h2"
          size="2"
          color="white"
          prefix="Events"
          className="mx-auto mb-9 max-w-md text-center"
        >
          Explore Future Conferences
        </Heading>

        <ul className="mb-16 grid grid-cols-1 gap-7 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((event, index) => (
            <li
              key={index}
              className="relative rounded border border-tertiary-subtle px-10 py-9 text-white"
            >
              <p className="mb-5 flex gap-3">
                <span className="text-7xl font-extrabold">3</span>
                <span className="text-2xl font-bold">
                  <span className="block">November</span>
                  <span>2021</span>
                </span>
              </p>
              <p className="mb-9">
                <ClockIcon className="mr-2 inline h-4 w-4 text-primary" />
                9:00 am - 3:00 pm
              </p>
              <Separator className="mb-10 bg-tertiary-subtle" />
              <h3 className="mb-5 text-2xl">Design Weeks</h3>
              <p className="mb-7 leading-8 text-white/[.64]">
                Digital agency is a business you hire to outsource your digital.
              </p>
              <Link href={routes.events}>
                <span className="absolute inset-0"></span>Explore Now
              </Link>
            </li>
          ))}
        </ul>

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
