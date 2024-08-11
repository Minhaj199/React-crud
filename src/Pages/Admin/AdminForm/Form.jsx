import React, { useState } from 'react'
import './AdminForm.css'

export const Form = () => {
  const [register,switching]=useState(false)
    return (
    <div className='AdLogin'>
      
      <div className="form">
      <h1>{register?'Add User':'Edit User'}</h1>
      <div className="profile-img">
          <img src="/618yTc8TTfL._SX679_.jpg" alt="" />
          <input id="input id" type="file" />
        </div>
      <input type="name" placeholder="User Name" name="useName" />
      <input type="email" placeholder="Email" name="email" />
        <input type="tel" placeholder="Mobile" name="phone" />
        <input type="password" placeholder="Password" name="password" />
        <input
              type="password"
              placeholder="Confirm password"
              name="c-password"
            />
        <button>{register?'Submit user':'Submit change'}</button>
      </div>
    </div>
  )
}
