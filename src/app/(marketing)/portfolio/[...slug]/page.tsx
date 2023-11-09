import Image from "next/image"

import { references } from "@/config/references"
import { routes } from "@/config/routes"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { BackLink } from "@/components/back-link"
import { HelpBuildDreamProject } from "@/components/block/help-build-dream-project"
import { PortfolioItem } from "@/components/portfolio-item"

interface PortfolioDetailPageProps {
  params: {
    slug: string
  }
}

export default function PortfolioDetail({ params }: PortfolioDetailPageProps) {
  const relatedReferences = references.slice(0, 2)

  return (
    <>
      <BackLink href={routes.portfolio} label="Back to Portfolio" />
      <main>
        <div className="container mb-16 max-w-[39rem]">
          <Heading className="mb-5">Work Media Project</Heading>
          <p className="mb-8 text-xl leading-8">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
          <p className="mb-14 leading-8 text-foreground-subtle">
            Outsource your digital marketing efforts, instead of handling
            in-house. They can provide your business with a variety of digital
            solutions to promote your product or service online and help you.
          </p>

          <div className="flex flex-col gap-y-11 xl:flex-row">
            <div className="flex-1">
              <p className="mb-5 uppercase text-primary">Category</p>
              <ul className="leading-8">
                <li>Art Direction</li>
                <li>User Interface</li>
                <li>Branding Strategy</li>
                <li>Print Design</li>
                <li>3D Render</li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col gap-y-11">
              <div>
                <p className="mb-5 uppercase text-primary">Client</p>
                <Image
                  src="/images/logo-vortex.png"
                  alt="Vortex"
                  width={108}
                  height={32}
                />
              </div>

              <div>
                <p className="mb-5 uppercase text-primary">Date</p>
                <p>Dec 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-16">
          <Image
            src="/images/portfolio-detail-1.png"
            alt=""
            width={1170}
            height={720}
            quality={100}
            className="rounded-md"
          />
        </div>

        <div className="container mb-16 max-w-[39rem] leading-8 text-foreground-subtle">
          <Heading as="h2" size="3" className="mb-8">
            Problem
          </Heading>
          <p className="mb-2">
            Ability to put themselves in the merchant&apos;s shoes. It is meant
            to partner on the long run, and work as an extension of the
            merchant&apos;s team.
          </p>
          <p>
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house. They can provide
            your business with a variety of digital solutions to promote your
            product or service online and help you.
          </p>
        </div>

        <div className="container mb-16">
          <div className="grid grid-cols-2 grid-rows-4 gap-4 xl:grid-cols-4 xl:grid-rows-2 xl:gap-7">
            <div className="relative col-span-2 row-span-2 h-[16.25rem] overflow-hidden rounded-md xl:h-[28rem]">
              <Image
                src="/images/portfolio-detail-2.png"
                alt=""
                quality={100}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[7.5rem] overflow-hidden rounded-md xl:h-[13rem]">
              <Image
                src="/images/portfolio-detail-3.png"
                alt=""
                quality={100}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[7.5rem] overflow-hidden rounded-md xl:h-[13rem]">
              <Image
                src="/images/portfolio-detail-4.png"
                alt=""
                quality={100}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[7.5rem] overflow-hidden rounded-md xl:h-[13rem]">
              <Image
                src="/images/portfolio-detail-5.png"
                alt=""
                quality={100}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[7.5rem] overflow-hidden rounded-md xl:h-[13rem]">
              <Image
                src="/images/portfolio-detail-6.png"
                alt=""
                quality={100}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container mb-16 max-w-[39rem] leading-8 text-foreground-subtle">
          <Heading as="h2" size="3" className="mb-8">
            Solution
          </Heading>
          <p className="mb-2">
            Put themselves in the merchant&apos;s shoes. It is meant to partner
            on the long run, and work as an extension of the merchant&apos;s
            team.
          </p>
          <p>
            Agency is a business you hire to outsource your digital marketing
            efforts, instead of handling in-house. They can provide your
            business with a variety of digital solutions to promote your product
            or service online and help you.
          </p>
        </div>
      </main>

      <div className="container">
        <Separator className="mb-[4.5rem]" />
      </div>

      {relatedReferences.length ? (
        <section className="mb-24 xl:mb-32">
          <div className="container">
            <Heading as="h2" size="4" className="mb-10">
              Related Articles
            </Heading>

            <ul className="grid grid-cols-1 gap-7 xl:grid-cols-2">
              {relatedReferences.map((reference) => (
                <li key={reference.url}>
                  <PortfolioItem reference={reference} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <HelpBuildDreamProject />
    </>
  )
}
