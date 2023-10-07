import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  return (
    <>
      <section className="bg-tertiary py-8">
        <div className="container">
          <div className="flex flex-col gap-y-8 xl:flex-row">
            <div>
              <p className="mb-5 uppercase text-primary">Modern Studio</p>
              <h1 className="mb-3 text-[3.5rem] font-extrabold leading-[4rem] tracking-tight text-white xl:mb-6 xl:text-7xl">
                We’re Help To Build Your Dream Project
              </h1>
              <p className="mb-4 leading-8 text-white text-white/[.64] xl:mb-8">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>
              <div className="mb-11 flex gap-x-2 xl:mb-[6.75rem]">
                <Button className="flex-1 sm:flex-initial">How We Work</Button>
                <Button variant="link" className="flex-1 sm:flex-initial">
                  Contact Us
                </Button>
              </div>
              <div className="flex items-start gap-x-4">
                <Image
                  src="/images/testimony.png"
                  alt="Client: Meta Inc."
                  width="48"
                  height="48"
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-white/[.64]">
                    "Put themselves in the merchant's shoes"
                  </p>
                  <p className="text-white">Meta Inc.</p>
                </div>
              </div>
            </div>
            <Image
              src="/images/build-your-project.png"
              alt=""
              width="570"
              height="602"
              className="order-first mx-auto flex-shrink-0 xl:order-last"
            />
          </div>
        </div>
      </section>
      <div className="container">
        {/* Logo */}
        <div className="py-[4.5rem]">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 xl:flex-nowrap xl:justify-between">
            <li>
              <Image
                src="/images/logo-digitalside.png"
                alt="Digitalside"
                width="147"
                height="42"
              />
            </li>
            <li>
              <Image
                src="/images/logo-vortex.png"
                alt="Vortex"
                width="108"
                height="32"
              />
            </li>
            <li>
              <Image
                src="/images/logo-travel-explorer.png"
                alt="Travel Explorer"
                width="119"
                height="47"
              />
            </li>
            <li>
              <Image
                src="/images/logo-fuzion.png"
                alt="Fuzion"
                width="86"
                height="21"
              />
            </li>
            <li>
              <Image
                src="/images/logo-mediafury.png"
                alt="MediaFury"
                width="126"
                height="24"
              />
            </li>
          </ul>
        </div>

        <Separator />

        {/* About */}
        <div className="flex flex-col items-center gap-x-32 gap-y-4 py-24 xl:flex-row">
          <Image
            src="/images/experienced-design-agency.png"
            alt=""
            width="566"
            height="585"
            className="flex-shrink-0"
          />
          <div className="space-y-5">
            <p className="uppercase text-primary">About</p>
            <h2 className="text-[2.5rem] font-extrabold leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
              An Experienced Design Agency
            </h2>
            <p className="text-xl">Provides a full service range</p>
            <p className="text-foreground-subtle">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <Button asChild variant="light">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>

        {/* How We Work */}
        {/* Video Reel */}
        {/* Features */}
        {/* Services */}
        {/* Portfolio */}
        {/* Events */}
        {/* Our Team */}
        {/* Testimonials */}
        {/* Pricing */}
        {/* FAQ */}
        {/* Our Awards */}
        {/* Our Blog */}
      </div>
    </>
  )
}
