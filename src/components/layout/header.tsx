import Image from "next/image"
import Link from "next/link"

import { routes } from "@/config/routes"
import { site } from "@/config/site"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"

export function Header() {
  return (
    <header className="bg-tertiary py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={routes.home}>
            <Image
              src="/images/logo.svg"
              width="152"
              height="48"
              alt={site.name}
            />
          </Link>

          <MainNav items={site.headerNav} />
          <MobileNav items={site.headerNav} />
        </div>
      </div>
    </header>
  )
}
