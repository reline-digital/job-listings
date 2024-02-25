import express from 'express'
const router = express.Router()
import { validate_schema } from '@/middleware/validation_middleware'
import { JOB_VALIDATION_SCHEMA } from '@/validations/job_validation'
import {
  delete_job,
  get_job,
  get_jobs,
  post_job,
  update_job,
} from '@/controllers/job_controller'

//* @desc Get all jobs
//? @access Public
router.get('/', get_jobs)

//* @desc Get job
//? @access Public
router.get('/:id', get_job)

//* @desc Post job
//! @access Private
router.post('/', validate_schema(JOB_VALIDATION_SCHEMA), post_job)

//* @desc Delete job
//! @access Private
router.delete('/:id', delete_job)

//* @desc Update job
//! @access Private
router.patch('/:id', validate_schema(JOB_VALIDATION_SCHEMA), update_job)

export default router
