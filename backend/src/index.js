import { initDb } from './db/init.js'
import express from 'express'
import { configDotenv } from 'dotenv'
import { postRoutes } from './routes/post.route.js'
//import Post from './db/models/post.js'
import bodyParser from 'body-parser'
import cors from 'cors'

configDotenv()
const app = express()
app.use(cors())
app.use(bodyParser.json())
try {
  await initDb()

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log('Server listening on port', PORT)
  })
} catch (error) {
  console.error('Error!', error)
}

postRoutes(app)

// const post = new Post({
//   title: 'Testing Data',
//   author: 'Pyzin',
//   content: 'Something to see',
//   tags: ['mongoosetest'],
// })

// await post.save()
