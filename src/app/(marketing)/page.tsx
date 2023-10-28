import { Separator } from "@/components/ui/separator"
import { About } from "@/components/about"
import { Awards } from "@/components/awards"
import { Blog } from "@/components/blog"
import { Clients } from "@/components/clients"
import { Contacts } from "@/components/contacts"
import { Events } from "@/components/events"
import { Faq } from "@/components/faq"
import { Features } from "@/components/features"
import { GetStarted } from "@/components/get-started"
import { HelpBuildDreamProject } from "@/components/help-build-dream-project"
import { Hero } from "@/components/hero"
import { HowWeWork } from "@/components/how-we-work"
import { Newsletter } from "@/components/newsletter"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Video } from "@/components/video"

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
