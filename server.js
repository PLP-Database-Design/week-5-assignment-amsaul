//import express for setting up our server
const express = require('express');
const app = express();
require('dotenv').config()

//import the db config from db
const db = require('./db')



//create a simple connection to the database
db.connect((err) => {
    if(err) throw err;
    console.log('connected to the database')
})

//simple get endpoint
app.get('/', (req, res)=>{
    res.send('king is back');
})







// set up the app to listen for a connection from a port 
app.listen(process.env.DB_PORT, () => {
    console.log(`server running on http://localhost:${process.env.DB_PORT}`)
})