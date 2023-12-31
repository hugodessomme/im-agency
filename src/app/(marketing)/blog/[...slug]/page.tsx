import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeftIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react"

import { posts } from "@/config/posts"
import { routes } from "@/config/routes"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { BackLink } from "@/components/back-link"
import { HelpBuildDreamProject } from "@/components/block/help-build-dream-project"
import { BlogPost } from "@/components/blog-post"
import { IconBadge } from "@/components/icon-badge"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const relatedArticles = posts.slice(0, 3)

  return (
    <>
      <BackLink href={routes.blog} label="Back to Blog" />

      <main className="mb-16 xl:mb-20">
        <div className="container mb-16 max-w-[39rem]">
          <Heading size="2" className="mb-8 xl:mb-7">
            Agency is a business you hire to outsource
          </Heading>
          <div className="flex flex-col gap-y-4 xl:flex-row xl:justify-between">
            <p className="text-foreground-subtle">
              In <span className="text-foreground">Stories</span> by{" "}
              <span className="text-foreground">Gabriel Pires</span>
            </p>
            <p className="text-foreground-subtle">
              Date <span className="text-foreground">7 Dec, 2021</span>
            </p>
          </div>
        </div>

        <div className="container mb-16 max-w-[63.75rem] xl:mb-20">
          <div className="relative h-52 overflow-hidden rounded-md xl:h-[37rem]">
            <Image
              src="/images/blog-post.jpg"
              alt="Agency is a business you hire to outsource"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>

        <div className="container mb-16 max-w-[39rem]">
          <div className="mb-16 xl:mb-14">
            <p className="mb-8 text-xl leading-8">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>

            <div className="prose max-w-none">
              <p>
                Outsource your digital marketing efforts, instead of handling
                in-house. They can provide your business with a variety of
                digital solutions to promote your product or service online and
                help you.
              </p>
              <h2>Promote your product</h2>
              <p>
                Ability to put themselves in the merchant&apos;s shoes. It is
                meant to partner on the long run, and work as an extension of
                the merchant&apos;s team.
              </p>
              <ul>
                <li>Digital marketing</li>
                <li>Efforts instead</li>
                <li>Handling in-house</li>
              </ul>
              <p>
                Ability to put themselves in the merchant&apos;s shoes. It is
                meant to partner on the long run, and work as an extension of
                the merchant&apos;s team.
              </p>
              <h2>Service online and help</h2>
              <p>
                Put themselves in the merchant&apos;s shoes. It is meant to
                partner on the long run, and work as an extension of the
                merchant&apos;s team.
              </p>
              <ol>
                <li>Marketing efforts</li>
                <li>Instead of handling</li>
                <li>In-house</li>
              </ol>
              <p>
                Agency is a business you hire to outsource your digital
                marketing efforts, instead of handling in-house. They can
                provide your business with a variety of digital solutions to
                promote your product or service online and help you.
              </p>
              <blockquote>
                Provide your business with a variety of digital solutions to
                promote your product or service online and help you.
              </blockquote>
              <p>
                Outsource your digital marketing efforts, instead of handling
                in-house. They can provide your business with a variety of
                digital solutions to promote your product or service online and
                help you.
              </p>
            </div>
          </div>

          <Separator className="mb-16" />

          <div className="flex flex-col gap-y-10 text-center xl:flex-row xl:justify-between xl:text-left">
            <div className="flex flex-col items-center gap-x-6 gap-y-3 xl:flex-row">
              <Image
                src="/images/blog-post-author.jpg"
                alt="Samuil Sadovsky"
                width={80}
                height={80}
                quality={100}
                className="h-20 w-20 rounded-full"
              />
              <div>
                <p>Samuil Sadovsky</p>
                <p className="text-foreground-subtle">Editor</p>
              </div>
            </div>

            <ul className="flex justify-center gap-x-3">
              <li>
                <Link href="https://www.facebook.com/">
                  <IconBadge className="h-12 w-12">
                    <FacebookIcon className="h-6 w-6" />
                  </IconBadge>
                  <span className="sr-only">Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/">
                  <IconBadge className="h-12 w-12">
                    <TwitterIcon className="h-6 w-6" />
                  </IconBadge>
                  <span className="sr-only">Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/">
                  <IconBadge className="h-12 w-12">
                    <InstagramIcon className="h-6 w-6" />
                  </IconBadge>
                  <span className="sr-only">Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className="container">
        <Separator className="mb-[4.5rem]" />
      </div>

      {relatedArticles.length ? (
        <section className="mb-24 xl:mb-32">
          <div className="container">
            <Heading as="h2" size="4" className="mb-10">
              Related Articles
            </Heading>

            <ul className="grid grid-cols-1 gap-x-7 gap-y-14 xl:grid-cols-3">
              {relatedArticles.map((post) => (
                <li key={post.slug}>
                  <BlogPost post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <HelpBuildDreamProject />
    </>
  )
}
