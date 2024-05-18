import { CrossIcon } from './icons'

export function Pill({
  children,
  tag,
}: {
  children: React.ReactNode
  tag?: boolean
}) {
  return (
    <div className="flex">
      <div
        className={`${tag ? 'rounded-s' : 'hover:bg-primary hover:text-tertiary cursor-pointer rounded'} bg-tertiary text-primary px-2 py-0.5 font-medium capitalize  transition-colors`}
      >
        {children}
      </div>
      {tag && (
        <button className="bg-primary hover:bg-secondary rounded-e px-2 transition-colors">
          <CrossIcon />
        </button>
      )}
    </div>
  )
}
