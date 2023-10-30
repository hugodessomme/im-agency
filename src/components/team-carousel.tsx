"use client"

import * as React from "react"
import Image from "next/image"
import { Team } from "@/types"
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

interface TeamCarouselProps {
  items: Team[]
}

const options: EmblaOptionsType = {
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 1218px)": {
      slidesToScroll: 4,
    },
  },
}

export function TeamCarousel({ items }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )

  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = React.useCallback(
    (emblaApi: EmblaCarouselType) => setScrollSnaps(emblaApi.scrollSnapList()),
    []
  )

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="mb-28">
      <div className="mb-9 items-end justify-between xl:flex">
        <Heading
          as="h2"
          size="2"
          color="white"
          prefix="Our Team"
          className="xl:max-w-xl"
        >
          Team of Designers and Developers
        </Heading>

        {/* Arrows */}
        <div className="hidden gap-x-4 xl:flex">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full text-white"
            disabled={prevBtnDisabled}
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full text-white"
            disabled={nextBtnDisabled}
          >
            <ArrowRightIcon className="h-5 w-5" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="-mx-px mb-14 overflow-hidden px-px" ref={emblaRef}>
        <ul className="flex gap-x-7">
          {items.map((team, index) => (
            <li
              key={index}
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-full xl:basis-[17rem]"
            >
              <div className="mb-6 flex h-[17rem] w-full items-end justify-center rounded-md border border-tertiary-subtle xl:w-[17rem]">
                <Image
                  src={team.image.url}
                  alt={team.fullname}
                  width={team.image.width}
                  height={team.image.height}
                  quality={100}
                />
              </div>
              <h3 className="mb-1 text-2xl font-bold text-white">
                {team.fullname}
              </h3>
              <p className="text-white/[.64]">{team.job}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Dots */}
      <ul className="flex items-center justify-center gap-x-4">
        {scrollSnaps.map((_, index) => (
          <li key={index}>
            <button
              onClick={() => scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full border border-tertiary-subtle",
                index === selectedIndex && "border-primary bg-primary"
              )}
            >
              <span className="sr-only">
                Slide {index + 1} of {scrollSnaps.length}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
