import Link from "next/link"

import { posts } from "@/config/posts"
import { routes } from "@/config/routes"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { BlogPost } from "@/components/blog-post"

export function Blog() {
  return (
    <section className="mb-12 xl:mb-16">
      <div className="container">
        <div className="mb-12 flex flex-col items-start gap-y-9 xl:flex-row xl:items-end xl:justify-between">
          <Heading as="h2" size="3" prefix="Our Blog">
            Latest Blog Articles
          </Heading>

          <Button asChild variant="light">
            <Link href={routes.blog}>Discover All</Link>
          </Button>
        </div>

        <ul className="grid grid-cols-1 gap-x-7 gap-y-12 xl:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <li key={index}>
              <BlogPost post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
