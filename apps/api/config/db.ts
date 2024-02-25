import mongoose from 'mongoose'
import { log } from '@repo/logger'

export const connect_db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string)
    log(`MongoDB Connected: ${conn.connection.name}`)
  } catch (error) {
    log(`Error: ${error}`)
    process.exit(1)
  }
}
