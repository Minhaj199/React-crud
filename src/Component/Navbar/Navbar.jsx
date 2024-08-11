import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
    const [state,setState]=useState(false)
  return (
    <div className='navbar'>
        <div className="left">
        <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>About</li>
            <li>contact us</li>
        </ul>
        </div>
        <div className="right">
            <p>log out</p>
            <div className='img-div'>
            {state?<img src="/618yTc8TTfL._SX679_.jpg" alt="" />:'M'}
                
            </div>
            
        </div>
        
    </div>
  )
}
