const express = require("express");
const app = express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

//Converting the required data to json
app.use(bodyParser.json());

// App is ready now

//Import Routes
const postRoute=require('./routes/posts');
app.use('/posts',postRoute);


//Middlewares in Express - something in middle works when some hits
//Example - authanticate user before any operation
// app.use('/posts', ()=>{
//     console.log('This is a middleware running');
// })

//Routes
app.get('/', (req, res)=>{
 res.send("Home Page");
});

//Connecting to Mongodb
mongoose.connect(process.env.DB_CONNECTION, console.log('connected to MongoDB'));
//Start listening to the server
app.listen(3000); //Port number