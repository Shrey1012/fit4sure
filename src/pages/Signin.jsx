import React from 'react'
import './Signin.css';
import googleLogo from '../assets/googleLogo.svg'
const Signin = () => {
  return (
    <div className='Signin-main'>
      <div className='Signin-left'></div>
      <div className='Signin-right'>
          <h2>Welcome back!</h2>
          <h3>Sign in to continue.</h3>
        <div className='Input-part'>
          <p>Username/Email</p>
          <input type="text" placeholder='Username' />
        </div>
        <div className='Input-part'>
          <p>Password</p>
          <input type="password" name='password' placeholder='Password' />
        </div>
        <button className='S-button'>Signin</button>
        <p>-or-</p>
        <button className='G-button'><img src={googleLogo} alt="Google" /> Continue with Google</button>
        <div className='Signup-switch'>Haven't registered yet? <span>Signup</span></div>
      </div>
      
    </div>
  )
}

export default Signin
