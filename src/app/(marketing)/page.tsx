"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Briefcase,
  Check,
  ClockIcon,
  PlusCircle,
  Presentation,
  Shapes,
  StarIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import IconBadge from "@/components/icon-badge"

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

const blog = [
  {
    image: "/images/blog-1.png",
    category: "Stories",
    title: "Agency is a business you hire to outsource",
    date: "5 Nov, 2021",
  },
  {
    image: "/images/blog-2.png",
    category: "Design",
    title: "Outsource your digital marketing efforts",
    date: "29 Oct, 2021",
  },
  {
    image: "/images/blog-3.png",
    category: "Marketing",
    title: "Your business with a variety of digital",
    date: "21 Oct, 2021",
  },
]

export default function IndexPage() {
  const pathname = usePathname()
  return (
    <>
      {/* Heading */}
      <section className="mb-12 bg-tertiary py-8 xl:mb-[4.5rem]">
        <div className="container">
          <div className="flex flex-col gap-y-8 xl:flex-row">
            <div>
              <h1 className="flex flex-col">
                <span className="mb-5 uppercase text-primary">
                  Modern Studio
                </span>
                <span className="mb-3 text-[3.5rem] font-extrabold leading-[4rem] tracking-tight text-white xl:mb-6 xl:text-7xl">
                  We’re Help To Build Your Dream Project
                </span>
              </h1>
              <p className="mb-4 leading-8 text-white text-white/[.64] xl:mb-8">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>
              <div className="mb-11 flex gap-x-2 xl:mb-[6.75rem]">
                <Button className="flex-1 sm:flex-initial">How We Work</Button>
                <Button variant="link" className="flex-1 sm:flex-initial">
                  Contact Us
                </Button>
              </div>
              <div className="flex items-start gap-x-4">
                <Image
                  src="/images/testimony.png"
                  alt="Client: Meta Inc."
                  width="48"
                  height="48"
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-white/[.64]">
                    &quot;Put themselves in the merchant&apos;s shoes&quot;
                  </p>
                  <p className="text-white">Meta Inc.</p>
                </div>
              </div>
            </div>
            <Image
              src="/images/build-your-project.png"
              alt=""
              width="570"
              height="602"
              className="order-first mx-auto flex-shrink-0 xl:order-last"
              priority={true}
              quality={100}
            />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Logos */}
        <ul className="mb-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 xl:mb-[4.5rem] xl:flex-nowrap xl:justify-between">
          <li>
            <Image
              src="/images/logo-digitalside.png"
              alt="Digitalside"
              width="147"
              height="42"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-vortex.png"
              alt="Vortex"
              width="108"
              height="32"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-travel-explorer.png"
              alt="Travel Explorer"
              width="119"
              height="47"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-fuzion.png"
              alt="Fuzion"
              width="86"
              height="21"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-mediafury.png"
              alt="MediaFury"
              width="126"
              height="24"
            />
          </li>
        </ul>

        <Separator className="mb-16" />

        {/* About */}
        <section className="mb-24 xl:mb-36">
          <div className="mb-28 flex flex-col items-center gap-x-32 gap-y-4 xl:mb-40 xl:flex-row">
            <Image
              src="/images/experienced-design-agency.png"
              alt=""
              width="566"
              height="585"
              className="flex-shrink-0"
              quality={100}
            />
            <div className="space-y-5">
              <h2 className="flex flex-col">
                <span className="mb-5 uppercase text-primary">About</span>
                <span className="text-[2.5rem] font-extrabold leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
                  An Experienced Design Agency
                </span>
              </h2>
              <p className="text-xl leading-8">Provides a full service range</p>
              <p className="text-foreground-subtle">
                Ability to put themselves in the merchant&apos;s shoes. It is
                meant to partner on the long run, and work as an extension of
                the merchant&apos;s team.
              </p>
              <Button asChild variant="light">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>

          <ul className="xl:divide-x-background-subtle divide-y divide-background-subtle rounded-md border border-background-subtle xl:flex xl:divide-x xl:divide-y-0">
            <li className="flex-1 px-12 py-11">
              <span className="mb-3 block text-[2.5rem] font-extrabold leading-[3rem]">
                42%
              </span>
              <span className="text-xl">Years of experience</span>
            </li>
            <li className="flex-1 px-12 py-11">
              <span className="mb-3 block text-[2.5rem] font-extrabold leading-[3rem]">
                73 +
              </span>
              <span className="text-xl">Agency members</span>
            </li>
            <li className="flex-1 px-12 py-11">
              <span className="mb-3 block text-[2.5rem] font-extrabold leading-[3rem]">
                5.000
              </span>
              <span className="text-xl">Projects complete</span>
            </li>
          </ul>
        </section>

        {/* How We Work */}
        <section className="mb-16 flex flex-col gap-x-32 gap-y-20 xl:mb-24 xl:flex-row">
          <div className="space-y-5 xl:w-[29.5rem]">
            <h2 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">How we work</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem]">
                Making Your Projects Look Awesome
              </span>
            </h2>
            <p className="text-foreground-subtle">
              Technical skills, design, business understanding, ability to put
              themselves in the merchant&apos;s shoes.
            </p>
            <p>
              <Link href="/services">Read More</Link>
            </p>
          </div>
          <ol className="space-y-8">
            <li className="flex items-center gap-x-7 xl:gap-x-16">
              <span className="w-12 text-7xl font-extrabold">1</span>
              <span className="text-2xl font-bold leading-6">
                Full service range including
              </span>
            </li>
            <li className="flex items-center gap-x-7 xl:gap-x-16">
              <span className="w-12 text-7xl font-extrabold">2</span>
              <span className="text-2xl font-bold leading-6">
                Technical skills, design, business
              </span>
            </li>
            <li className="flex items-center gap-x-7 xl:gap-x-16">
              <span className="w-12 text-7xl font-extrabold">3</span>
              <span className="text-2xl font-bold leading-6">
                Themselves in the merchant&apos;s
              </span>
            </li>
          </ol>
        </section>

        <Separator className="mb-32" />

        {/* Video Reel */}
        <section className="mb-20 flex flex-col items-center gap-x-32 gap-y-6 xl:mb-52 xl:flex-row">
          <div className="h-[368px] w-full max-w-[570px] rounded bg-neutral-400"></div>
          <div className="space-y-5 xl:w-[29.5rem]">
            <h2 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">Video Reel</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem]">
                Unlock The Greatest Value Possible
              </span>
            </h2>
            <p className="text-foreground-subtle">
              Design, business understanding, ability to put themselves in the
              merchant&apos;s shoes meant to partner.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-28 xl:mb-52 ">
          <div className="mb-28 flex flex-col items-center gap-x-32 gap-y-20 xl:mb-52 xl:flex-row">
            <Image
              src="/images/give-site-new-look.png"
              alt=""
              width="529"
              height="551"
              className="mx-auto flex-shrink-0 xl:order-last"
              quality={100}
            />
            <div className="space-y-5 xl:w-[29.5rem]">
              <h2 className="flex flex-col">
                <span className="mb-5 uppercase text-primary">Features</span>
                <span className="text-[2.5rem] font-extrabold leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
                  Give Your Site A New Look
                </span>
              </h2>
              <p className="text-xl leading-8">
                Service range including technical skills, design, business
                understanding.
              </p>
              <ul className="space-y-4 text-foreground-subtle">
                <li className="flex items-center gap-x-4">
                  <IconBadge>
                    <Check className="h-6 w-6" />
                  </IconBadge>
                  Range including technical skills
                </li>
                <li className="flex items-center gap-x-4">
                  <IconBadge>
                    <Check className="h-6 w-6" />
                  </IconBadge>
                  Business understanding
                </li>
                <li className="flex items-center gap-x-4">
                  <IconBadge>
                    <Check className="h-6 w-6" />
                  </IconBadge>
                  Partner on the long run
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-x-32 gap-y-20 xl:flex-row">
            <div className="space-y-5 xl:w-[29.5rem]">
              <p className="mb-5 uppercase text-primary">Features</p>
              <p className="text-xl leading-8">
                Long run, and work as an extension of the merchant&apos;s team.
              </p>
              <p>
                <Link href="/services">Read More</Link>
              </p>
            </div>
            <ul className="xl:flex xl:items-end">
              <li className="rounded-t-md border border-background-subtle bg-white p-12 xl:rounded-bl-md">
                <IconBadge size="lg" className="mb-10">
                  <Shapes className="h-8 w-8" />
                </IconBadge>
                <p className="mb-5 text-2xl font-bold">Professional</p>
                <p className="leading-8 text-foreground-subtle">
                  Full service range including technical skills, design.
                </p>
              </li>
              <li className="rounded-b-md border border-t-0 border-background-subtle p-12 pt-[6.5rem] xl:rounded-bl-none xl:rounded-tr-md xl:border-l-0 xl:border-t">
                <p className="mb-5 text-2xl font-bold">Accessibility</p>
                <p className="leading-8 text-foreground-subtle">
                  Business understanding, ability to put themselves.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="mb-28 xl:mb-36">
          <div className="mb-28 flex flex-col items-center gap-x-28 gap-y-4 xl:mb-40 xl:flex-row">
            <Image
              src="/images/making-complex-digital-products.png"
              alt=""
              width="580"
              height="570"
              className="flex-shrink-0"
              quality={100}
            />
            <div className="space-y-5">
              <h2 className="flex flex-col">
                <span className="mb-5 uppercase text-primary">Service</span>
                <span className="text-[2.5rem] font-extrabold leading-[2.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
                  Making Complex Digital Products
                </span>
              </h2>
              <p className="text-xl leading-8">
                Agency provides a full service range including technical skills,
                design, business.
              </p>
              <Button asChild variant="light">
                <Link href="/about">Explore</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="mb-9 flex flex-col">
              <span className="mb-5 uppercase text-primary">Service</span>
              <span className="text-[2.5rem] font-extrabold leading-[3rem]">
                How Our Agency Can Help
              </span>
            </h2>

            <ul className="divide divide-y divide-background-subtle rounded-md border border-background-subtle xl:flex xl:items-end xl:divide-x xl:divide-y-0">
              <li className="flex-1 px-7 py-12">
                <IconBadge size="lg" className="mb-10">
                  <Presentation className="h-8 w-8" />
                </IconBadge>
                <h3 className="mb-5 text-2xl font-bold">Design</h3>
                <p className="mb-6 leading-8 text-foreground-subtle">
                  Agency provides a full service range including technical
                  skills, design.
                </p>
                <p>
                  <Link href="/services">Discover More</Link>
                </p>
              </li>
              <li className="flex-1 px-7 py-12">
                <IconBadge size="lg" className="mb-10">
                  <Briefcase className="h-8 w-8" />
                </IconBadge>
                <h3 className="mb-5 text-2xl font-bold">Development</h3>
                <p className="mb-6 leading-8 text-foreground-subtle">
                  Full service range including technical skills, design,
                  business.
                </p>
                <p>
                  <Link href="/services">Discover More</Link>
                </p>
              </li>
              <li className="flex-1 px-7 py-12">
                <IconBadge size="lg" className="mb-10">
                  <Briefcase className="h-8 w-8" />
                </IconBadge>
                <h3 className="mb-5 text-2xl font-bold">Marketing</h3>
                <p className="mb-6 leading-8 text-foreground-subtle">
                  Technical skills, design, business understanding, ability.
                </p>
                <p>
                  <Link href="/services">Explore Now</Link>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Portfolio */}
      <div className="mb-24 bg-tertiary py-24 xl:mb-32">
        <section className="mb-28">
          <div className="container">
            <h2 className="mx-auto mb-9 flex max-w-md flex-col text-center">
              <span className="mb-5 uppercase text-primary">Portfolio</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem] text-white xl:text-[3.5rem] xl:leading-[4rem]">
                Latest Work
              </span>
            </h2>

            <ul className="mb-16 flex flex-wrap justify-center gap-x-14 gap-y-4">
              <li>
                <Link href="/" className="text-white/[.64]">
                  <span className={pathname === "/" ? "text-white" : ""}>
                    Show All
                  </span>
                  <span className="inline-block -translate-y-2 text-sm">
                    14
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/" className="text-white/[.64]">
                  <span className={pathname === "/design" ? "text-white" : ""}>
                    Design
                  </span>
                  <span className="inline-block -translate-y-2 text-sm">6</span>
                </Link>
              </li>

              <li>
                <Link href="/" className="text-white/[.64]">
                  <span
                    className={pathname === "/branding" ? "text-white" : ""}
                  >
                    Branding
                  </span>
                  <span className="inline-block -translate-y-2 text-sm">4</span>
                </Link>
              </li>

              <li>
                <Link href="/" className="text-white/[.64]">
                  <span
                    className={pathname === "/illustration" ? "text-white" : ""}
                  >
                    Illustration
                  </span>
                  <span className="inline-block -translate-y-2 text-sm">3</span>
                </Link>
              </li>

              <li>
                <Link href="/" className="text-white/[.64]">
                  <span className={pathname === "/motion" ? "text-white" : ""}>
                    Motion
                  </span>
                  <span className="inline-block -translate-y-2 text-sm">1</span>
                </Link>
              </li>
            </ul>

            <div className="mb-16 grid grid-cols-1 gap-7 xl:grid-cols-12">
              <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-4 xl:px-12">
                <Badge className="mb-6">Illustration</Badge>
                <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
                  Work Media
                </p>
              </div>
              <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-8 xl:px-12">
                <Badge className="mb-6">Illustration</Badge>
                <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
                  Work Media
                </p>
              </div>
              <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-8 xl:px-12">
                <Badge className="mb-6">Illustration</Badge>
                <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
                  Work Media
                </p>
              </div>
              <div className="flex h-[26rem] flex-col items-start justify-end overflow-hidden rounded-md bg-neutral-400 px-7 py-12 xl:col-span-4 xl:px-12">
                <Badge className="mb-6">Illustration</Badge>
                <p className="text-[2.5rem] font-extrabold leading-[3rem] text-white">
                  Work Media
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-white"
                )}
              >
                Explore more
              </Link>
            </div>
          </div>
        </section>

        {/* TODO: We Help Companies Move Faster */}

        {/* Events */}
        <section className="mb-28">
          <div className="container">
            <h2 className="mx-auto mb-9 flex max-w-md flex-col text-center">
              <span className="mb-5 uppercase text-primary">Events</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem] text-white xl:text-[3.5rem] xl:leading-[4rem]">
                Explore Future Conferences
              </span>
            </h2>

            <ul className="mb-16 grid grid-cols-1 gap-7 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((event, index) => (
                <li
                  key={index}
                  className="relative rounded border border-tertiary-subtle px-10 py-9 text-white"
                >
                  <p className="mb-5 flex gap-3">
                    <span className="text-7xl font-extrabold">3</span>
                    <span className="text-2xl font-bold">
                      <span className="block">November</span>
                      <span>2021</span>
                    </span>
                  </p>
                  <p className="mb-9">
                    <ClockIcon className="mr-2 inline h-4 w-4 text-primary" />
                    9:00 am - 3:00 pm
                  </p>
                  <Separator className="mb-10 bg-tertiary-subtle" />
                  <h3 className="mb-5 text-2xl">Design Weeks</h3>
                  <p className="mb-7 leading-8 text-white/[.64]">
                    Digital agency is a business you hire to outsource your
                    digital.
                  </p>
                  <Link href="/">
                    <span className="absolute inset-0"></span>Explore Now
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-white"
                )}
              >
                Explore more
              </Link>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="container">
            <h2 className="mb-9 flex max-w-xl flex-col">
              <span className="mb-5 uppercase text-primary">Our Team</span>
              <span className="text-[2.5rem] font-extrabold leading-[2.5rem] text-white xl:text-[3.5rem] xl:leading-[4rem]">
                Team of Designers and Developers
              </span>
            </h2>
            <ul className="mb-28 flex flex-col gap-7 xl:flex-row">
              {Array.from({ length: 4 }).map((member, index) => (
                <li key={index}>
                  <div className="mb-6 h-[17rem] w-full rounded border border-tertiary-subtle xl:w-[17rem]"></div>
                  <h3 className="mb-1 text-2xl font-bold text-white">
                    Azah Anyeni
                  </h3>
                  <p className="text-white/[.64]">Designer</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-x-32 gap-y-10 xl:flex-row xl:items-center">
              <div className="h-64 w-full overflow-hidden rounded-md bg-neutral-400 xl:h-[28rem]"></div>
              <div>
                <p className="mb-7 uppercase text-primary">Founder Words</p>
                <p className="mb-6 text-2xl font-bold text-white xl:text-[2.5rem] xl:leading-[3rem]">
                  Digital agency is a business you hire to outsource your
                  digital marketing efforts
                </p>
                <p className="mb-1 text-xl text-white">Ren Delan</p>
                <p className="text-sm text-white/[.64]">Founder</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials */}
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

      {/* Pricing */}
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
                          <PlusCircle
                            fill="rgb(239 109 88 / var(--tw-text-opacity))"
                            className="text-white"
                          />
                        ) : (
                          <PlusCircle
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

      {/* FAQ */}
      {/* Our Awards */}
      {/* Our Blog */}
      <section className="mb-12 mb-16">
        <div className="container">
          <div className="mb-12 flex flex-col items-start gap-y-9 xl:flex-row xl:items-end xl:justify-between">
            <h2 className="flex flex-col">
              <span className="mb-5 uppercase text-primary">Our Blog</span>
              <span className="text-[2.5rem] font-extrabold leading-[3rem]">
                Latest Blog Articles
              </span>
            </h2>
            <Button asChild variant="light">
              <Link href="/">Discover All</Link>
            </Button>
          </div>

          <ul className="flex flex-col gap-x-7 gap-y-12 xl:flex-row">
            {blog.map((post, index) => (
              <li key={index} className="relative">
                <Image
                  src={post.image}
                  alt=""
                  className="mb-6 rounded-md"
                  width="370"
                  height="224"
                  quality="100"
                />
                <p className="mb-4 text-xl leading-8">{post.category}</p>
                <h3 className="text-2xl font-bold">
                  <span className="absolute inset-0"></span>
                  {post.title}
                </h3>
                <p className="text-foreground-subtle">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
