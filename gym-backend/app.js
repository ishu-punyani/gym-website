const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/gymwebsite')
    .then(() => {
        console.log("Database Connected")
      }).catch((err) => {
        console.log("Error while connecting to database",err)
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User",userSchema)

app.post('/login', async (req,res)=>{
    const {email, password} = req.body
    const check = await User.findOne({email:email})
    if(check){
        if(password === check.password)
            res.send({message: "Login Successful", user: check})
        else
            res.send({message: "Wrong Password"})
    }
    else{
        res.send({message: "User not registered"})
    }
})
app.post('/register', async (req,res)=>{
    const {name, email, password} = req.body
    const check = await User.findOne({email:email})
    if(check){
        console.log(check)
        res.send({message: "User already exists."})
    }
    else{
        const user = new User({
            name,
            email,
            password
        })
        const registeredUser = user.save()
        res.status(201).send({message: "successfully registered"})
    }
    // console.log(req.body)
})

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    preference: {
        type: String,
        required: true
    }
})

const Form = mongoose.model('Form',formSchema)

app.post('/contact', async (req,res)=>{
    const {name,email,contact,gender,age,height,weight,preference} = req.body
    const exist = await Form.findOne({email:email})
    if(exist){
        console.log(exist)
        res.send({message: "Form already submitted."})
    }
    else{
        const form = new Form({
            name,
            email,
            contact,
            gender,
            age,
            height,
            weight,
            preference
        })
        const registeredForm = form.save()
        res.status(201).send({message: "Successfully submitted", user: exist})
    }
})

app.listen("4444",()=>{
    console.log("Server started at http://localhost:4444")
})