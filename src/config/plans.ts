import { Plan } from "@/types"

export const plans: Plan[] = [
  {
    offer: "Consultation",
    price: "Free",
    popular: false,
    content: "Your digital marketing efforts, instead of handling in-house.",
    options: [
      { label: "Brand Design", included: true },
      { label: "Market Analysis", included: false },
      { label: "Production", included: false },
    ],
  },
  {
    offer: "Design",
    price: "$1500",
    popular: true,
    content:
      "Provide your business with a variety of digital solutions to promote.",
    options: [
      { label: "Brand Design", included: true },
      { label: "Market Analysis", included: true },
      { label: "Production", included: false },
    ],
  },
  {
    offer: "Design+Code",
    price: "$2900",
    popular: false,
    content: "Help you hit your marketing goals and grow your business.",
    options: [
      { label: "Brand Design", included: true },
      { label: "Market Analysis", included: true },
      { label: "Production", included: true },
    ],
  },
]
