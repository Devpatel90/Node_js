const express = require("express");

const port = 2222;

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

let students = [
    {id:1 , Name:"Dev", Subject:"Node", Sem:2},
]

app.get("/",(req,res)=>{
    res.render("index",{students});
    res.end();
})

app.post("/addData",(req,res)=>{
    req.body.id = students.length + 1;
    students.push(req.body);    
    res.redirect("/");
})

app.get("/delData",(req,res)=>{
    let newData = students.filter((item)=>item.id != req.query.id);
    students = newData;
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");
})