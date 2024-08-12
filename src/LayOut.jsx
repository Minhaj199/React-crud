import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Component/Navbar/Navbar'

 const LayOut = ({children}) => {
    const location=useLocation()
    const noNavbarRoutes=['/login','/profile','/adminLogin','/dash','/form']
    const showNavbar=!noNavbarRoutes.includes(location.pathname)
  return (
    <div>
        {showNavbar&& <Navbar/>}
        {children}
    </div>
  )
}
export default LayOut
