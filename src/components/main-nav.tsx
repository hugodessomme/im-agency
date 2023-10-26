import Link from "next/link"

import { Button } from "@/components/ui/button"

interface MainNavProps {
  items: {
    label: string
    url: string
  }[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <>
      <nav className="hidden xl:block">
        <ul className="flex gap-x-16">
          {items.map((item) => (
            <li key={item.label}>
              <Button asChild variant="link">
                <Link href={item.url} className="text-white hover:underline">
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <Button variant="outline" className="hidden text-white xl:inline-block">
        Contact
      </Button>
    </>
  )
}
