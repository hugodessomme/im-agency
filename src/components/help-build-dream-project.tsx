import Image from "next/image"

import { Button } from "@/components/ui/button"

export function HelpBuildDreamProject() {
  return (
    <section className="mb-32 xl:mb-24">
      <div className="container">
        <div className="flex flex-col gap-x-20 gap-y-9 rounded-md bg-primary px-7 py-8 xl:flex-row xl:items-end xl:p-24">
          <Image
            src="/images/build-your-project-2.png"
            alt=""
            width="444"
            height="432"
            className="mx-auto flex-shrink-0 xl:order-last"
            quality="100"
          />
          <div>
            <h2 className="mb-4 text-[2.5rem] font-extrabold leading-[3rem] tracking-tight text-white xl:mb-7 xl:text-[3.5rem] xl:leading-[4rem]">
              We’re Help To Build Your Dream Project
            </h2>
            <p className="mb-5 leading-8 text-white/[.64] xl:mb-9">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <Button variant="light">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
