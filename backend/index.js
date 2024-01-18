const express = require("express");
const { connectDB } = require('./db/db'); 
const User  = require('./models/user')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); 

connectDB();

app.get('/', (req, res) => {
    res.send({ ok: "hello" });
});

app.post('/register', async (req, res) => {
    try {
        const value = { username: req.body.username, password: req.body.password ,email:req.body.email};
        const isExisting = await User.findOne(value);
        if (isExisting) {
            return res.status(400).send({ error: "User already registered" });
        }
        const result = await User.insertMany(value);
        res.send(result);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.post('/login', async (req, res) => {
    try {
        const value = { email: req.body.email, password: req.body.password };
        const result = await User.findOne(value);
        if(result){
            return res.send(result);
        }
        res.send("User not found")
        
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.listen(5020, () => {
    console.log("Server started at port 5020");
});
