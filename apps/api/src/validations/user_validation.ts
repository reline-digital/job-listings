import { z } from 'zod'

export const USER_VALIDATION_SCHEMA = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})
