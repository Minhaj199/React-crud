import React from 'react'
import './AdLogin.css'

export const AdLogin = () => {
  return (
    <div className='AdminLogin'>
      
      <div className="form">
      <h1>Admin login</h1>
        <input placeholder='Email' name='email' type="email" />
        <input placeholder='password' type="password" />
        <button>Login</button>
      </div>
    </div>
  )
}
