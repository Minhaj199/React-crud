import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-form'>
      <h1>User Login</h1>
      <form >
      <input type="name" placeholder='User Name' name='useName' />
      <input type="email" placeholder='Email' name='email' />
      <input type="tel" placeholder='Mobile' name='phone' />
      <input type="password" placeholder='Password' name='password'/>
      <input type="password" placeholder='Confirm password' name='c-password'/>
      <button type='submit'>Sign in</button>
      </form>
      <p>Not Having Account</p>
      </div>
            
    </div>
  )
}
