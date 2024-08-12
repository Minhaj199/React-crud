import { useState } from 'react'
import { Login } from './Pages/User/Login/Login'
// import {Home} from './Pages/User/Home/Home'
import LayOut from './LayOut'
import { Home } from './Pages/User/Home/Home'
import { Profile } from './Pages/User/Profile/Profile'
import { AdLogin } from './Pages/Admin/Login/AdLogin'
import { Dash } from './Pages/Admin/AdminDashboard/Dash'
import { Form } from './Pages/Admin/AdminForm/Form'

import { Routes,Route } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    
    <>
    <Routes>
      
        <Route path='/' element={<LayOut><Home/></LayOut>}></Route>
        <Route path='/login' element={<LayOut><Login/></LayOut>}></Route>
        <Route path='/profile' element={<LayOut><Profile/></LayOut>}></Route>
        <Route path='/adminLogin' element={<LayOut><AdLogin/></LayOut>}></Route>
        <Route path='/dash' element={<LayOut><Dash/></LayOut>}></Route>
        <Route path='/form' element={<LayOut><Form/></LayOut>}></Route>

      
    </Routes>
    </>
  ) 

}

export default App
