import { Request, Response } from 'express'
import { USER_SCHEMA } from '@/models/user_model'
import { isValidObjectId } from 'mongoose'
import { log } from 'console'

//* @desc Post user
//* route POST /api/user
//? @access Public
export async function post_user(req: Request, res: Response): Promise<void> {
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
    const new_job = await USER_SCHEMA.create(user_data)
    res.status(201).json(new_job)
  } catch (error) {
    log('Error posting user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Get user
//* route GET /api/user/:id
//! @access Private
export async function get_user(req: Request, res: Response): Promise<void> {
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
    res.status(200).json(user)
  } catch (error) {
    log('Error fetching user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

//* @desc Delete job
//* route DELETE /api/user/:id
//! @access Private
export async function delete_user(req: Request, res: Response): Promise<void> {
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
    //* delete user
    await USER_SCHEMA.findByIdAndDelete(id)
    res.status(200).json({ message: 'user deleted successfully' })
  } catch (error) {
    log('Error deleting user:', error)
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

    // check if user email already exists
    const { email } = req.body
    const existing_user = await USER_SCHEMA.findOne({ email })
    if (existing_user && existing_user._id.toString() !== id) {
      res.status(400).json({ error: 'Email already exists' })
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
