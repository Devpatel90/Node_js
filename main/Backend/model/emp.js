const mongoose = require("mongoose")


const emp = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    department:{
        type : String,
        required : true
    },
    role:{
        type : String,
        required : true
    },

})

const fschema = mongoose.model("emp",emp);
module.exports = fschema;