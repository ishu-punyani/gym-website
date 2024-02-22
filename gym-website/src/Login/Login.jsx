import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'

function Login( {setLoginUser} ) {
    const [result,setResult] = useState("")
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = ((e)=>{
        
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    })
    const login = ()=>{
        axios.post('http://localhost:4444/login', user)
        .then((res)=>{
            // console.log(res)
            // console.log(res.data.user)
            // console.log(res.data.message)
            if(res.data.message === 'Login Successful')
            {
                setLoginUser(res.data.user)
                // setName(res.data.user.name)
                // setResult("Login Successful")
                navigate('/')
            } else if(res.data.message === 'Wrong Password'){
                setResult("Wrong Password!")
            } else if(res.data.message === 'User not registered'){
                setResult("User not registered!")
            } 
            setTimeout(()=>{
                setResult("")
            },3000)
        })
    }
  return (
    <div className='login-body'>
        <div className="login">
            <h1>LOGIN</h1>
            <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter email' />
            <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter password' />
            <button className="login-btn" onClick={login}>Login</button> <span className='result'>{result}</span><br />
            <div>
            <h3>Don't have an account?</h3>
            <button className="login-btn" onClick={()=>navigate('/register')}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Login
