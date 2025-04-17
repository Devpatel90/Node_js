const express = require('express');
const path = require('path');
const fs =require('fs');
const port = 1111;
const app = express();

const db = require("./config/db");
const schema = require("./model/fschema");
const multer = require("./middleware/multer");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(path.join(__dirname, "uploads")));


app.get("/", async(req, res) => {
    await schema.find({}).then((book)=>{
        res.render("index",{book})
    })
})

app.get("/addBook", (req, res) => {
    res.render("addbook");
});

app.post("/setbook",multer,async(req, res) => {
    req.body.image = req.file.path;
    await schema.create(req.body).then(() => {
        res.redirect("/");
    });

    // console.log(req.body);
    // console.log(req.file);    
})

app.get("/delbook",async(req, res) => {
    let singleData = await schema.findById(req.query.id);
    fs.unlinkSync(singleData.image)
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/");
    }) 
})

app.get("/editbook",async(req,res)=>{
    let data = await schema.findById(req.query.id);
    res.render("edit",{data})
})

app.post("/updatebook",multer,async(req,res)=>{
    let singleData = await schema.findById(req.body.id);
    let img = ""

    req.file ? img = req.file.path : img = singleData.image;
    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img;
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started");  
})
