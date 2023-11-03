import Link from "next/link"

import { routes } from "@/config/routes"
import { Heading } from "@/components/ui/heading"

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="mb-16 scroll-mt-24 xl:mb-24 xl:scroll-mt-36"
    >
      <div className="container">
        <div className="flex flex-col gap-x-32 gap-y-20 xl:flex-row">
          <div className="space-y-5 xl:w-[29.5rem]">
            <Heading as="h2" size="3" prefix="How We Work">
              Making Your Projects Look Awesome
            </Heading>

            <p className="text-foreground-subtle">
              Technical skills, design, business understanding, ability to put
              themselves in the merchant&apos;s shoes.
            </p>
            <p>
              <Link href={routes.services}>Read More</Link>
            </p>
          </div>
          <ol className="space-y-8">
            <li className="flex items-center gap-x-7 xl:gap-x-16">
              <span className="w-12 text-7xl font-extrabold">1</span>
              <span className="text-2xl font-bold leading-6">
                Full service range including
              </span>
            </li>
            <li className="flex items-center gap-x-7 xl:gap-x-16">
              <span className="w-12 text-7xl font-extrabold">2</span>
              <span className="text-2xl font-bold leading-6">
                Technical skills, design, business
              </span>
            </li>
            <li className="flex items-center gap-x-7 xl:gap-x-16">
              <span className="w-12 text-7xl font-extrabold">3</span>
              <span className="text-2xl font-bold leading-6">
                Themselves in the merchant&apos;s
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
