import Link from "next/link"
import Logo from "./logo"
import classes from './main-navigation.module.css'
import { useSession, signOut } from "next-auth/react"

export default function MainNavigation() {
  const { data: session, status } = useSession()

  const logoutHandler = () => {
    signOut()
  }

  return (<header className={classes.header}>
    <Link href='/'>
      <Logo />
    </Link>
    <nav>
      <ul>
        <li><Link href='/posts'>Posts</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        {!session && status !== 'authenticated' && (
          <li><Link href='/auth'>Login</Link></li>
        )}
        {status === 'authenticated' && (
          <li><Link href='/profile'>Profile</Link></li>
        )}
        {status === 'authenticated' && (
          <li><button onClick={logoutHandler}>Logout</button></li>
        )}
      </ul>
    </nav>
  </header>)
}
