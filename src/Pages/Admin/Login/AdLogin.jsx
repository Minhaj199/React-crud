import React from 'react'
import './AdLogin.css'

export const AdLogin = () => {
  return (
    <div className='AdLogin'>
      
      <div className="form">
      <h1>Admin login</h1>
        <input type="email" />
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  )
}
