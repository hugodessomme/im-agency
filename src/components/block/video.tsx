import { Heading } from "@/components/ui/heading"

export function Video() {
  return (
    <section className="mb-20 xl:mb-52">
      <div className="container">
        <div className="flex flex-col items-center gap-x-32 gap-y-6 xl:flex-row">
          <div className="h-[368px] w-full max-w-[570px] rounded bg-neutral-400"></div>
          <div className="space-y-5 xl:w-[29.5rem]">
            <Heading as="h2" size="3" prefix="Video">
              Unlock The Greatest Value Possible
            </Heading>

            <p className="text-foreground-subtle">
              Design, business understanding, ability to put themselves in the
              merchant&apos;s shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
