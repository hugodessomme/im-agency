import { CheckIcon } from "lucide-react"

import { services } from "@/config/services"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Heading } from "@/components/ui/heading"
import { Banner } from "@/components/banner"
import { HelpBuildDreamProject } from "@/components/help-build-dream-project"
import { HowWeWork } from "@/components/how-we-work"
import { IconBadge } from "@/components/icon-badge"

export default function ServicesPage() {
  return (
    <>
      <main className="mb-28">
        <Banner
          title="Services"
          description="Agency provides a full service range including technical skills, design, business understanding."
          className="mb-32"
        />

        <div className="container">
          <div className="mb-24 flex flex-col gap-x-32 gap-y-7 xl:flex-row">
            <Heading as="h2" size="3" prefix="Services" className="-mt-11">
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </Heading>
            <div className="space-y-10 text-foreground-subtle">
              <p>
                Ability to put themselves in the merchant&apos;s shoes. It is
                meant to partner on the long run, and work as an extension of
                the merchant&apos;s team.
              </p>
              <p>
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you.
              </p>
            </div>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue={services[0].label}
            className="mb-24 xl:mb-28"
          >
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <AccordionItem key={service.label} value={service.label}>
                  <AccordionTrigger>
                    <Heading as="h3" size="2">
                      <IconBadge
                        size="lg"
                        className="mr-9 hidden xl:inline-flex"
                      >
                        <Icon className="h-8 w-8" />
                      </IconBadge>
                      {service.label}
                    </Heading>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-5 xl:ml-auto xl:w-[35.75rem]">
                      <Heading as="h2" size="3">
                        Agency is a business you hire to outsource your digital
                        marketing efforts
                      </Heading>

                      <p className="leading-8 text-foreground-subtle">
                        Business you hire to outsource your digital marketing
                        efforts, instead of handling in-house. They can provide
                        your business with a variety of digital solutions to
                        promote your product or service online and help you.
                      </p>

                      <ul className="space-y-4 text-foreground-subtle">
                        <li className="flex items-center gap-x-4">
                          <IconBadge>
                            <CheckIcon className="h-6 w-6" />
                          </IconBadge>
                          Web Development
                        </li>
                        <li className="flex items-center gap-x-4">
                          <IconBadge>
                            <CheckIcon className="h-6 w-6" />
                          </IconBadge>
                          Brand Strategy
                        </li>
                        <li className="flex items-center gap-x-4">
                          <IconBadge>
                            <CheckIcon className="h-6 w-6" />
                          </IconBadge>
                          Art Direction
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </main>

      <HowWeWork />
      <HelpBuildDreamProject />
    </>
  )
}
