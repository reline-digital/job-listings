import { Request, Response } from 'express'
import { JOB } from '../models/job_model'

//* @desc Get all jobs
//* route GET /api/jobs
//* @access Public
export const get_jobs = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobs = await JOB.find()
    res.status(200).json({ jobs })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Post a job
//* route POST /api/jobs/job
//* @access Private
export const post_job = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body)
    const jobData = req.body
    const newJob = await JOB.create(jobData)

    res.status(201).json({ message: 'Job posted', job: newJob })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
