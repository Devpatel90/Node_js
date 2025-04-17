const express = require('express'); 
const path = require('path');   

const port  = 3000; 


const app = express();  
const db = require("./config/db");
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, "public")));

app.use("/",require('./routes/route'));


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})

