const express = require('express');
const path = require('path');
const port = 1111;
const app = express();

const db = require("./config/db");
const schema = require("./model/fschema");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));


app.get("/", async(req, res) => {
    await schema.find({}).then((book)=>{
        res.render("index",{book})
    })
})

app.get("/addBook", (req, res) => {
    res.render("addbook");
});

app.post("/setbook",async(req, res) => {
    await schema.create(req.body).then(() => {
        res.redirect("/");
    }); 
})

app.get("/delbook",async(req, res) => {
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/");
    }) 
})

app.get("/editbook",async(req,res)=>{
    await schema.findById(req.query.id).then((singleData)=>{
        res.render("Edit",{singleData})
    })
})

app.post("/updatebook",async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started");  
})
