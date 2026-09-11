export const getPosts = async (queryParams) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/post?` +
      new URLSearchParams(queryParams),
  )
  return await res.json()
}

export const createPost = async (token, post) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/
post`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    },
  )
  return await res.json()
}
