import express from 'express'
import { get_jobs, post_job } from '../controllers/job_controller'

const router = express.Router()

router.get('/', get_jobs)
router.post('/job', post_job)

export default router
