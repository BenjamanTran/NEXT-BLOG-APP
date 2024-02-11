import { useState } from "react"
import classes from './auth-form.module.css'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const switchAuthModelHandler = () => {
    setIsLogin(prevState => !prevState)
  }

  return <section className={classes.auth}>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form>
      <div className={classes.control}>
        <label htmlFor="username" >USERNAME</label>
        <input type='text' value={username} id='username' onChange={event => setUsername(event.target.value)} required />
      </div>


      <div className={classes.control}>
        <label htmlFor="password" >PASSWORD</label>
        <input type='password' value={password} id='password' onChange={event => setPassword(event.target.value)} required />
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
