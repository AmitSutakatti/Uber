import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptianLogin from './pages/CaptianLogin'
import CaptianSignup from './pages/CaptianSignup'
import { UserDataContext } from './context/userContext'
const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<UserLogin/>}/>
         <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captian-login' element={<CaptianLogin/>}/>
         <Route path='/captian-signup' element={<CaptianSignup/>}/>
      </Routes>
    </div>
  )
}

export default App