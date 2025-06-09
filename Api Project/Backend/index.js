const express = require("express");
const port = 1111;
require('dotenv').config();
const app = express();
const cors = require("cors");
const db = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/",require("./routes/route"));
app.use("/manager",require("./routes/Manager"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})  