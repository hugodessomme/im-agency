import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

import { site } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import IconBadge from "@/components/icon-badge"

export function Footer() {
  return (
    <footer className="mb-11">
      <div className="container">
        <div className="mb-16 flex flex-col gap-x-3 gap-y-12 text-center xl:flex-row xl:justify-between xl:text-left">
          <p className="text-2xl font-extrabold">{site.name}</p>

          {site.footerNav.map((nav) => (
            <nav className="leading-8">
              <p className="mb-4 uppercase text-primary">{nav.title}</p>
              <ul>
                {nav.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <ul className="flex justify-center gap-x-3">
            {site.socials.map((item) => {
              const Icon = item.icon

              return (
                <li>
                  <Link href="/">
                    <IconBadge className="h-12 w-12">
                      <Icon className="h-6 w-6" />
                    </IconBadge>
                  </Link>
                </li>
              )
            })}
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
