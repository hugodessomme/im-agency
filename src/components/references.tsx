import { getFilteredReferences } from "@/lib/data"

import { PortfolioItem } from "./portfolio-item"

interface ReferencesProps {
  query: string
  currentPage: number
}

export async function References({ query, currentPage }: ReferencesProps) {
  const references = await getFilteredReferences(query, currentPage)
  console.log({ references })

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
