const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1/FS_01")

// const db = mongoose.connection;

// db.once("open",(err) => {
//     err ? console.log(err) : console.log("Database connected successfully");
// });

// module.exports = db;
mongoose.connect("mongodb+srv://devsojitra02:nR0R7hXgTHe8ODHd@cluster0.bfpnke6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("database connected");
})

module.exports = mongoose