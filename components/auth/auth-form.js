import { useRef, useState } from "react"
import classes from './auth-form.module.css'
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router"

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()
  const [isInvalidEmail, setInvalidEmail] = useState(false)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const switchAuthModelHandler = () => {
    setIsLogin(prevState => !prevState)
    setInvalidEmail(false)
  }

  async function createUser(email, password) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    if (!response.ok && response.status !== 409) {
      throw new Error(data.message || 'Something went wrong!')
    }

    if (response.status === 409) {
      setInvalidEmail(true)
    }

    return data
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    // TODO: add validation here
    if (isLogin) {
      const result = await signIn('credentials',
        {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
          callbackUrl: '/'
        })

      if (!result.error) {
        router.replace('/profile')
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return <section className={classes.auth}>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    {isInvalidEmail && <h2>Invalid email</h2>}
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="username" >USERNAME</label>
        <input type='text' id='username' ref={emailInputRef} required />
      </div>


      <div className={classes.control}>
        <label htmlFor="password" >PASSWORD</label>
        <input type='password' ref={passwordInputRef} id='password' required />
      </div>

      <div className={classes.actions}>
        <button>{isLogin ? 'Login' : 'Create Account'}</button>
        <button type="button" className={classes.toggle} onClick={switchAuthModelHandler}>
          {isLogin ? 'Create new account ' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>
}

export default AuthForm
