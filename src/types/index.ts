import { LucideIcon } from "lucide-react"

export interface Team {
  fullname: string
  job: string
  image: {
    url: string
    width: number
    height: number
  }
}

export interface Testimonial {
  content: string
  name: string
  company: string
  image: string
}

export interface PlanOptions {
  label: string
  included: boolean
}

export interface Plan {
  offer: string
  price: string
  popular: boolean
  content: string
  options: PlanOptions[]
}

export interface Question {
  label: string
  content: string
}

export interface Award {
  image: string
  title: string
  date: string
  competition: string
  competitionImage: string
}

export interface Post {
  image: string
  category: string
  title: string
  date: string
  slug: string
  featured?: boolean
}

export interface Service {
  label: string
  icon: LucideIcon
}
