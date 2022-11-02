const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const userRoutes = require('../routes/userRoutes')

require('../db/connection')





app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors())

app.use('/api', userRoutes)

app.listen(5000, () => {
    console.log('Servre Started at 5000');
})