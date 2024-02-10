import { Request, Response } from 'express'

// @desc Get all jobs
// route GET /api/jobs
// @access Public
export const get_jobs = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ jobs: 'all jobs here' })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// @desc Post a job
// route POST /api/jobs/job
// @access Private
export const post_job = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ message: 'job posted' })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
