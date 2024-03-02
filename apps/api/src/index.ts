import { log } from '@repo/logger'
import { createServer } from './server'
import { job_route, user_route } from '@/routes'
import { connect_db } from 'config/db'

const port = process.env.PORT || 5001
const server = createServer()

server.use('/api/v1/jobs', job_route)
server.use('/api/v1/user', user_route)

connect_db()
  .then(() => {
    server.listen(port, () => {
      log(`db connected & api running on ${port}`)
    })
  })
  .catch((error) => {
    log('Error connecting to db:', error)
  })
