import {
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  createPost,
  updatePost,
  deletePost,
  getPostById,
} from '../services/posts.js'

export function postRoutes(app) {
  app.get('/', (req, res) => res.send('Hello from express'))

  app.get('/api/v1/post', async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.params
    const options = { sortBy, sortOrder }

    try {
      if (author && tag) {
        return res.send('You can search only by using one field')
      } else if (author) {
        const posts = await listPostsByAuthor(author, options)
        return res.status(200).json(posts)
      } else if (tag) {
        const posts = await listPostsByTag(tag, options)
        return res.status(200).json(posts)
      } else {
        const posts = await listAllPosts(options)
        return res.status(200).json(posts)
      }
    } catch (err) {
      console.error(err)
    }
  })

  app.get('/api/v1/post/:id', async (req, res) => {
    const { id } = req.params
    try {
      if (id) {
        const post = await getPostById(id)
        if (post === null) {
          return res.status(404).end()
        } else {
          return res.json(post)
        }
      }
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  })

  app.post('/api/v1/post', async (req, res) => {
    try {
      const post = await createPost(req.body)
      return res.json(post)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error creating post' })
    }
  })

  app.patch('/api/v1/post/:id', async (req, res) => {
    try {
      const { id } = req.params
      const post = await updatePost(id, req.body)
      res.status(200).json(post)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error updating post' })
    }
  })

  app.delete('/api/v1/post/:id', async (req, res) => {
    try {
      const { id } = req.params
      await deletePost(id)
      res.send('Post deleted')
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error deleting post' })
    }
  })
}
