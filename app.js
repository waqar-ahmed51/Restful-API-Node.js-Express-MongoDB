//Import ExpressJS
const express = require("express");
const app = express();

//Import .env file for MongoDB Link
require('dotenv/config');

//Import Cors
const cors=require('cors');

//Import MongoDB
const mongoose=require('mongoose');

//Middleware for cross domain fetching - npm install cors
app.use(cors());

//Import bodyParser - Converting the required data to json
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Import products.js routes
const productsRoute=require('./routes/products');
app.use('/products',productsRoute);

//Routes Home
app.get('/', (req, res)=>{
 res.send("Home Page - Product Rest API");
});

//Connecting to Mongodb - Cloud path is in .env file
mongoose.connect("mongodb+srv://waqar:wa12345@cluster0.avpoiob.mongodb.net/?retryWrites=true&w=majority", console.log('Connected to MongoDB!'));

//Start listening to the server
app.listen(4000); //Port number