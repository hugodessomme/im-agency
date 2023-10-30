import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function About() {
  return (
    <section className="mb-24 xl:mb-36">
      <div className="container">
        <div className="mb-28 flex flex-col items-center gap-x-32 gap-y-4 xl:mb-40 xl:flex-row">
          <Image
            src="/images/experienced-design-agency.png"
            alt=""
            width="566"
            height="585"
            className="flex-shrink-0"
            quality={100}
          />
          <div className="space-y-5">
            <Heading prefix="About" size="2" as="h2">
              An Experienced Design Agency
            </Heading>

            <p className="text-xl leading-8">Provides a full service range</p>
            <p className="text-foreground-subtle">
              Ability to put themselves in the merchant&apos;s shoes. It is
              meant to partner on the long run, and work as an extension of the
              merchant&apos;s team.
            </p>
            <Button asChild variant="light">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>

        <ul className="xl:divide-x-background-subtle divide-y divide-background-subtle rounded-md border border-background-subtle xl:flex xl:divide-x xl:divide-y-0">
          <li className="flex-1 px-12 py-11">
            <span className="mb-3 block text-[2.5rem] font-extrabold leading-[3rem]">
              42%
            </span>
            <span className="text-xl">Years of experience</span>
          </li>
          <li className="flex-1 px-12 py-11">
            <span className="mb-3 block text-[2.5rem] font-extrabold leading-[3rem]">
              73 +
            </span>
            <span className="text-xl">Agency members</span>
          </li>
          <li className="flex-1 px-12 py-11">
            <span className="mb-3 block text-[2.5rem] font-extrabold leading-[3rem]">
              5.000
            </span>
            <span className="text-xl">Projects complete</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
