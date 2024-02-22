import React from 'react'
import './gallery.css'
import { useNavigate } from 'react-router-dom'

import LightGallery from 'lightgallery/react/Lightgallery.es5'

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-autoplay.css'
import 'lightgallery/css/lg-share.css'
import 'lightgallery/css/lg-rotate.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgShare from 'lightgallery/plugins/share'
import lgRotate from 'lightgallery/plugins/rotate'

function Gallery({setLoginUser, name}) {

  const navigate= useNavigate()
  
  return (
    <div className='gallery'>
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
          {/* <span className='navbar-btn' onClick={() => setLoginUser({})}>Logout</span> */}
        </div>
      </div>

      <div className="container-gallery">
        <div className="glry">
      
      <LightGallery 
        speed={500}
        plugins={[lgAutoplay,lgRotate,lgThumbnail,lgZoom,lgShare]}>
        
        {/* <div className="container-gallery">
          <div className="glry"> */}
            <a href="gymphoto1.jpg">
              <img className='img' src="gymphoto1.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto2.jpg">
              <img className='img' src="gymphoto2.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto3.jpg">
              <img className='img' src="gymphoto3.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto4.jpg">
              <img className='img' src="gymphoto4.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto5.jpg">
              <img className='img' src="gymphoto5.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto6.jpg">
              <img className='img' src="gymphoto6.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto7.jpg">
              <img className='img' src="gymphoto7.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto8.jpg">
              <img className='img' src="gymphoto8.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto9.jpg">
              <img className='img' src="gymphoto9.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto10.jpg">
              <img className='img' src="gymphoto10.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto11.jpg">
              <img className='img' src="gymphoto11.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto12.jpg">
              <img className='img' src="gymphoto12.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto13.jpg">
              <img className='img' src="gymphoto13.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto14.jpg">
              <img className='img' src="gymphoto14.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto15.jpg">
              <img className='img' src="gymphoto15.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="gymphoto16.jpg">
              <img className='img' src="gymphoto16.jpg" alt="1" height={300} width={300}/>
            </a>
            {/* <img src="gymphoto1.jpg"/>
            <img src="gymphoto2.jpg"/>
            <img src="gymphoto3.jpg"/>
            <img src="gymphoto4.jpg"/>
            <img src="gymphoto5.jpg"/>
            <img src="gymphoto6.jpg"/>
            <img src="gymphoto7.jpg"/>
            <img src="gymphoto8.jpg"/>
            <img src="gymphoto9.jpg"/>
            <img src="gymphoto10.jpg"/>
            <img src="gymphoto11.jpg"/>
            <img src="gymphoto12.jpg"/>
            <img src="gymphoto13.jpg"/>
            <img src="gymphoto14.jpg"/>
            <img src="gymphoto15.jpg"/>
            <img src="gymphoto16.jpg"/> */}
          {/* </div>
        </div> */}
      </LightGallery>
      </div>
      </div>
    </div>
  )
}

export default Gallery