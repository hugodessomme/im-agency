import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import IconBadge from "@/components/icon-badge"

export function Footer() {
  return (
    <footer className="mb-11">
      <div className="container">
        <div className="mb-16 flex flex-col gap-x-3 gap-y-12 text-center xl:flex-row xl:justify-between xl:text-left">
          <p className="text-2xl font-extrabold">Agency</p>

          <nav className="leading-8">
            <p className="mb-4 uppercase text-primary">Menu</p>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav className="leading-8">
            <p className="mb-4 uppercase text-primary">Service</p>
            <ul>
              <li>
                <Link href="/">Design</Link>
              </li>
              <li>
                <Link href="/">Development</Link>
              </li>
              <li>
                <Link href="/">Marketing</Link>
              </li>
              <li>
                <Link href="/">See More</Link>
              </li>
            </ul>
          </nav>
          <ul className="flex justify-center gap-x-3">
            <li>
              <Link href="/">
                <IconBadge className="h-12 w-12">
                  <FacebookIcon className="h-6 w-6" />
                </IconBadge>
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBadge className="h-12 w-12">
                  <TwitterIcon className="h-6 w-6" />
                </IconBadge>
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBadge className="h-12 w-12">
                  <InstagramIcon className="h-6 w-6" />
                </IconBadge>
              </Link>
            </li>
          </ul>
        </div>
        <Separator className="mb-11" />
        <div className="flex flex-wrap gap-y-8 xl:flex-nowrap xl:justify-between">
          <p className="w-full text-center text-foreground-subtle xl:w-auto xl:text-left">
            Copyright © 2022 Laaqiq. All Rights Reserved.
          </p>

          <ul className="flex w-full justify-center gap-x-16 xl:w-auto">
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
