import mongoose, { Schema } from 'mongoose'

const job_schema = new Schema(
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
    timestamps: true,
  }
)

export const JOB_SCHEMA = mongoose.model('Job', job_schema)
