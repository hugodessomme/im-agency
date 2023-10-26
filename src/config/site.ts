import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

export const site = {
  name: "IM Agency",
  description: "An open-source agency website built with Next.js 13.",
  url: "https://im-agency.vercel.app",
  headerNav: [
    { label: "About", url: "/" },
    { label: "Services", url: "/" },
    { label: "Pricing", url: "/" },
    { label: "Blog", url: "/" },
  ],
  footerNav: [
    {
      title: "Menu",
      items: [
        { label: "About", url: "/" },
        { label: "Services", url: "/" },
        { label: "Blog", url: "/" },
        { label: "Contact", url: "/" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Design", url: "/" },
        { label: "Development", url: "/" },
        { label: "Marketing", url: "/" },
        { label: "See More", url: "/" },
      ],
    },
  ],
  socials: [
    { label: "Facebook", url: "/", icon: FacebookIcon },
    { label: "Twitter", url: "/", icon: TwitterIcon },
    { label: "Instagram", url: "/", icon: InstagramIcon },
  ],
}
