import React, { useState } from 'react'
import './contact.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Contact({setLoginUser, name}) {
  const navigate = useNavigate()
  const [result,setResult] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    preference: ""
  })
  const handleChange = ((e)=>{
    console.log(form)
    const {name,value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    const {name , email , contact , gender , age,height,weight,preference} = form
    if(name && email && contact && gender && age && height && weight && preference)
    {
      axios.post('http://localhost:4444/contact', form)
      .then((res)=>{
        console.log(res)
        setForm({
          name: "",
          email: "",
          contact: "",
          gender: "",
          age: "",
          height: "",
          weight: "",
          preference: ""
        })
        setResult("Form Submitted Successfully! We will connect with you soon...")
        setTimeout(()=>{
        setResult("")
      },3000)
      })
    } else if(name === "" || email === "" || contact === "" || gender === "" || age === "" || height === "" || weight === "" || preference === ""){
        setResult('Fields cannot be empty!')
        setTimeout(()=>{
        setResult("")
      },3000)
    }
    
  }
  
  // const handlelogout = (()=>{
  //   setLoginUser = ({})
  //   navigate('/login')
  // })

  return (
    <>
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

    
    <div className='contact'>
      <div className='contact-left'>
        <img src="contact.webp" alt="contact" />
      </div>
      <div className='contact-right'>

        <form action="/contact" method='post' onSubmit={handleSubmit}>
          <input className='inp' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange}/>
          <input className='inp' type="text" placeholder='Email' name='email' value={form.email} onChange={handleChange}/> 
          <input className='inp' type="text" placeholder='Contact' name='contact' value={form.contact} onChange={handleChange}/> 
          <label htmlFor="gender">
            <input className='radio-btn' type="radio" name='gender' value='Male' onChange={handleChange}/> <span>Male</span>
          </label>
          <label htmlFor="gender">
            <input className='radio-btn' type="radio" name='gender' value='Female' onChange={handleChange}/> <span>Female</span>
          </label>  
          <input className='inp' type="number" min='16' placeholder='Age' name='age' value={form.age} onChange={handleChange}/> 
          <input className='inp' type="number" min='120' placeholder='Height(in cm)' name='height' value={form.height} onChange={handleChange}/>
          <input className='inp' type="number" min='40' placeholder='Weight(in kg)' name='weight' value={form.weight} onChange={handleChange}/>
          <label htmlFor="preference">
            <input className='radio-btn' type="radio" name='preference' value='Weight-Gain' onChange={handleChange}/> <span>Weight Gain</span>
          </label>
          <label htmlFor="preference">
            <input className='radio-btn' type="radio" name='preference' value='Weight-Loss' onChange={handleChange}/> <span>Weight Loss</span>
          </label>
          <label htmlFor="preference">
            <input className='radio-btn' type="radio" name='preference' value='Stay-Fit' onChange={handleChange}/> <span>Stay Fit</span>
          </label> 
          <button id='btn' type='submit'>Submit</button>
          <span >
            {result}
          </span>
        </form>
      </div>
    </div>
    </>
      
  )
}

export default Contact