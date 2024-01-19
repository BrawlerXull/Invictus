
const express = require("express");
const User = require("./schema/schema");
const cors = require('cors')
require("./db/db");
const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post('/sign',async(req,res)=>{
    const x = req.body.email
    const y = req.body.password
    const newUser = {
        email : x,
        password : y
    }
    const resp = await User.findOne({email : x});
    if(resp){
       return res.status(400).send({"response" : "user already exist"});
    }
    const result  = await User.insertMany(newUser);
    console.log(result)

    res.send({"response" : "New user created"});
})

app.post('/login',async(req,res)=>{
    const x = req.body.email
    const y = req.body.password
    const resp = await User.findOne({email : x , password : y});
    if(resp){
       return res.status(200).send({"response" : "successfly login"});
    }
    res.status(400).send({"value" : "Check username or password"});
})

app.listen("5100", () => {
  console.log("server started");
});



