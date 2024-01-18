const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username: {
        required : true,
        unique : true,
        type : String
    },
    email: {
        required : true,
        unique : true,
        type : String
    },
    password: {
        required : true,
        type : String
    }
})

module.exports = mongoose.model('User' , UserSchema)