import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    content:
      "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
    name: "Alan Martí",
    company: "Meta Inc.",
    image: "/images/testimonial-1.png",
  },
  {
    content:
      "Provide your business with a variety of digital solutions to promote your product or service online.",
    name: "Richardo Kann",
    company: "Photogram",
    image: "/images/testimonial-2.png",
  },
  {
    content:
      "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
    name: "Graham Griffiths",
    company: "Twitor",
    image: "/images/testimonial-3.png",
  },
  {
    content:
      "Promote your product or service online and help you hit your marketing goals and grow your business.",
    name: "Maria Trofimova",
    company: "Whochat",
    image: "/images/testimonial-4.png",
  },
]

export function Testimonials() {
  return (
    <section className="mb-28">
      <div className="container">
        <h2 className="mb-9 flex flex-col text-center xl:mb-16">
          <span className="mb-5 uppercase text-primary">Testimonials</span>
          <span className="text-[2.5rem] font-extrabold leading-[3rem]">
            What Our Clients Saying
          </span>
        </h2>

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
