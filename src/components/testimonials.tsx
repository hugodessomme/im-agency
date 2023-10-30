import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "lucide-react"

import { testimonials } from "@/config/testimonials"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function Testimonials() {
  return (
    <section className="mb-28">
      <div className="container">
        <Heading
          as="h2"
          size="3"
          prefix="Testimonials"
          className="mb-9 text-center xl:mb-16"
        >
          What Our Clients Saying
        </Heading>

        <ul className="mb-12 grid-rows-1 xl:mb-16 xl:grid xl:grid-flow-col xl:grid-cols-2">
          {testimonials.map((testimonial, index) => {
            const isFirst = index === 0
            const isSecond = index === 1
            const isThird = index === 2
            const isFourth = index === 3

            return (
              <li
                key={index}
                className={cn(
                  "rounded border border-background-subtle px-7 py-12",
                  isFirst && "bg-white xl:col-start-1",
                  isSecond && "xl:col-start-1",
                  isThird && "xl:col-start-2",
                  isFourth && "xl:col-start-2"
                )}
              >
                <div className="mb-9 flex gap-2">
                  {Array.from({ length: 5 }).map((star, index) => (
                    <StarIcon
                      key={index}
                      fill="rgb(250 204 21 / var(--tw-text-opacity))"
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-8 leading-8 text-foreground-subtle">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-x-6">
                  <Image
                    src={testimonial.image}
                    alt=""
                    width="80"
                    height="80"
                  />
                  <div>
                    <p className="mb-1 text-2xl font-bold">
                      {testimonial.name}
                    </p>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="text-center">
          <Button asChild variant="light">
            <Link href="/">See All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
