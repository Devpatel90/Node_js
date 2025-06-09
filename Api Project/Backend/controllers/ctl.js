const adminschema = require("../model/adminschema")
// const fschema = require("../model/emp")
const managerschema = require("../model/managerschema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")
require('dotenv').config();


const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    let user = await adminschema.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ message: "User already exists" });
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await adminschema.create(req.body).then((data) => {
        return res.status(200).json({ message: "Registration Successful", data });
    })
}

module.exports.login = async (req, res) => {
    let admin = await adminschema.findOne({ email: req.body.email });
    if (!admin) {
        return res.status(200).json({ message: "User not found",code:100 });
    }
    if(await bcrypt.compare(req.body.password, admin.password)) {
        const token = jwt.sign({id: admin._id, role: admin.role },"dev", { expiresIn: '1h' });
        return res.status(200).json({ message: "Login Successful", token:token, code: 200 });     
    }
    else {
        return res.status(200).json({ message: "Invalid Password", code: 102 });
    }
}

module.exports.addManagers = async (req,res) => {
    try {
    const { username, email, phone, password, role } = req.body;

    // Admin ID from verified token
    const adminId = req.userId;

    // Hash manager password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create manager
    const manager = await managerschema.create({
      username,
      email,
      phone,
      password: hashedPassword,
      role,
      adminId,  // captured from token
    });

    // Send email to manager
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to the Manager Portal",
      text: `Hi Mr/Ms ${username},

You have been Registered as a Manager Post.

Login Details:
Email: ${email}
Password: ${password}
Portal Link: http://localhost:5173/Managerlogin

Regards,
Admin Team`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Manager added & email sent", data: manager });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

module.exports.admins = async (req,res) => {
    const data = await adminschema.find({})
    return res.status(200).json(data);
}

module.exports.managers = async (req,res) => {
    const data = await managerschema.find({})
    return res.status(200).json(data);
}

// module.exports.managerdel = async (req,res) => {
//     await managerschema.findByIdAndDelete(req.params.id);
//     return res.status(200).json({message: "Employee Deleted"})
// }

// module.exports.updateEmp = async (req, res) => {
//     try {
//         const updated = await fschema.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json({ message: "Employee Updated", data: updated });
//     } catch (err) {
//         res.status(500).json({ message: "Error updating employee", error: err });
//     }
// };

// module.exports.adminPass = (req, res) => {
//   const { oldPassword, newPassword } = req.body;
//   const userId = req.userId; // set by verifyToken middleware

//   User.findById(userId)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: 'User not found.' });
//       }

//       return bcrypt.compare(oldPassword, user.password).then((isMatch) => {
//         if (!isMatch) {
//           return res.status(400).json({ message: 'Old password is incorrect.' });
//         }

//         return bcrypt.hash(newPassword, 10).then((hashedPassword) => {
//           user.password = hashedPassword;
//           return user.save().then(() => {
//             res.json({ message: 'Password changed successfully.' });
//           });
//         });
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ message: 'Server error.' });
//     });
// };