const express =  require("express");
const path = require("path")

const port = 1212;
const db = require("./Config/db");

const schema = require("./model/fschema");

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
// app.use(express.static(path.join(__dirname,"public")))


app.get("/",async(req,res)=>{
    // let student = await schema.find({})
    // res.render("index",{student});
    // console.log(student);
    await schema.find({}).then((student)=>{
    res.render("index",{student})
    })
})

app.post("/addData",async(req,res)=>{
// let data = await schema.create(req.body) 
// data && res.redirect("/");

    await schema.create(req.body).then(()=>{
    res.redirect("/")
    })
})

app.get("/delData",async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/");
    })
})

app.get("/editData",async(req,res)=>{
    await schema.findById(req.query.id).then((singleData)=>{
        res.render("Edit",{singleData})
    })
})

app.post("/updateData",async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");
})