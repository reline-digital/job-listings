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
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
