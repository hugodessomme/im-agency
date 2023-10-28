import type { Metadata } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "./globals.css"

import { site } from "@/config/site"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          "bg-background font-sans font-normal text-foreground"
        )}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
