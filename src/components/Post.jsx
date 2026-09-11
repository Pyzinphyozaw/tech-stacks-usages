import PropTypes from 'prop-types'
import { User } from './User.jsx'

export function Post({ title, author, contents }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{contents}</p>
      Written by <User id={author} />
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
