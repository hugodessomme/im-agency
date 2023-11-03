import Image from "next/image"
import Link from "next/link"
import { Post } from "@/types"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"

interface PostProps {
  post: Post
  size?: "base" | "lg"
}

export function BlogPost({ post, size = "base" }: PostProps) {
  return (
    <article className="relative">
      <div
        className={cn(
          "relative mb-6 h-56 overflow-hidden rounded-md",
          size === "lg" && "h-[21rem]"
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          quality="100"
          fill
          className="object-cover"
        />
      </div>
      <p className="mb-4 text-xl leading-8">{post.category}</p>
      <h3 className="text-2xl font-bold">
        <Link href={`${routes.blog}/${post.slug}`}>
          <span className="absolute inset-0"></span>
          {post.title}
        </Link>
      </h3>
      <p className="text-foreground-subtle">{post.date}</p>
    </article>
  )
}
