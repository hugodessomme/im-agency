import Link from "next/link"
import { PlusCircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const pricing = [
  {
    offer: "Consultation",
    price: "Free",
    popular: false,
    content: "Your digital marketing efforts, instead of handling in-house.",
    options: [
      { label: "Brand Design", included: true },
      { label: "Market Analysis", included: false },
      { label: "Production", included: false },
    ],
  },
  {
    offer: "Design",
    price: "$1500",
    popular: true,
    content:
      "Provide your business with a variety of digital solutions to promote.",
    options: [
      { label: "Brand Design", included: true },
      { label: "Market Analysis", included: true },
      { label: "Production", included: false },
    ],
  },
  {
    offer: "Design+Code",
    price: "$2900",
    popular: false,
    content: "Help you hit your marketing goals and grow your business.",
    options: [
      { label: "Brand Design", included: true },
      { label: "Market Analysis", included: true },
      { label: "Production", included: true },
    ],
  },
]

export function Pricing() {
  return (
    <section className="mb-24 xl:mb-48">
      <div className="container">
        <h2 className="mb-4 flex flex-col">
          <span className="mb-5 uppercase text-primary">Pricing</span>
          <span className="text-[2.5rem] font-extrabold leading-[3rem]">
            Check Our Pricing Plans
          </span>
        </h2>

        <ul className="xl:flex xl:items-end">
          {pricing.map((price, index) => {
            const isFirst = index === 0
            const isPopular = price.popular
            const isLast = index === pricing.length - 1

            return (
              <li
                key={index}
                className={cn(
                  "border border-background-subtle px-7 py-11",
                  isFirst
                    ? "rounded-t-md xl:rounded-bl-md xl:rounded-tr-none xl:border-r-0"
                    : "",
                  isPopular ? "bg-white xl:rounded-t-md" : "",
                  isLast
                    ? "rounded-b-md xl:rounded-bl-none xl:rounded-tr-md xl:border-l-0"
                    : ""
                )}
              >
                {isPopular && <Badge className="mb-6">Popular</Badge>}
                <p className="mb-4 uppercase text-primary">{price.offer}</p>
                <p className="mb-4 text-[2.5rem] font-extrabold leading-[3rem]">
                  {price.price}
                </p>
                <p className="mb-9 leading-8 text-foreground-subtle">
                  {price.content}
                </p>
                <ul className="mb-9 space-y-4">
                  {price.options.map((option, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-center gap-x-4",
                        option.included
                          ? "text-foreground"
                          : "text-foreground-subtle"
                      )}
                    >
                      {option.included ? (
                        <PlusCircleIcon
                          fill="rgb(239 109 88 / var(--tw-text-opacity))"
                          className="text-white"
                        />
                      ) : (
                        <PlusCircleIcon
                          fill="rgba(246, 218, 202, 1)"
                          className="text-white"
                        />
                      )}
                      {option.label}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={isPopular ? "default" : "light"}>
                  <Link href="/">Contact Us</Link>
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
