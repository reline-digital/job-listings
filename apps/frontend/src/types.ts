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
export type IconTypes = {
  fillColor?: string
}
export type BaseDropdownProps = {
  title: string
  name: string
  options: { value: string; label: string }[]
}
export type BaseFileUploadProps = {
  name: string
  label: string
  setUrl: (url: string) => void
}
export type SearchableCheckboxProps = {
  title: string
  name: string
  list: string[]
}