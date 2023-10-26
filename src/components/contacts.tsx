import { CompassIcon, MailIcon, PhoneIcon } from "lucide-react"

import IconBadge from "@/components/icon-badge"

export function Contacts() {
  return (
    <section className="mb-32">
      <div className="container">
        <ul className="divide-y divide-background-subtle rounded-md border border-background-subtle xl:flex xl:divide-x xl:divide-y-0">
          <li className="flex-1 px-7 py-8 xl:px-12">
            <div className="mb-6 flex items-center gap-x-6">
              <IconBadge size="md">
                <PhoneIcon className="h-6 w-6" />
              </IconBadge>
              <span className="uppercase text-primary">Phone</span>
            </div>
            <p>+1 (234) 567-89-00</p>
          </li>
          <li className="flex-1 px-7 py-8 xl:px-12">
            <div className="mb-6 flex items-center gap-x-6">
              <IconBadge size="md">
                <MailIcon className="h-6 w-6" />
              </IconBadge>
              <span className="uppercase text-primary">Email</span>
            </div>
            <p>info@agency.com</p>
          </li>
          <li className="flex-1 px-7 py-8 xl:px-12">
            <div className="mb-6 flex items-center gap-x-6">
              <IconBadge size="md">
                <CompassIcon className="h-6 w-6" />
              </IconBadge>
              <span className="uppercase text-primary">Address</span>
            </div>
            <p>2247 Lunetta Street, TX 76301</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
