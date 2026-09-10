import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
configDotenv()

export const initDb = async () => {
  const DATABASE_URL = process.env.DATABASE_URL
  try {
    const conn = await mongoose.connect(DATABASE_URL)
    console.log(
      'Databse connected successfully',
      conn.connection.host,
      conn.connection.port,
    )
  } catch (error) {
    console.error(error)
  }
}
