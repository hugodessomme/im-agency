import Image from "next/image"
import Link from "next/link"
import { BriefcaseIcon, PresentationIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import IconBadge from "@/components/icon-badge"

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
            <h2 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">Service</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
                Making Complex Digital Products
              </span>
            </h2>
            <p className="text-xl leading-8">
              Agency provides a full service range including technical skills,
              design, business.
            </p>
            <Button asChild variant="light">
              <Link href="/about">Explore</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="mb-9 flex flex-col">
            <span className="mb-5 uppercase text-primary">Service</span>
            <span className="text-[2.5rem] font-extrabold leading-[3rem]">
              How Our Agency Can Help
            </span>
          </h2>

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
                <Link href="/services">Discover More</Link>
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
                <Link href="/services">Discover More</Link>
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
                <Link href="/services">Explore Now</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}