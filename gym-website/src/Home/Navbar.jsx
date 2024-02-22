import React from 'react'

import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate
  return (
    <div className='navigation'>
      <div className='navigation-logo'>
        <img src="/fitness future logo.png" alt="Gym-logo" />
        <span>FITNESS FUTURE GYM</span>
      </div>
      <div className='anchor'>
        <span className='navbar-btn' onClick={()=>navigate('/')}>Home</span>
        <span className='navbar-btn' onClick={()=>navigate('/contact')}>Contact Us</span>
        <span className='navbar-btn' onClick={()=>navigate('/gallery')}>Gallery</span>
        <span className='navbar-btn' onClick={()=>navigate('/products')}>Products</span>
        <span className='navbar-btn 'onClick={() => setLoginUser({})}>Logout</span>
      </div>
    </div>
  )
}

export default Navbar
