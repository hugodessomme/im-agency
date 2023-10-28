import { z } from "zod"

export const contactFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().trim().min(1, {
    message: "Please select a subject",
  }),
  message: z.string().trim().min(1, {
    message: "Please enter some text",
  }),
})
