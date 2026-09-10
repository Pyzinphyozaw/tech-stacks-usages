import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '6.0.4',
      os: {
        osFilter: () => 'ubuntu2204',
      },
    },
  })
  global.__MONGOINSTANCE = instance

  process.env.DATABASE_URL = instance.getUri()
}
