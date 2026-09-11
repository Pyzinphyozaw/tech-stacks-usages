import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../db/models/user.js'
import { configDotenv } from 'dotenv'
configDotenv()

export async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ username, password: hashedPassword })
  return await user.save()
}

export async function loginUser({ username, password }) {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET configuration is missing')
    }

    const user = await User.findOne({ username })
    const isPasswordCorrect = user
      ? await bcrypt.compare(password, user.password)
      : false

    if (!user || !isPasswordCorrect) {
      throw new Error('Invalid username or password')
    }

    const token = jwt.sign(
      { sub: user._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: '24h',
      },
    )

    return token
  } catch (e) {
    console.log(e)
  }
}
export async function getUserInfoById(userId) {
  try {
    const user = await User.findById(userId)
    if (!user) return { username: userId }
    return { username: user.username }
  } catch (err) {
    return { username: userId }
  }
}
