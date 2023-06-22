import { auth } from '../firebase'


const Profile = () => {

  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <div>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default Profile