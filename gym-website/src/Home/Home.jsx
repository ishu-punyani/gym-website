import React from 'react'
import Midsection from './Midsection'
import Footer from './Footer'
import '../global.css'
import './home.css'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Home( {setLoginUser, name}) {
    const navigate = useNavigate()
  return (
    // console.log(user)
    <div className='home-container'>
      {/* <Navbar/> */}
      <div className='navigation'>
      <div className='navigation-logo'>
        <img src="/fitness future logo.png" alt="Gym-logo" />
        <span className='home-welcome'>Hi {name}, Welcome to FITNESS FUTURE GYM</span>
      </div>
      <div className='anchor'>
        <span className='navbar-btn' onClick={()=>navigate('/')}>Home</span>
        <span className='navbar-btn' onClick={()=>navigate('/contact')}>Contact Us</span>
        <span className='navbar-btn' onClick={()=>navigate('/gallery')}>Gallery</span>
        <span className='navbar-btn' onClick={()=>navigate('/products')}>Products</span>
        <span className='navbar-btn' onClick={() => setLoginUser({})}>Logout</span>
      </div>
    </div>
    
      <Midsection/>
      <Footer/>
    </div>
  )
}

export default Home