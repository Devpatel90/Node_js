const adminschema = require("../model/adminschema")
// const fschema = require("../model/emp")
const managerschema = require("../model/managerschema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")
require('dotenv').config();


const jwt = require('jsonwebtoken');


module.exports.managerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const manager = await managerschema.findOne({ email });
        if (!manager) {
            return res.status(200).json({ message: "Manager not found", code: 100 });
        }

        const isMatch = await bcrypt.compare(password, manager.password);
        if (!isMatch) {
            return res.status(200).json({ message: "Invalid Password", code: 102 });
        }

        const token = jwt.sign({ id: manager._id, role: manager.role }, process.env.JWT_SECRET || "dev", { expiresIn: '1h' });

        return res.status(200).json({ message: "Login Successful", token: token, code: 200 });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};