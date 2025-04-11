const mongoose = require("mongoose");

const schema = mongoose.Schema({
    img : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    des : {
        type : String,
        required : true
    }
})

const fschema = mongoose.model("book",schema);
module.exports = fschema;