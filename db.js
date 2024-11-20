//import the mysql database management system
const mysql = require('mysql2');

//create a simple conection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = connection