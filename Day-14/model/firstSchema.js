const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }
});

const firstSchema = mongoose.model("first",schema);
module.exports = firstSchema;