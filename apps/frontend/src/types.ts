export type Job = {
  _id?: string
  company: string
  logo: string
  new: boolean
  featured?: boolean
  position: string
  role: string
  level: string
  postedAt?: string
  createdAt?: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}
