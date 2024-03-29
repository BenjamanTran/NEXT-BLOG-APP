import ProfileForm from "./profile-form"
import classes from './user-profile.module.css'

const UserProfile = () => {
  const changePasswordHandler = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)
  }




  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  )
}

export default UserProfile
