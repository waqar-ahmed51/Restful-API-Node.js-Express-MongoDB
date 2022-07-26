const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const mongoose=require('mongoose');
require('dotenv/config');

// App is ready now

//Middlewares in Express - something in middle works when some hits
//Example - authanticate user before any operation
// app.use('/posts', ()=>{
//     console.log('This is a middleware running');
// })

//Routes
app.get('/', (req, res)=>{
 res.send("Home Page");
});

app.get('/posts', (req, res)=>{
    res.send("Post Page");
   });

//Connecting to Mongodb
mongoose.connect(process.env.DB_CONNECTION, console.log('connected to MongoDB'));
//Start listening to the server
app.listen(3000); //Port number