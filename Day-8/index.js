const express =  require("express");
const path = require("path")

const port = 1212;

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")))

const middle = (req,res,next)=>{
    req.body.Title = "Dev"
    console.log(req.body);
    next();
}

let task = [];

app.get("/",(req,res)=>{
    res.render("index",{task})
})

app.post("/addData",middle,(req,res)=>{
    // console.log(req.body);
    req.body.id = task.length + 1;
    task.push(req.body);
    res.redirect("/");
})

app.get("/delTask",(req,res)=>{
    let newData = task.filter((item)=>item.id != req.query.id);
    task = newData;
    res.redirect("/");
})

app.get("/editTask/:id",(req,res)=>{
    let singleData = task.find((item)=>item.id == req.params.id)
    res.render("Edit",{singleData})
})

app.post("/updateTask",(req,res)=>{
    task.forEach((item)=>{
        if(item.id == req.body.id){
            item.Title = req.body.Title,
            item.Priority = req.body.Priority,
            item.Status = req.body.Status
        } 
        else {
            item
        }
    })
    res.redirect("/")
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");
})