import { getFilteredReferences } from "@/lib/data"

import { PortfolioItem } from "./portfolio-item"

interface PortfolioGridProps {
  query: string
  currentPage: number
}

export async function PortfolioGrid({
  query,
  currentPage,
}: PortfolioGridProps) {
  const references = await getFilteredReferences(query, currentPage)

  return (
    <ul className="mb-12 grid grid-cols-1 gap-7 xl:mb-20 xl:grid-cols-3">
      {references.map((reference) => (
        <li key={reference.url} className="col-span-1">
          <PortfolioItem reference={reference} />
        </li>
      ))}
    </ul>
  )
}
