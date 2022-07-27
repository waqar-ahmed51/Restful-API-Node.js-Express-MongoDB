//Import ExpressJS
const express = require("express");
const app = express();

//Import .env file for MongoDB Link
require('dotenv/config');

//Import MongoDB
const mongoose=require('mongoose');

//Import bodyParser - Converting the required data to json
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Import posts.js routesr
const postRoute=require('./routes/posts');
app.use('/posts',postRoute);

//Routes Home
app.get('/', (req, res)=>{
 res.send("Home Page");
});

//Connecting to Mongodb - Cloud path is in .env file
mongoose.connect(process.env.DB_CONNECTION, console.log('Connected to MongoDB!'));

//Start listening to the server
app.listen(3000); //Port number