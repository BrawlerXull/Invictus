const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email :{
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String
    },
    name : {
        required : true,
        type : String
    },
    address : {
        required : true,
        type : String
    },
    coowner1: {
        type: String
    },
    coowner2: {
        type: String
    },
})

module.exports = mongoose.model('User', UserSchema);