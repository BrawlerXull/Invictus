const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const UserSchema = mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    coowner1: {
        type: String,
    },
    coowner2: {
        type: String,
    },
    phone: {
        type: String,
    },
    contact: {
        type: String,
    },
    company: {
        type: String,
    },
    products: [ProductSchema], 
});

module.exports = mongoose.model('User', UserSchema);
