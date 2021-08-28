const express = require('express');
const connectDB = require('./db');
const app = express();
require('dotenv').config()//Allows us to use environmental variables in env.
const {PORT} = process.env;

//connecting db
connectDB();




//Initialize express middleware
app.use(express.json({extended: false}));

//creating a basic express route
app.get('/',(req,res)=> res.json({message:'Welcome;You would be glad you joined us'}))

// port
const port = process.env.PORT || PORT

//listen to connection
app.listen(port, () => {
    console.log('The server is good to go')
})