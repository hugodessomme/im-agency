import { Separator } from "@/components/ui/separator"
import { Banner } from "@/components/banner"
import { Contacts } from "@/components/contacts"
import { Faq } from "@/components/faq"

export default function ContactPage() {
  return (
    <>
      <Banner
        title="Contact"
        description="Agency provides a full service range including technical skills, design, business understanding."
        className="mb-16 xl:mb-0"
      />
      <Contacts />
      <Faq />
      <div className="container">
        <Separator className="mb-24" />
      </div>
    </>
  )
}
