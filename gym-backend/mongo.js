const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
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
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    preference: {
        type: String,
        required: true
    }
})

const Client = new mongoose.model('Client',clientSchema)

module.exports = Client