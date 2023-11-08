import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MainNavProps {
  items: {
    label: string
    url: string
  }[]
}

export function MobileNav({ items }: MainNavProps) {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="text-white">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-2xl">Menu</SheetTitle>
          </SheetHeader>

          <nav className="pt-8">
            <ul className="flex flex-col gap-y-10">
              {items.map((item) => (
                <li key={item.label}>
                  <Link href={item.url} className="text-xl text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
