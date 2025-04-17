const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/db");

const db = mongoose.connection;

db.once('open', (err) => {                     //next observer function
    err ? console.log(err) : console.log("Database connected successfully");
})

module.exports = db; // Export the database connection