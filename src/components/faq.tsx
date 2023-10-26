import Link from "next/link"

import { questions } from "@/config/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  return (
    <section className="mb-24 xl:mb-40">
      <div className="container">
        <div className="gap-x-32 gap-y-9 xl:flex">
          <div className="xl:max-w-md">
            <h2 className="mb-4 flex flex-col xl:mb-8">
              <span className="mb-5 uppercase text-primary">FAQ</span>
              <span className="text-[2.5rem] font-extrabold leading-[3rem]">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="mb-8 text-foreground-subtle">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <Link href="/">Contact Us</Link>
          </div>

          <div className="flex-1">
            <Accordion type="single" collapsible>
              {questions.map((question) => (
                <AccordionItem value={question.label} className="">
                  <AccordionTrigger className="">
                    {question.label}
                  </AccordionTrigger>
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
