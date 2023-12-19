import { Reference } from "@/types"

import { references, REFERENCES_PER_PAGE } from "@/config/references"

export async function getReferencesTotalPages(query: string) {
  try {
    // TODO: SQL query with "COUNT" for performance
    const filteredReferences = references.filter((reference) =>
      query
        ? reference.category.toLowerCase() === query.toLowerCase()
        : reference
    )
    const totalPages = Math.ceil(
      filteredReferences.length / REFERENCES_PER_PAGE
    )

    return totalPages
  } catch (error) {
    console.error("Error: ", error)
    throw new Error("Failed to fetch total number of references")
  }
}

export async function getFilteredReferences(
  query: string,
  currentPage: number
) {
  try {
    const start = (currentPage - 1) * REFERENCES_PER_PAGE
    const end = start + REFERENCES_PER_PAGE

    // TODO: SQL query
    const filteredReferences = references
      .filter((reference) =>
        query
          ? reference.category.toLowerCase() === query.toLowerCase()
          : reference
      )
      .slice(start, end)

    return filteredReferences
  } catch (error) {
    console.error("Error: ", error)
    throw new Error("Failed to fetch references")
  }
}

export async function getReferencesCountByCategory() {
  try {
    const totalByCategory = references.reduce<{
      categoriesTotal: {[key: string]: { label: string; count: number }},
      total: number
    }>((acc, reference) => {
      const category = reference.category
      const formattedCategory = category.toLowerCase()

      if (acc.categoriesTotal[formattedCategory]) {
        acc.categoriesTotal[formattedCategory].count++
      } else {
        acc.categoriesTotal[formattedCategory] = {
          label: category,
          count: 1,
        }
      }

      acc.total++

      return acc
    }, { categoriesTotal: {}, total: 0})

    const totalAllCategories = Object.values(totalByCategory).reduce(
      (acc, current) => acc + current.count,
      0
    )

    return {
      categories: {
        ...totalByCategory,
      },
      categoriesTotal: totalAllCategories,
    }
  } catch (error) {
    console.error("Error: ", error)
    throw new Error("Failed to count references by category")
  }
}
