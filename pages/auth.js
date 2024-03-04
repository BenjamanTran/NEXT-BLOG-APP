import { getSession } from "next-auth/react"
import { useRouter } from "next/router"

const { default: AuthForm } = require("@/components/auth/auth-form")
const { Fragment, useEffect, useState } = require("react")

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getSession().then(session => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <Fragment><AuthForm /></Fragment>
}

export default AuthPage
