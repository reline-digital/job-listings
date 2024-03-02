import { Request as ExpressRequest, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { USER_SCHEMA } from '@/models/user_model'
import { log } from 'console'

interface User {
  name?: string
  email: string
  password: string
}

interface Request extends ExpressRequest {
  user?: User
}

export async function protect_route(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies.token
    if (!token) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    const secret = process.env.JWT_SECRET
    if (!secret) {
      res.status(500).json({ error: 'JWT secret is undefined' })
      return
    }
    const decoded = jwt.verify(token, secret) as JwtPayload
    req.user = (await USER_SCHEMA.findById(decoded.user_id).select(
      '-password'
    )) as User

    next()
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
