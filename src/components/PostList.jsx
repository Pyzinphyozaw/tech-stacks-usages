import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post.jsx'

export function PostList({ posts = [] }) {
  return posts.map((post) => (
    <Fragment key={post._id}>
      <Post {...post} />
      <hr />
    </Fragment>
  ))
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
