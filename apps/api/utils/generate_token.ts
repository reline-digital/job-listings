import jwt from 'jsonwebtoken'
import { Response } from 'express'
import { log } from 'console'

export function generate_token(res: Response, user_id: string) {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    log('JWT_SECRET is not defined')
    return
  }
  const token = jwt.sign({ user_id }, secret, {
    expiresIn: '30m',
  })
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 60 * 1000,
  })
}
