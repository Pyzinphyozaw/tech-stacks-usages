import PropTypes from 'prop-types'

export function Post({ title, author, contents }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{contents}</p>
      <p>written by {author}</p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
