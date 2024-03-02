import { z } from 'zod'

export const JOB_VALIDATION_SCHEMA = z.object({
  company: z.string(),
  logo: z.string().optional(),
  position: z.string(),
  role: z.string(),
  level: z.string(),
  contract: z.string(),
  location: z.string(),
  languages: z.array(z.string()),
  tools: z.array(z.string()),
})
