const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,

    }
})

const adminschema = mongoose.model('admins', schema);
module.exports = adminschema;