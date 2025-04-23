const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;


app.use('/', (req,res)=>{
    res.send("Hello World from server");
})

app.listen((PORT), ()=>{
    console.log(`The App is running in Port ${PORT}`)
})