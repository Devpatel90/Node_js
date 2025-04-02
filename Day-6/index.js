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

app.get("/editData/:id",(req,res)=>{
    let singleData = students.find((item)=>item.id == req.params.id)
    res.render("edit",{singleData})
})

app.post("/updateData",(req,res)=>{
    students.forEach((item)=>{
        if(item.id == req.body.id){
            item.Name = req.body.Name,
            item.Subject = req.body.Subject,
            item.Sem = req.body.Sem
        } 
        else {
            item
        }
    })
    res.render("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");
})