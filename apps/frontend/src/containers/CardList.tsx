import { Card } from '@/components'
import type { Job } from '@/Types'

export async function CardList() {
  let data = await fetch('http://localhost:5000/api/v1/jobs')
  let { jobs }: { jobs: Job[] } = await data.json()
  return (
    <div className="mb-10 flex flex-col gap-12 md:gap-8">
      {jobs.map((job) => (
        <Card key={job._id} job={job} />
      ))}
    </div>
  )
}
