import Link from "next/link"

import { references } from "@/config/references"
import { routes } from "@/config/routes"
import { getReferencesCountByCategory } from "@/lib/data"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { PortfolioItem } from "@/components/portfolio-item"

export async function Portfolio() {
  const { categories, categoriesTotal } = await getReferencesCountByCategory()

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
            <Link href={`${routes.portfolio}`} className="text-white/[.64]">
              <span>Show All</span>
              <span className="inline-block -translate-y-2 text-sm">
                {categoriesTotal}
              </span>
            </Link>
          </li>

          {Object.keys(categories).map((category) => (
            <li key={category}>
              <Link
                href={`${routes.portfolio}?query=${category}`}
                className="text-white/[.64]"
              >
                <span>{categories[category].label}</span>
                <span className="inline-block -translate-y-2 text-sm">
                  {categories[category].count}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mb-16 grid grid-cols-1 gap-7 xl:grid-cols-3">
          {references.slice(0, 4).map((reference) => (
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
