import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../componant/Home'
import Login from '../componant/Login'
import Logout from '../componant/Logout'

function AllRoute() {
  return (
    <div>
        <Routes>
        <Route path="/"  element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>} />
        </Routes>
    </div>
  )
}

export default AllRoute