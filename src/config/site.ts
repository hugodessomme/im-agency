import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

import { routes } from "@/config/routes"

export const site = {
  lang: "en",
  name: "im agency",
  description: "An open-source agency website built with Next.js 13.",
  url: "https://im-agency.vercel.app",
  headerNav: [
    { label: "About", url: routes.about },
    { label: "Services", url: routes.services },
    { label: "Portfolio", url: routes.portfolio },
    { label: "Blog", url: routes.blog },
  ],
  footerNav: [
    {
      title: "Menu",
      items: [
        { label: "About", url: routes.about },
        { label: "Services", url: routes.services },
        { label: "Portfolio", url: routes.portfolio },
        { label: "Contact", url: routes.contact },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Design", url: routes.services },
        { label: "Development", url: routes.services },
        { label: "Marketing", url: routes.services },
        { label: "See More", url: routes.services },
      ],
    },
  ],
  socials: [
    { label: "Facebook", url: "https://www.facebook.com/", icon: FacebookIcon },
    { label: "Twitter", url: "https://x.com/", icon: TwitterIcon },
    { label: "Instagram", url: "https://instagram.com/", icon: InstagramIcon },
  ],
}
