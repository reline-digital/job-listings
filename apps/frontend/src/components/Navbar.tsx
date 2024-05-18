import { Button } from '@/components/Button'
import Link from 'next/link'

export function Navbar() {
  return (
    <>
      <section className="flex items-center justify-between">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className="flex gap-4">
          <span>About</span>
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="/post-job">Post a Job</Link>
          </span>
        </div>
        <Button type="submit">
          <Link href="/login">Logout</Link>
        </Button>
      </section>
    </>
  )
}
