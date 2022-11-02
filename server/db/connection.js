const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log('DB Connection Successful');
}).catch((err) => {
    console.log(err)
})