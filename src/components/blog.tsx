import Image from "next/image"
import Link from "next/link"

import { posts } from "@/config/posts"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function Blog() {
  return (
    <section className="mb-12 xl:mb-16">
      <div className="container">
        <div className="mb-12 flex flex-col items-start gap-y-9 xl:flex-row xl:items-end xl:justify-between">
          <Heading as="h2" size="3" prefix="Our Blog">
            Latest Blog Articles
          </Heading>

          <Button asChild variant="light">
            <Link href="/">Discover All</Link>
          </Button>
        </div>

        <ul className="flex flex-col gap-x-7 gap-y-12 xl:flex-row">
          {posts.map((post, index) => (
            <li key={index} className="relative">
              <Image
                src={post.image}
                alt=""
                className="mb-6 rounded-md"
                width="370"
                height="224"
                quality="100"
              />
              <p className="mb-4 text-xl leading-8">{post.category}</p>
              <h3 className="text-2xl font-bold">
                <span className="absolute inset-0"></span>
                {post.title}
              </h3>
              <p className="text-foreground-subtle">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
