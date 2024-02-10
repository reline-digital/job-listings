import mongoose, { Document, Schema } from 'mongoose'
import type { Job } from '../../types'

interface IJob extends Document, Job {}

const job_schema: Schema<IJob> = new Schema<IJob>(
  {
    company: { type: String, required: true },
    logo: { type: String },
    position: { type: String, required: true },
    role: { type: String, required: true },
    level: { type: String, required: true },
    contract: { type: String, required: true },
    location: { type: String, required: true },
    languages: { type: [String], required: true },
    tools: { type: [String], default: [] },
  },
  {
    timeStamps: true,
  }
)

export const JOB = mongoose.model<IJob>('Job', job_schema)
