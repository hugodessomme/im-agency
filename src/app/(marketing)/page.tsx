import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  return (
    <>
      {/* Heading */}
      <section className="mb-12 bg-tertiary py-8 xl:mb-[4.5rem]">
        <div className="container">
          <div className="flex flex-col gap-y-8 xl:flex-row">
            <div>
              <h1 className="flex flex-col">
                <span className="mb-5 uppercase text-primary">
                  Modern Studio
                </span>
                <span className="mb-3 text-[3.5rem] font-extrabold leading-[4rem] tracking-tight text-white xl:mb-6 xl:text-7xl">
                  We’re Help To Build Your Dream Project
                </span>
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
                    &quot;Put themselves in the merchant&apos;s shoes&quot;
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
        {/* Logos */}
        <ul className="mb-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 xl:mb-[4.5rem] xl:flex-nowrap xl:justify-between">
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

        <Separator className="mb-16" />

        {/* About */}
        <section className="mb-24 xl:mb-36">
          <div className="mb-28 flex flex-col items-center gap-x-32 gap-y-4 xl:mb-40 xl:flex-row">
            <Image
              src="/images/experienced-design-agency.png"
              alt=""
              width="566"
              height="585"
              className="flex-shrink-0"
            />
            <div className="space-y-5">
              <h2 className="flex flex-col">
                <span className="mb-5 uppercase text-primary">About</span>
                <span className="text-[2.5rem] font-extrabold leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
                  An Experienced Design Agency
                </span>
              </h2>
              <p className="text-xl">Provides a full service range</p>
              <p className="text-foreground-subtle">
                Ability to put themselves in the merchant&apos;s shoes. It is
                meant to partner on the long run, and work as an extension of
                the merchant&apos;s team.
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
        </section>

        {/* How We Work */}
        <section className="mb-16 flex flex-col gap-x-32 gap-y-20 xl:mb-24 xl:flex-row">
          <div className="space-y-5 xl:w-[29.5rem]">
            <h2 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">How we work</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem]">
                Making Your Projects Look Awesome
              </span>
            </h2>
            <p className="text-foreground-subtle">
              Technical skills, design, business understanding, ability to put
              themselves in the merchant&apos;s shoes.
            </p>
            <p>
              <Link href="/services">Read More</Link>
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
        </section>

        <Separator className="mb-32" />

        {/* Video Reel */}
        <section className="mb-20 flex flex-col items-center gap-x-32 gap-y-6 xl:mb-56 xl:flex-row">
          <div className="h-[368px] w-full max-w-[570px] rounded bg-neutral-400"></div>
          <div className="space-y-5 xl:w-[29.5rem]">
            <h2 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">Video Reel</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem]">
                Unlock The Greatest Value Possible
              </span>
            </h2>
            <p className="text-foreground-subtle">
              Design, business understanding, ability to put themselves in the
              merchant&apos;s shoes meant to partner.
            </p>
          </div>
        </section>
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
