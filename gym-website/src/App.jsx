import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact Us'
import Gallery from './Gallery/Gallery'
import Login from './Login/Login'
import Register from './Register/Register'
import Products from './Products/Products'
import OrderPlaced from './Products/OrderPlaced'
import './global.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [user,setLoginUser] = useState({})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = 
          {
            user && user._id ? 
            <Home setLoginUser={setLoginUser} name={user.name}/> : <Login setLoginUser={setLoginUser}/>
          }/>
          {/* <Route path ='/contact' element = 
          {
            user && user._id ?
            <Contact setLoginUser={setLoginUser} name={user.name}/> : <Login setLoginUser={setLoginUser}/>
          }/>
          <Route path ='/gallery' element = 
          {
            user && user._id ?
            <Gallery setLoginUser={setLoginUser} name={user.name}/> : <Login setLoginUser={setLoginUser}/>
          }/> */}
          {/* <Route path ='/products' element = 
          {
            user && user._id ?
            <Products setLoginUser={setLoginUser} name={user.name}/> : <Login setLoginUser={setLoginUser}/>
          }/> */}
          <Route path='/contact' element = {<Contact name={user.name}/>}/>
          <Route path='/gallery' element = {<Gallery name={user.name}/>}/>
          <Route path='/products' element = {<Products name={user.name}/>}/>
          <Route path='/order-placed' element = {<OrderPlaced name={user.name}/>}/>
          <Route path='/login' element = {<Login setLoginUser={setLoginUser}/>}/>
          <Route path='/register' element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
