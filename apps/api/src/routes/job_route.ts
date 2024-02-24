import express from 'express'
import {
  delete_job,
  get_job,
  get_jobs,
  post_job,
  update_job,
} from '../controllers/job_controller'

const router = express.Router()

//* @desc Get all jobs
//? @access Public
router.get('/', get_jobs)

//* @desc Get job
//? @access Public
router.get('/:id', get_job)

//* @desc Post job
//! @access Private
router.post('/job', post_job)

//* @desc Delete job
//! @access Private
router.delete('/:id', delete_job)

//* @desc Update job
//! @access Private
router.patch('/:id', update_job)

export default router
