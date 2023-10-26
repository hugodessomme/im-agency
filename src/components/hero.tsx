import Image from "next/image"

import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="mb-12 bg-tertiary py-8 xl:mb-[4.5rem]">
      <div className="container">
        <div className="flex flex-col gap-y-8 xl:flex-row">
          <div>
            <h1 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">Modern Studio</span>
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
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}