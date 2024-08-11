import React from 'react'
import './NavAdmin.css'
export const NavAdmin = () => {
  return (
    <div  className='nav-bar'>
        <div className="left">
            <input type="text" placeholder='Search.........?' />
            <button>Search</button>
        </div>
        <div className="right">
        <p>Log out</p>
        </div>
        
    </div>
  )
}
