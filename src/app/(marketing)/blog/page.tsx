import Link from "next/link"

import { posts } from "@/config/posts"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Banner } from "@/components/banner"
import { BlogPost } from "@/components/blog-post"
import { HelpBuildDreamProject } from "@/components/help-build-dream-project"
import { Newsletter } from "@/components/newsletter"

export default function Blog() {
  const featuredPosts = posts.filter((post) => post.featured)
  const notFeaturedPosts = posts.filter((post) => !post.featured)

  return (
    <>
      <main className="mb-20">
        <Banner
          title="Blog Articles"
          description="Agency provides a full service range including technical skills, design, business understanding."
          className="mb-20"
        />

        <div className="container">
          <ul className="mb-16 grid grid-cols-1 gap-x-7 gap-y-12 xl:grid-cols-2">
            {featuredPosts.slice(0, 2).map((post) => (
              <li key={post.slug}>
                <BlogPost post={post} size="lg" />
              </li>
            ))}
          </ul>

          <Separator className="mb-20" />

          <ul className="mb-16 grid grid-cols-1 gap-x-7 gap-y-12 xl:grid-cols-3">
            {notFeaturedPosts.map((post) => (
              <li key={post.slug}>
                <BlogPost post={post} />
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button variant="light">
              Load more <span className="sr-only">posts from our blog</span>
            </Button>
          </div>
        </div>
      </main>

      <div className="container">
        <Separator className="mb-32 xl:mb-28" />
      </div>

      <Newsletter />

      <div className="container">
        <Separator className="mb-20" />
      </div>

      <HelpBuildDreamProject />
    </>
  )
}
