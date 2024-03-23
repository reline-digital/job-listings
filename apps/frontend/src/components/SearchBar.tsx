import { Pill } from '.'

export function SearchBar() {
  return (
    <div className="mx-auto flex max-w-[90%] items-center justify-between gap-2 rounded bg-white p-4 shadow-lg md:container md:px-6 md:py-4 ">
      <div className="flex flex-wrap items-center gap-4">
        <Pill tag>Frontend</Pill>
      </div>
      <button className="hover:text-primary text-secondary-light bg-transparent px-4 py-2 font-medium underline">
        Clear
      </button>
    </div>
  )
}
