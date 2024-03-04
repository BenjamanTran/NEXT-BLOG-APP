import { verifyPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase()
        const usersCollection = client.db().collection('users')
        const user = await usersCollection.findOne({ email: credentials.email })

        if (!user) {
          client.close()
          throw new Error('No user found')
        }

        const isValid = await verifyPassword(credentials.password, user.password)

        if (!isValid) {
          client.close()
          throw new Error('Could not log you in!')
        }

        return { email: user.email }
      }
    })
  ],
  callbacks: {
    async jwt({ user, token }) {
      token.user = { ...user }
      return token
    },
    async session(data) {
      console.log('session: ', data.session.user)
      return data.session.user
    },
  },
}

export default NextAuth(authOptions)
