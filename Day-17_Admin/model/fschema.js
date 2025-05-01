const mongoose = require("mongoose");

const schema = mongoose.Schema({
    profile:{
        type : String,
        required : true,    
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },  
    pass : {
        type : String,
        required : true
    },
    cpass : {
        type : String,
        required : true
    },
});

const fSchema = mongoose.model("users",schema);
module.exports = fSchema;