const express =  require("express");
const path = require("path")

const port = 1212;
const db = require("./Config/db");

const schema = require("./model/fschema");

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
// app.use(express.static(path.join(__dirname,"public")))

// const middle = (req,res,next)=>{
//     req.body.Title = "Dev"
//     console.log(req.body);
//     next();
// }

// let task = [];

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

// app.get("/delTask",(req,res)=>{
//     let newData = task.filter((item)=>item.id != req.query.id);
//     task = newData;
//     res.redirect("/");
// })

// app.get("/editTask/:id",(req,res)=>{
//     let singleData = task.find((item)=>item.id == req.params.id)
//     res.render("Edit",{singleData})
// })

// app.post("/updateTask",(req,res)=>{
//     task.forEach((item)=>{
//         if(item.id == req.body.id){
//             item.Title = req.body.Title,
//             item.Priority = req.body.Priority,
//             item.Status = req.body.Status
//         } 
//         else {
//             item
//         }
//     })
//     res.redirect("/")
// })


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");
})