import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function GetStarted() {
  return (
    <section className="mb-36">
      <div className="container">
        <div className="relative rounded-md bg-background px-7 pb-9 pt-24 xl:px-24 xl:pb-12 xl:pt-[3.75rem]">
          <div className="xl:flex xl:items-center">
            <div className="mb-7 xl:mb-0">
              <Image
                src="/images/help-companies-faster-icon.svg"
                alt=""
                width="148"
                height="148"
                className="absolute left-3 top-0 -translate-y-1/2 xl:left-20"
              />
              <Heading as="h2" size="4" prefix="Get Started" className="mb-6">
                We Help Companies Move Faster
              </Heading>

              <Button asChild>
                <Link href="/">Contact Us</Link>
              </Button>
            </div>
            <div className="-mx-9 mb-24 xl:mx-0 xl:-mb-24 xl:-mt-9">
              <Image
                src="/images/help-companies-faster-1.png"
                alt=""
                width="434"
                height="288"
                quality="100"
                className="mx-auto"
              />
            </div>
            <Image
              src="/images/help-companies-faster-2.png"
              alt=""
              width="282"
              height="242"
              quality="100"
              className="mx-auto"
            />
            <Image
              src="/images/help-companies-faster-3.png"
              alt=""
              width="239"
              height="396"
              quality="100"
              className="absolute inset-x-0 bottom-0 mx-auto xl:left-auto xl:right-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
