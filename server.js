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

//simple get endpoint to get the patients details and display them
app.get('/patients', (req, res)=>{
    let sql = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
    db.query(sql, (err, results) => {
        if (err) throw err;
        return res.send(results)
    })
})


//simple get endpoint to get the providers details and show them on the page
app.get('/providers', (req, res)=>{
    let sql = 'SELECT provider_speciality, first_name, last_name FROM providers';
    db.query(sql, (err, results) => {
        if (err) throw err;
        return res.send(results)
    })
})


// set up the app to listen for a connection from a port 
app.listen(process.env.DB_PORT, () => {
    console.log(`server running on http://localhost:${process.env.DB_PORT}`)
})