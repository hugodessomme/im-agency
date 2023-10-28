"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { newsletterFormSchema } from "@/lib/validations/newsletter"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>

interface NewsletterFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {}

const defaultValues: NewsletterFormValues = {
  email: "",
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const form = useForm({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues,
  })
  const { toast } = useToast()

  function onSubmit(values: NewsletterFormValues) {
    // do whatever you want with these values!
    // console.log({values})

    toast({
      title: "Subscribed to our newsletter!",
      description: "Check your emails to confirm your subscription.",
    })

    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-x-8 gap-y-4 xl:flex-row", className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value}
                  className="xl:w-[23.25rem]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="light" className="xl:mt-8">
          Subscribe
        </Button>
      </form>
    </Form>
  )
}
