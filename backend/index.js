const express = require("express");
const User = require("./schema/schema");
const Query = require("./schema/query");
const cors = require("cors");
require("./db/db");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/sign", async (req, res) => {
  try {
    const x = req.body.email;
    const y = req.body.password;
    const z = req.body.name;
    const address = req.body.address;
    const coowner1 = req.body.coowner1;
    const coowner2 = req.body.coowner2;
    const phone = req.body.phone;
    const company = req.body.company;
    const newUser = {
      email: x,
      password: y,
      name: z,
      address: address,
      coowner1: coowner1,
      coowner2: coowner2,
      phone: phone,
      company: company,
    };

    const resp = await User.findOne({ email: x });

    if (resp) {
      return res.status(409).send({ response: "User already exists" });
    }

    const result = await User.create(newUser);
    console.log(result);

    res.status(201).send({ response: "New user created" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ response: error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const x = req.body.email;
    const y = req.body.password;

    const resp = await User.findOne({ email: x, password: y });

    if (resp) {
      res.status(200).send({ response: "Successfully logged in" });
    } else {
      res.status(401).send({ response: "Check username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ response: "Internal Server Error" });
  }
});

app.post("/getuser", async (req, res) => {
  try {
    const x = req.body.email;

    const resp = await User.findOne({ email: x });

    if (resp) {
      res.status(200).send({ response: "Successfully found user", user: resp });
    } else {
      res.status(401).send({ response: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ response: "Internal Server Error" });
  }
});

app.post('/query' , async(req , res)=>{
  try{
    const x = req.body.email;
    const y = req.body.query;

    const newQuery = {
      email : x,
      query : y
    }

    const result = await Query.create(newQuery);

    res.status(200).send({ response: "Successfully creatd query", user: result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ response: error });
  }
})

app.post("/updateproducts", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const newProducts = req.body.products;

    const updatedUser = await User.findOneAndUpdate(
      { email: userEmail },
      { $set: { products: newProducts } },
      { new: true }
    );

    if (updatedUser) {
      res
        .status(200)
        .json({ response: "Successfully updated user", user: updatedUser });
    } else {
      res.status(404).json({ response: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ response: error });
  }
});

app.post("/updateuser", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const coowner1 = req.body.coowner1;
    const coowner2 = req.body.coowner2;
    const phone = req.body.phone;
    const address = req.body.address;



    const updatedUser = await User.findOneAndUpdate(
      { email: userEmail },
      { $set: { coowner1: coowner1 ,coowner2:coowner2 , phone : phone ,address ,address} },
      { new: true }
    );

    if (updatedUser) {
      res
        .status(200)
        .json({ response: "Successfully updated user", user: updatedUser });
    } else {
      res.status(404).json({ response: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ response: error });
  }
});



app.listen("5100", () => {
  console.log("Server started");
});
