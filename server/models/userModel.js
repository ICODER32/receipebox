const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

}, { timestamps: true })



module.exports = new mongoose.model('user', userModel)