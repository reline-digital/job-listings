import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

export function validate_job_data(schema: z.AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        const error_messages = error.errors.map((issue) => ({
          message: `${issue.path.join('.')} - ${issue.message}`,
        }))
        res.status(400).json({ error: 'Invalid data', error_messages })
      }
    }
  }
}
