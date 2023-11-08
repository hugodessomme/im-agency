import { getReferencesTotalPages } from "@/lib/data"
import { Banner } from "@/components/banner"
import { HelpBuildDreamProject } from "@/components/block/help-build-dream-project"
import { Pagination } from "@/components/pagination"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string }
}) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getReferencesTotalPages(query)

  return (
    <>
      <Banner
        title="Portfolio"
        description="Agency provides a full service range including technical skills, design, business understanding."
        className="mb-7 xl:mb-20"
      />

      <main className="mb-28">
        <div className="container">
          <PortfolioGrid query={query} currentPage={currentPage} />

          <Pagination totalPages={totalPages} />
        </div>
      </main>

      <HelpBuildDreamProject />
    </>
  )
}
