import { Request, Response } from 'express'
import { JOB_SCHEMA } from '../models/job_model'

//* @desc Get all jobs
//* route GET /api/jobs
//* @access Public
export async function get_jobs(req: Request, res: Response): Promise<void> {
  try {
    const jobs = await JOB_SCHEMA.find()
    res.status(200).json({ jobs })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Post a job
//* route POST /api/jobs/job
//* @access Private
export async function post_job(req: Request, res: Response): Promise<void> {
  try {
    const jobData = req.body
    const newJob = await JOB_SCHEMA.create(jobData)
    res.status(201).json({ message: 'Job posted', newJob })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
