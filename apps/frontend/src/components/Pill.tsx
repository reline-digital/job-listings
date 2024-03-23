export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-tertiary hover:bg-primary hover:text-tertiary rounded  px-2 py-0.5 transition-colors">
      {children}
    </div>
  )
}
