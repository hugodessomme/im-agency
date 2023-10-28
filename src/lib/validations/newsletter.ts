import { z } from "zod"

export const newsletterFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})
