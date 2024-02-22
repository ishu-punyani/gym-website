import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductHome from './Producthome'
import './products.css'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'

// import './node_modules/bootstrap/dist/css/bootstrap.min.css'

function Products({setLoginUser, name}) {
    const navigate= useNavigate()
    
  return (
    <div className='products'>

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
        {/* <span className='navbar-btn' onClick={() => setLoginUser({})}>Logout</span> */}
      </div>
      </div>
      <br /><br /><br />
      <CartProvider>
        <ProductHome/>
        <Cart/>
      </CartProvider>
    </div>
  )
}

export default Products
