const express = require("express");

const port = 1111;

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

let stu = [
    {id: 1, Name: "Dev", Subject: "HTML", Sem:4},
    {id: 2, Name: "Het", Subject: "CSS", Sem:3},
    {id: 3, Name: "Manav", Subject: "Javascript", Sem:5},
    {id: 4, Name: "Yash", Subject: "React", Sem:6},
    {id: 5, Name: "Yashesh", Subject: "Node", Sem:5},
]

app.get("/",(req,res)=>{
    res.render("index",{stu});
    res.end();  
})

app.post("/addData",(req,res)=>{
    req.body.id = stu.length + 1;
    stu.push(req.body);
    res.redirect("/")
})

app.get("/delData",(req,res)=>{
    // console.log(req.query.id);
    let newData = stu.filter((item)=>item.id != req.query.id);
    stu = newData;
    res.redirect("/");
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");   
})