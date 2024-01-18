
const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017').then(() => {
        console.log("Connected to db");
    }).catch((err) => {
        console.error("Error connecting to db:", err);
    });
};

module.exports = { connectDB };
