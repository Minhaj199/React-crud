import { useState } from 'react'
import { Login } from './Pages/User/Login/Login'
// import {Home} from './Pages/User/Home/Home'
import { Navbar } from './Component/Navbar/Navbar'
import { Home } from './Pages/User/Home/Home'
import { Profile } from './Pages/User/Profile/Profile'
import { AdLogin } from './Pages/Admin/Login/AdLogin'

import './App.css'

function App() {
 

  return (
    <>
    {/* <Navbar/> */}
    <AdLogin/>
  
    </>
  ) 

}

export default App
