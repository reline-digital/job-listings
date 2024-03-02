import { Request, Response } from 'express'
import { USER_SCHEMA } from '@/models/user_model'
import { isValidObjectId } from 'mongoose'
import { log } from 'console'
import { generate_token } from 'utils/generate_token'

//* @desc Post user
//* route POST /api/user
//? @access Public
export async function create_user(req: Request, res: Response): Promise<void> {
  try {
    const user_data = req.body
    // check if user email already exists
    const { email } = req.body
    const existing_user = await USER_SCHEMA.findOne({ email })
    if (existing_user) {
      res.status(409).json({ error: 'User email already exists' })
      return
    }

    //* post user
    const user = await USER_SCHEMA.create(user_data)
    generate_token(res, user._id.toString())
    res.status(201).json(user)
  } catch (error) {
    log('Error posting user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Login user
//* route GET /api/user
//! @access Public
export async function login_user(req: Request, res: Response): Promise<void> {
  try {
    //* get user by email and password
    const { email, password } = req.body
    const user = await USER_SCHEMA.findOne({ email })

    // check if user exists and password is correct
    if (!user || !(await user.match_password(password))) {
      res.status(401).json({ error: 'Incorrect email or password' })
      return
    }
    generate_token(res, user._id.toString())
    res.status(200).json(user)
  } catch (error) {
    log('Error fetching user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Logout user
//* route POST /api/user/logout
// ? @access Public
export async function logout_user(_: Request, res: Response): Promise<void> {
  try {
    res.clearCookie('token').status(200).json({ message: 'User logged out' })
  } catch (error) {
    log('Error logging out user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Update user
//* route PATCH /api/user/:id
//! @access Private
export async function update_user(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params
    //* check if id is valid
    if (!isValidObjectId(id)) {
      res.status(400).json({ error: 'Invalid id' })
      return
    }
    //* check if user exists
    const user = await USER_SCHEMA.findById(id)
    if (!user) {
      res.status(404).json({ error: 'user not found' })
      return
    }

    //* check if user email already exists
    const { email } = req.body
    const existing_user = await USER_SCHEMA.findOne({ email })
    if (existing_user && existing_user._id.toString() !== id) {
      res.status(409).json({ error: 'Email already exists' })
      return
    }

    //* update user
    const updated_user = await USER_SCHEMA.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updated_user)
  } catch (error) {
    log('Error updating user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
