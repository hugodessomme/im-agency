import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const blog = [
  {
    image: "/images/blog-1.png",
    category: "Stories",
    title: "Agency is a business you hire to outsource",
    date: "5 Nov, 2021",
  },
  {
    image: "/images/blog-2.png",
    category: "Design",
    title: "Outsource your digital marketing efforts",
    date: "29 Oct, 2021",
  },
  {
    image: "/images/blog-3.png",
    category: "Marketing",
    title: "Your business with a variety of digital",
    date: "21 Oct, 2021",
  },
]

export function Blog() {
  return (
    <section className="mb-12 xl:mb-16">
      <div className="container">
        <div className="mb-12 flex flex-col items-start gap-y-9 xl:flex-row xl:items-end xl:justify-between">
          <h2 className="flex flex-col">
            <span className="mb-5 uppercase text-primary">Our Blog</span>
            <span className="text-[2.5rem] font-extrabold leading-[3rem]">
              Latest Blog Articles
            </span>
          </h2>
          <Button asChild variant="light">
            <Link href="/">Discover All</Link>
          </Button>
        </div>

        <ul className="flex flex-col gap-x-7 gap-y-12 xl:flex-row">
          {blog.map((post, index) => (
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
