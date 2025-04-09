const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    sub : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
})

const fschema = mongoose.model("student",schema);
module.exports = fschema;