import { team } from "@/config/team"

import { TeamCarousel } from "./team-carousel"

export function Team() {
  return (
    <section>
      <div className="container">
        <TeamCarousel items={team} />

        <div className="flex flex-col gap-x-32 gap-y-10 xl:flex-row xl:items-center">
          <div className="h-64 w-full overflow-hidden rounded-md bg-neutral-400 xl:h-[28rem]"></div>
          <div>
            <p className="mb-7 uppercase text-primary">Founder Words</p>
            <p className="mb-6 text-2xl font-bold text-white xl:text-[2.5rem] xl:leading-[3rem]">
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </p>
            <p className="mb-1 text-xl text-white">Ren Delan</p>
            <p className="text-sm text-white/[.64]">Founder</p>
          </div>
          T
        </div>
      </div>
    </section>
  )
}
