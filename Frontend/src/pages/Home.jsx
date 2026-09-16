import React from 'react'
import uberLogo from "../assets/uberlogo.png";
import uberLandingPagePic from "../assets/uberlandingpage.jpg"
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className="bg-cover bg-center h-screen pt-8  w-full flex justify-between flex-col"
        style={{ backgroundImage: "url('https://wallpaper.berkasdrive.com/wp-content/uploads/2025/05/photo-1585393948915-011d724d4c2e.jpg')" }}>
            <img className="w-16 ml-8" src={uberLogo} alt="Uber Logo"/>
            <div className='bg-white pb-7 py-5 px-4'>
                <h2 className="text-3xl font-bold">Get started with Uber</h2>
                <Link to='/login'className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home