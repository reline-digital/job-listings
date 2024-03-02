import mongoose from 'mongoose'
import { log } from '@repo/logger'

export const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
  } catch (error) {
    log(`Error: ${error}`)
    process.exit(1)
  }
}
