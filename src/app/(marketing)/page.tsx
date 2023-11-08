import { Separator } from "@/components/ui/separator"
import { About } from "@/components/block/about"
import { Awards } from "@/components/block/awards"
import { Blog } from "@/components/block/blog"
import { Clients } from "@/components/block/clients"
import { Contacts } from "@/components/block/contacts"
import { Events } from "@/components/block/events"
import { Faq } from "@/components/block/faq"
import { Features } from "@/components/block/features"
import { GetStarted } from "@/components/block/get-started"
import { HelpBuildDreamProject } from "@/components/block/help-build-dream-project"
import { Hero } from "@/components/block/hero"
import { HowWeWork } from "@/components/block/how-we-work"
import { Newsletter } from "@/components/block/newsletter"
import { Portfolio } from "@/components/block/portfolio"
import { Pricing } from "@/components/block/pricing"
import { Services } from "@/components/block/services"
import { Team } from "@/components/block/team"
import { Testimonials } from "@/components/block/testimonials"
import { Video } from "@/components/block/video"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Clients />

      <div className="container">
        <Separator className="mb-16" />
      </div>

      <About />
      <HowWeWork />

      <div className="container">
        <Separator className="mb-32" />
      </div>

      <Video />
      <Features />
      <Services />

      <div className="mb-24 bg-tertiary py-24 xl:mb-32">
        <Portfolio />
        <GetStarted />
        <Events />
        <Team />
      </div>

      <Testimonials />
      <Pricing />
      <Faq />
      <Awards />
      <Blog />

      <div className="container">
        <Separator className="mb-[4.75rem]" />
      </div>

      <Newsletter />
      <Contacts />
      <HelpBuildDreamProject />
    </>
  )
}
