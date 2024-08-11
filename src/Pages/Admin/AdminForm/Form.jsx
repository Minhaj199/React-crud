import React from 'react'
import 'AdminForm.css'

export const Form = () => {
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
