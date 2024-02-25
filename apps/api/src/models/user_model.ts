import mongoose, { Schema } from 'mongoose'

const user_schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const USER_SCHEMA = mongoose.model('User', user_schema)
