const schema = require('../model/schema');
const bcrypt = require('bcryptjs');


module.exports.register = async(req, res) => {
    let Admin = await schema.findOne({ email: req.body.email });
    if (Admin) {
        return res.status(200).json({ message: "User already exists" });
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    await schema.create(req.body).then((data) => {
        return res.status(200).json({ message: "User registered successfully", data });
    })
}