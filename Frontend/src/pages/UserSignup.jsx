import React from 'react'
import {Link} from 'react-router-dom'
import uberLogo from "../assets/uberlogo.png";
import { useState } from 'react';
const UserSignup = () => {
    const [email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        const[firstname,setFirstname]=useState('')
        const[lastname,setLastname]=useState('')
        const[userData,setUserData]=useState({})
        
   const submitHandler=(e)=>{
    e.preventDefault()
    setUserData({
        fullname:{
            firstname:firstname,
            lastname:lastname
        },
        email:email,
        password:password
    })
    //console.log(userData)
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')

   }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
          <div>
            <img className="w-16 mb-10" src={uberLogo} alt="Uber Logo"/>
           <form onSubmit={(e)=>{
               submitHandler(e)
           }}>
            <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
            <div className='flex gap-4 mb-5'>
                <input
               className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
               required
                value={firstname}
                onChange={(e)=>{
                    setFirstname(e.target.value)
                }}
                type="text" 
                placeholder='First Name'
                /> 
                <input
               className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
               required
                 value={lastname}
                onChange={(e)=>{
                    setLastname(e.target.value)
                }}
                type="text" 
                placeholder='Last Name'
                /> 
            </div>
               <h3 className='text-base font-medium mb-2'>what's your Email</h3>
               <input
               className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
               required
                 value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                type="email" 
                placeholder='email@example.com'
                />
               <h3 className='text-base font-medium mb-2'>Enter Password</h3>
               <input
               className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
               required
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                type="password"
                 placeholder='password'
                 />
               <button 
               className='bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-base placeholder:text-base'
               >Login</button>
               <p className='text-center'>Already have a account? <Link to="/login" className='text-blue-600 '>Login here</Link></p>
           </form>
          </div>
          <div>
               <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>terms of services apply.</span>
               </p>
         </div>
       </div>
  )
}

export default UserSignup