const mongoose = require("mongoose")

const schema = mongoose.Schema({
    movie_img : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    votes : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    language : {
        type : String,
        required : true
    },

})

const firstschema = mongoose.model("movieApp",schema);

module.exports = firstschema;