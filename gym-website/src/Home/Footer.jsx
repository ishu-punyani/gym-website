import React from 'react'
import './Footer.css'

function footer() {
  return (
    <div className='footer'>
      <div className='footer-part fone'>
        <img src="fitness future logo.png" alt="" /> <br />
        <p>We are Delhi's most loved Fitness branch. Join us now !</p>
      </div>
      <div className='footer-part ftwo'>
        <h1>GET IN TOUCH</h1>
        <p>fitnessfuturegym@gmail.com&#128231; </p>
        <p>+91-9999888822</p>
      </div>
      <div className='footer-part fthree'>
        <h1>CONNECT WITH US</h1>
        <i class="fa fa-facebook">Facebook</i>
        <i class="fa fa-instagram">Instagram</i>
        <i class="fa fa-youtube">Youtube</i>
      </div>
    </div>
  )
}

export default footer