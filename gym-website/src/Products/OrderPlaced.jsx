import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderPlaced() {
    const navigate = useNavigate()
  return (
    <div class="alert alert-success" role="alert">
        <h2>Your Order has been placed. Go back to</h2>
            <button className='btn btn-outline-success' onClick={()=> navigate('/')}>Homepage</button> <h2>or</h2> 
            <button className='btn btn-outline-success'onClick={()=> navigate('/products')}>Continue Shopping</button>
    </div>
  )
}

export default OrderPlaced