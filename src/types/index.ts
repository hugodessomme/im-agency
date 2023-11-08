import { LucideIcon } from "lucide-react"

export interface Award {
  competition: string
  competitionImage: string
  date: string
  image: string
  title: string
}

export interface Plan {
  content: string
  offer: string
  options: PlanOptions[]
  popular: boolean
  price: string
}

export interface PlanOptions {
  included: boolean
  label: string
}

export interface Post {
  category: string
  date: string
  featured?: boolean
  image: string
  slug: string
  title: string
}

export interface Question {
  content: string
  label: string
}

export interface Service {
  icon: LucideIcon
  label: string
}

export interface Team {
  fullname: string
  image: {
    height: number
    url: string
    width: number
  }
  job: string
}

export interface Testimonial {
  company: string
  content: string
  image: string
  name: string
}

export interface Reference {
  category: string
  image: string
  label: string
  url: string
}
