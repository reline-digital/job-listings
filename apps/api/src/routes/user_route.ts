import express from 'express'
const router = express.Router()
import { validate_schema } from '@/middleware/validation_middleware'
import { USER_VALIDATION_SCHEMA } from '@/validations/user_validation'
import {
  login_user,
  logout_user,
  create_user,
  update_user,
} from '@/controllers/user_controller'

//* @desc Post user
//? @access Public
router.post('/', validate_schema(USER_VALIDATION_SCHEMA), create_user)

//* @desc Login user
//? @access Public
router.get('/', validate_schema(USER_VALIDATION_SCHEMA), login_user)

//* @desc Logout user
//? @access Public
router.post('/logout', logout_user)

//* @desc Update user
//! @access Private
router.patch('/:id', validate_schema(USER_VALIDATION_SCHEMA), update_user)

export default router
