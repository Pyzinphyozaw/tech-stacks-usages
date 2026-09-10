import { initDb } from './db/init.js'
import Post from './db/models/post.js'
initDb()
//const post = new Post({
//title: 'Test Post',
// author: 'Pyzin',
//content: 'This post is created from mongoose!',
//tags: ['mongoose', 'mangodb'],
//})

//await post.save()

const posts = await Post.find()
console.log(posts)
