const bcrypt = require('bcryptjs')
const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password

    try {
        const user = await User.find({ email: email })
        const verifyPass = await bcrypt.compare(password, user[0].password)
        if (verifyPass) {
            res.send(user)
        } else {
            res.status(400).send('User Not Found')
        }
    } catch (error) {
        res.status(400).send(error)
    }
})
router.post('/signup', async (req, res) => {

    const fullName = req.body.fullName;
    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const password = hashedPassword
    try {
        const user = new User({
            fullName, email, password
        })
        const createdUser = await user.save()
        res.send(createdUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router