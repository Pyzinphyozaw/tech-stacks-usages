import mongoose from 'mongoose'
import { beforeAll, afterAll } from '@jest/globals'
import { initDb } from '../db/init.js'

beforeAll(async () => {
  await initDb()
})

afterAll(async () => {
  await mongoose.disconnect()
})
