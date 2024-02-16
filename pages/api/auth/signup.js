import { hashPassword } from "@/lib/auth"
import { connectToDatabase } from "@/lib/db"

async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body
  const { email, password } = data
  if (!email || !email.includes('@') || !password || password.trim().length < 7) {
    res.status(422)
      .json({
        message: 'Invalid input - password should also be at least 7 characters long.'
      })
  }
  const client = await connectToDatabase()
  const db = client.db()
  const hashedPassword = await hashPassword(password)
  const existingUser = await db.collection('users').findOne({ email: email })
  if (!existingUser) {
    db.collection('users').insertOne({
      email: email,
      password: hashedPassword
    })
    res.status(201).json({ message: 'Created user!' })
  } else {
    res.status(409).json({ message: 'Invalid user' })
  }

  client.close()
}

export default handler
