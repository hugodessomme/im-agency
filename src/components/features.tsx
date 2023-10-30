import Image from "next/image"
import Link from "next/link"
import { CheckIcon, ShapesIcon } from "lucide-react"

import { Heading } from "@/components/ui/heading"
import IconBadge from "@/components/icon-badge"

export function Features() {
  return (
    <section className="mb-28 xl:mb-52 ">
      <div className="container">
        <div className="mb-28 flex flex-col items-center gap-x-32 gap-y-20 xl:mb-52 xl:flex-row">
          <Image
            src="/images/give-site-new-look.png"
            alt=""
            width="529"
            height="551"
            className="mx-auto flex-shrink-0 xl:order-last"
            quality={100}
          />
          <div className="space-y-5 xl:w-[29.5rem]">
            <Heading as="h2" size="2" prefix="Features">
              Give Your Site A New Look
            </Heading>

            <p className="text-xl leading-8">
              Service range including technical skills, design, business
              understanding.
            </p>
            <ul className="space-y-4 text-foreground-subtle">
              <li className="flex items-center gap-x-4">
                <IconBadge>
                  <CheckIcon className="h-6 w-6" />
                </IconBadge>
                Range including technical skills
              </li>
              <li className="flex items-center gap-x-4">
                <IconBadge>
                  <CheckIcon className="h-6 w-6" />
                </IconBadge>
                Business understanding
              </li>
              <li className="flex items-center gap-x-4">
                <IconBadge>
                  <CheckIcon className="h-6 w-6" />
                </IconBadge>
                Partner on the long run
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-x-32 gap-y-20 xl:flex-row">
          <div className="space-y-5 xl:w-[29.5rem]">
            <p className="uppercase text-primary">Features</p>
            <p className="text-xl leading-8">
              Long run, and work as an extension of the merchant&apos;s team.
            </p>
            <p>
              <Link href="/services">Read More</Link>
            </p>
          </div>
          <ul className="xl:flex xl:items-end">
            <li className="rounded-t-md border border-background-subtle bg-white p-12 xl:rounded-bl-md">
              <IconBadge size="lg" className="mb-10">
                <ShapesIcon className="h-8 w-8" />
              </IconBadge>
              <p className="mb-5 text-2xl font-bold">Professional</p>
              <p className="leading-8 text-foreground-subtle">
                Full service range including technical skills, design.
              </p>
            </li>
            <li className="rounded-b-md border border-t-0 border-background-subtle p-12 pt-[6.5rem] xl:rounded-bl-none xl:rounded-tr-md xl:border-l-0 xl:border-t">
              <p className="mb-5 text-2xl font-bold">Accessibility</p>
              <p className="leading-8 text-foreground-subtle">
                Business understanding, ability to put themselves.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
