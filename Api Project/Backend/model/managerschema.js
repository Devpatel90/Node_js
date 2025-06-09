const mongoose = require("mongoose")


const manager = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ['active', 'deactive'],
    default: 'active'
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admins",
    required: true
  }
});


const managerschema = mongoose.model("Managers",manager);
module.exports = managerschema;