import { Roboto as FontHeading, Epilogue as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-sans",
})

// Uncomment if you need it!
// export const fontHeading = FontHeading({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-heading",
// })
