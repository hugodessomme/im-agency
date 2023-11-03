import Link from "next/link"

import { questions } from "@/config/faq"
import { routes } from "@/config/routes"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Heading } from "@/components/ui/heading"

export function Faq() {
  return (
    <section className="mb-24 xl:mb-40">
      <div className="container">
        <div className="gap-x-32 gap-y-9 xl:flex">
          <div className="xl:max-w-md">
            <Heading as="h2" size="3" prefix="FAQ" className="mb-4 xl:mb-8">
              Frequently Asked Questions
            </Heading>

            <p className="mb-8 text-foreground-subtle">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <Link href={routes.contact}>Contact Us</Link>
          </div>

          <div className="flex-1">
            <Accordion
              type="single"
              collapsible
              defaultValue={questions[0].label}
            >
              {questions.map((question) => (
                <AccordionItem key={question.label} value={question.label}>
                  <AccordionTrigger>{question.label}</AccordionTrigger>
                  <AccordionContent>{question.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
