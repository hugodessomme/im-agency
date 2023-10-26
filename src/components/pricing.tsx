import Link from "next/link"
import { PlusCircleIcon } from "lucide-react"

import { plans } from "@/config/plans"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
          {plans.map((plan, index) => {
            const isFirst = index === 0
            const isPopular = plan.popular
            const isLast = index === plans.length - 1

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
                <p className="mb-4 uppercase text-primary">{plan.offer}</p>
                <p className="mb-4 text-[2.5rem] font-extrabold leading-[3rem]">
                  {plan.price}
                </p>
                <p className="mb-9 leading-8 text-foreground-subtle">
                  {plan.content}
                </p>
                <ul className="mb-9 space-y-4">
                  {plan.options.map((option) => (
                    <li
                      key={option.label}
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
