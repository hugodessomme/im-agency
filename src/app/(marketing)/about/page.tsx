import { Heading } from "@/components/ui/heading"
import { Banner } from "@/components/banner"

export default function AboutPage() {
  return (
    <main className="mb-20">
      <Banner
        title="About Us"
        description="Agency provides a full service range including technical skills, design, business understanding."
        className="mb-20"
      />
      <div className="container">
        <div className="rounded-md bg-background-subtle p-5">
          <p>Work In Progress</p>
        </div>
      </div>
    </main>
  )
}
