import Image from "next/image"
import Link from "next/link"
import { BriefcaseIcon, PresentationIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { IconBadge } from "@/components/icon-badge"

export function Services() {
  return (
    <section className="mb-28 xl:mb-36">
      <div className="container">
        <div className="mb-28 flex flex-col items-center gap-x-28 gap-y-4 xl:mb-40 xl:flex-row">
          <Image
            src="/images/making-complex-digital-products.png"
            alt=""
            width="580"
            height="570"
            className="flex-shrink-0"
            quality={100}
          />
          <div className="space-y-5">
            <Heading as="h2" size="2" prefix="Service">
              Making Complex Digital Products
            </Heading>

            <p className="text-xl leading-8">
              Agency provides a full service range including technical skills,
              design, business.
            </p>
            <Button asChild variant="light">
              <Link href={routes.about}>Explore</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <Heading as="h2" size="3" prefix="Service">
            How Our Agency Can Help
          </Heading>

          <ul className="divide divide-y divide-background-subtle rounded-md border border-background-subtle xl:flex xl:items-end xl:divide-x xl:divide-y-0">
            <li className="flex-1 px-7 py-12">
              <IconBadge size="lg" className="mb-10">
                <PresentationIcon className="h-8 w-8" />
              </IconBadge>
              <h3 className="mb-5 text-2xl font-bold">Design</h3>
              <p className="mb-6 leading-8 text-foreground-subtle">
                Agency provides a full service range including technical skills,
                design.
              </p>
              <p>
                <Link href={routes.services}>Discover More</Link>
              </p>
            </li>
            <li className="flex-1 px-7 py-12">
              <IconBadge size="lg" className="mb-10">
                <BriefcaseIcon className="h-8 w-8" />
              </IconBadge>
              <h3 className="mb-5 text-2xl font-bold">Development</h3>
              <p className="mb-6 leading-8 text-foreground-subtle">
                Full service range including technical skills, design, business.
              </p>
              <p>
                <Link href={routes.services}>Discover More</Link>
              </p>
            </li>
            <li className="flex-1 px-7 py-12">
              <IconBadge size="lg" className="mb-10">
                <BriefcaseIcon className="h-8 w-8" />
              </IconBadge>
              <h3 className="mb-5 text-2xl font-bold">Marketing</h3>
              <p className="mb-6 leading-8 text-foreground-subtle">
                Technical skills, design, business understanding, ability.
              </p>
              <p>
                <Link href={routes.services}>Explore Now</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
