import express from 'express'
const router = express.Router()
import { validate_schema } from '@/middleware/validation_middleware'
import { USER_VALIDATION_SCHEMA } from '@/validations/user_validation'
import {
  delete_user,
  get_user,
  post_user,
  update_user,
} from '@/controllers/user_controller'

//* @desc Post user
//? @access Public
router.post('/', validate_schema(USER_VALIDATION_SCHEMA), post_user)

//* @desc Get user
//? @access Public
router.get('/', validate_schema(USER_VALIDATION_SCHEMA), get_user)

//* @desc Delete user
//! @access Private
router.delete('/:id', delete_user)

//* @desc Update user
//! @access Private
router.patch('/:id', validate_schema(USER_VALIDATION_SCHEMA), update_user)

export default router
