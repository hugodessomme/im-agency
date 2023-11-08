import { NewsletterForm } from "@/components/form/newsletter-form"

export function Newsletter() {
  return (
    <section className="mb-32 xl:mb-28">
      <div className="container">
        <div className="flex flex-col gap-y-9 xl:flex-row xl:items-center">
          <h2 className="text-5xl font-extrabold leading-10 xl:mb-0">
            Newsletter
          </h2>

          <NewsletterForm className="xl:ml-auto" />
        </div>
      </div>
    </section>
  )
}
