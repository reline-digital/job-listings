import { Request, Response } from 'express'
import { JOB_SCHEMA } from '../models/job_model'
import { isValidObjectId } from 'mongoose'

//* @desc Get all jobs
//* route GET /api/jobs
//? @access Public
export async function get_jobs(_: Request, res: Response): Promise<void> {
  // fetch jobs
  try {
    const jobs = await JOB_SCHEMA.find({}).sort({ createdAt: -1 })
    res.status(200).json({ jobs })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Get job
//* route GET /api/jobs/:id
//? @access Public
export async function get_job(req: Request, res: Response): Promise<void> {
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
  // fetch job
  try {
    const job = await JOB_SCHEMA.findById(id)
    res.status(200).json(job)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Post job
//* route POST /api/jobs/job
//! @access Private
export async function post_job(req: Request, res: Response): Promise<void> {
  //* post job
  try {
    const jobData = req.body
    const newJob = await JOB_SCHEMA.create(jobData)
    res.status(201).json(newJob)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Delete job
//* route DELETE /api/jobs/:id
//! @access Private
export async function delete_job(req: Request, res: Response): Promise<void> {
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
  try {
    const deleted_job = await JOB_SCHEMA.findByIdAndDelete(id)
    res.status(200).json(deleted_job)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Update job
//* route PATCH /api/jobs/:id
//! @access Private
export async function update_job(req: Request, res: Response): Promise<void> {
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
  try {
    const updated_job = await JOB_SCHEMA.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updated_job)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
