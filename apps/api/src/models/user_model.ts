import mongoose, { Document, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUserSchema extends Document {
  email: string
  password: string
  name?: string
  match_password: (password: string) => Promise<boolean>
}

const user_schema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

user_schema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    next()
    return
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

user_schema.methods.match_password = async function (entered_password: string) {
  return await bcrypt.compare(entered_password, this.password)
}

export const USER_SCHEMA = mongoose.model<IUserSchema>('User', user_schema)
