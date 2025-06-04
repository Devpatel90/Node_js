const schema = require("../model/schema")
const fschema = require("../model/emp")
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    let user = await schema.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ message: "User already exists" });
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await schema.create(req.body).then((data) => {
        return res.status(200).json({ message: "Registration Successful", data });
    })
}

module.exports.login = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });
    if (!admin) {
        return res.status(200).json({ message: "User not found",code:100 });
    }
    if(await bcrypt.compare(req.body.password, admin.password)) {
        const token = jwt.sign({admin},"abc", { expiresIn: '1h' });
        return res.status(200).json({ message: "Login Successful", token:token, code: 200 });     
    }
    else {
        return res.status(200).json({ message: "Invalid Password", code: 102 });
    }
}

module.exports.addEmp = async (req,res) => {
    await fschema.create(req.body).then((data)=>{
        return res.status(200).json({ message: "Data Added", data });
    })
}

module.exports.emp = async (req,res) => {
    const data = await fschema.find({})
    return res.status(200).json(data);
}

module.exports.empdel = async (req,res) => {
    await fschema.findByIdAndDelete(req.params.id);
    return res.status(200).json({message: "Employee Deleted"})
}

module.exports.updateEmp = async (req, res) => {
    try {
        const updated = await fschema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Employee Updated", data: updated });
    } catch (err) {
        res.status(500).json({ message: "Error updating employee", error: err });
    }
};