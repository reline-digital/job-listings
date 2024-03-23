import { Card } from '@/components'
import type { Job } from '@/types'

export async function CardList() {
  let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/jobs`)
  let { jobs }: { jobs: Job[] } = await data.json()
  return (
    <div className="mb-10 flex flex-col gap-12 md:gap-8">
      {jobs.map((job) => (
        <Card key={job._id} job={job} />
      ))}
    </div>
  )
}
