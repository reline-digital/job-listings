import { Router } from 'express'

const router = Router()

router.put('/job/:id', (req, res) => {
  res.send({ message: 'update job' })
})

export default router
