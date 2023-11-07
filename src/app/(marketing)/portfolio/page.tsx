import { references } from "@/config/references"
import { Banner } from "@/components/banner"
import { HelpBuildDreamProject } from "@/components/help-build-dream-project"
import { PortfolioItem } from "@/components/portfolio-item"

export default function PortfolioPage() {
  return (
    <>
      <Banner
        title="Portfolio"
        description="Agency provides a full service range including technical skills, design, business understanding."
        className="mb-7 xl:mb-20"
      />

      <main className="mb-28">
        <div className="container">
          <ul className="grid grid-cols-1 gap-7 xl:grid-cols-3">
            {references.map((reference) => (
              <li key={reference.url} className="first:col-span-3">
                <PortfolioItem reference={reference} />
              </li>
            ))}
          </ul>
        </div>
      </main>

      <HelpBuildDreamProject />
    </>
  )
}
