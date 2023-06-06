import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const ProfileScreen = () => {

  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
            <h3>Plans</h3>
            <p>Renewal date: 04/03/2021</p>
            <p>Stripe is not available in Colombia.</p>
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen