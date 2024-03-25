export function Button({
  handleClick,
  children,
  type = 'button',
  variant = 'primary',
  outline = false,
  disabled = false,
}: {
  handleClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  outline?: boolean
  disabled?: boolean
}) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className="bg-primary rounded p-3 font-medium uppercase text-white shadow-md transition-all hover:opacity-80 hover:shadow-lg"
    >
      {children}
    </button>
  )
}
