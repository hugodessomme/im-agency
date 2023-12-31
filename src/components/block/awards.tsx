import Image from "next/image"

import { awards } from "@/config/awards"
import { Heading } from "@/components/ui/heading"

export function Awards() {
  return (
    <section className="mb-24 xl:mb-28">
      <div className="container">
        <Heading as="h2" size="3" className="mb-9 items-center xl:mb-16">
          Our Awards
        </Heading>

        <ul className="divide-y divide-background-subtle border-y border-background-subtle">
          {awards.map((award) => (
            <li
              key={award.title}
              className="flex flex-col items-center justify-between gap-y-4 py-4 xl:flex-row"
            >
              <div className="flex flex-1 flex-col items-center justify-between xl:flex-row">
                <div className="flex flex-col items-center gap-6 xl:flex-row">
                  <Image src={award.image} alt="" width="120" height="80" />
                  <h3 className="text-xl leading-8">{award.title}</h3>
                </div>
                <p className="leading-8 text-foreground-subtle">{award.date}</p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-end gap-x-6 xl:flex-row">
                {award.competition}
                <Image
                  src={award.competitionImage}
                  alt=""
                  width="48"
                  height="48"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
