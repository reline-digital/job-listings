import { Request, Response } from 'express'
import { JOB_SCHEMA } from '@/models/job_model'
import { isValidObjectId } from 'mongoose'
import { log } from 'console'

//* @desc Get all jobs
//* route GET /api/jobs
//? @access Public
export async function get_jobs(_: Request, res: Response): Promise<void> {
  try {
    // fetch jobs
    const jobs = await JOB_SCHEMA.find({}).sort({ createdAt: -1 })
    res.status(200).json({ jobs })
  } catch (error) {
    log('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Get job
//* route GET /api/jobs/:id
//? @access Public
export async function get_job(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params
    //* check if id is valid
    if (!isValidObjectId(id)) {
      res.status(400).json({ error: 'Invalid id' })
      return
    }
    //* check if job exists
    const job = await JOB_SCHEMA.findById(id)
    if (!job) {
      res.status(404).json({ error: 'Job not found' })
      return
    }
    res.status(200).json(job)
  } catch (error) {
    log('Error fetching job:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Post job
//* route POST /api/jobs/job
//! @access Private
export async function post_job(req: Request, res: Response): Promise<void> {
  try {
    // validate job data
    const job_data = req.body
    //* post job
    const new_job = await JOB_SCHEMA.create(job_data)
    res.status(201).json(new_job)
  } catch (error) {
    log('Error posting job:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Delete job
//* route DELETE /api/jobs/:id
//! @access Private
export async function delete_job(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params
    //* check if id is valid
    if (!isValidObjectId(id)) {
      res.status(400).json({ error: 'Invalid id' })
      return
    }
    //* check if job exists
    const job = await JOB_SCHEMA.findById(id)
    if (!job) {
      res.status(404).json({ error: 'Job not found' })
      return
    }
    //* delete job
    await JOB_SCHEMA.findByIdAndDelete(id)
    res.status(200).json({ message: 'Job deleted successfully' })
  } catch (error) {
    log('Error deleting job:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Update job
//* route PATCH /api/jobs/:id
//! @access Private
export async function update_job(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params
    //* check if id is valid
    if (!isValidObjectId(id)) {
      res.status(400).json({ error: 'Invalid id' })
      return
    }
    //* check if job exists
    const job = await JOB_SCHEMA.findById(id)
    if (!job) {
      res.status(404).json({ error: 'Job not found' })
      return
    }
    //* update job
    const updated_job = await JOB_SCHEMA.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updated_job)
  } catch (error) {
    log('Error updating job:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
