import { log } from '@repo/logger'
import { createServer } from './server'
import job_route from '@routes/job_route'

const port = process.env.PORT || 5001
const server = createServer()

server.use('/api/v1/jobs', job_route)

server.listen(port, () => {
  log(`api running on ${port}`)
})
