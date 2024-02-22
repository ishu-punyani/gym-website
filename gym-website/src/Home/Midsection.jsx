import React from 'react'
import './Midsection.css'
import { useNavigate } from 'react-router-dom'

function midsection() {
  const navigate = useNavigate()
  return (
    <div className='midsection'>
      <div className='mid-one'>
        <div className='one-left'>
            <h1>Get Ready to TRANSFORM!</h1> <br />  <br />
            <p>Are you ready to take your transformation to next level with latest equipments? Look no further! At Fitness Future, we specialize in providing best services. Our team has elite trainers with great knowledge and provide best solutions to meet your unique needs whether its weight loss or gain muscle.</p>
            <br /><br />
            <button onClick={()=> navigate('/contact')}>Contact Now</button>
        </div>
        <div className='one-right'>
            <img src="/fitness future logo.png" alt="" />
        </div>
      </div>
      <div className='mid-two'>
        <div className='part'>
            <div className='bold'>20+</div>
            <div className='small'>Branches in Delhi</div>
        </div> 
        <div className='bar'></div>
        <div className='part'>
            <div className='bold'>5000+</div>
            <div className='small'>Happy Clients</div>
        </div> 
        <div className='bar'></div>
        <div className='part'>
            <div className='bold'>5+</div>
            <div className='small'>Medals Recieved from BBFA</div>
        </div> 
        <div className='bar'></div>
        <div className='part'>
            <div className='bold'>12Hrs</div>
            <div className='small'>Open</div>
        </div>
      </div>
      <div className='mid-three'>
        <div className='one-right three-left'>
        <img src="./fitness.jpg" alt="" />
        </div>
        <div className='three-right'>
            <h1>Supplements - Your Supporter <br /> <br /></h1>
            <p>We porvide the best range of supplements for extreme results. No need to worry about duplicacy as we are certified from BBFA, the top organization of standards. <br />
            Click below to check out some amazing products. <br /><br /> <br /></p>
            <button onClick={()=> navigate('/products')}>Products</button>
        </div>
      </div>
    </div>
  )
}

export default midsection
