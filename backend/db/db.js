const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chinmay:chinmay@cluster0.1k05cjv.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connected to db")
})
