import express from 'express'
const router = express.Router()
import { validate_schema } from '@/middleware/validation_middleware'
import { USER_VALIDATION_SCHEMA } from '@/validations/user_validation'
import {
  login_user,
  logout_user,
  register_user,
  update_user,
  get_user,
} from '@/controllers/user_controller'
import { protect_route } from '@/middleware/auth_middleware'

//* @desc Create user
//? @access Public
router.post('/register', validate_schema(USER_VALIDATION_SCHEMA), register_user)

//* @desc Login user
//? @access Public
router.post('/login', validate_schema(USER_VALIDATION_SCHEMA), login_user)

//* @desc Logout user
//? @access Public
router.post('/logout', logout_user)

//* @desc Get User
//! @access Private
router.get('/profile', protect_route, get_user)

//* @desc Update user
//! @access Private
router.patch(
  '/:id',
  protect_route,
  validate_schema(USER_VALIDATION_SCHEMA),
  update_user
)

export default router
