"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { contactFormSchema } from "@/lib/validations/contact"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const defaultValues: Partial<ContactFormValues> = {
  email: "",
  subject: "",
  message: "",
}

export function ContactForm({ className }: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })
  const { toast } = useToast()

  function onSubmit(values: ContactFormValues) {
    toast({
      title: (
        <div className="flex items-center gap-x-2">
          <CheckCircleIcon className="h-5 w-5" /> Message sent!
        </div>
      ),
      description: (
        <ul>
          <li>Email: {values.email}</li>
          <li>Subject: {values.subject}</li>
          <li>Message: {values.message}</li>
        </ul>
      ),
    })

    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("rounded-md bg-white px-7 py-12 xl:mx-0", className)}
      >
        <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>

        <div className="mb-8 space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-project">
                        I need help for my project
                      </SelectItem>
                      <SelectItem value="hi">I just want to say hi</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    value={field.value}
                    className="max-h-52"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="text-right">
          <Button type="submit">Submit Now</Button>
        </div>
      </form>
    </Form>
  )
}
