interface PlanOptions {
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
}
