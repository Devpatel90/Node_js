const express = require("express");
const path = require("path");

const port = 1111;

const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})

app.get("/dashboard_2",(req,res)=>{
    res.render("dashboard_2")
})

app.get("/widgets",(req,res)=>{
    res.render("widgets")
})

app.get("/general_elements",(req,res)=>{
    res.render("general_elements")
})

app.get("/media_gallery",(req,res)=>{
    res.render("media_gallery")
})

app.get("/icons",(req,res)=>{
    res.render("icons")
})

app.get("/invoice",(req,res)=>{
    res.render("invoice")
})

app.get("/tables",(req,res)=>{
    res.render("tables")
})

app.get("/email",(req,res)=>{
    res.render("email")
})

app.get("/calendar",(req,res)=>{
    res.render("calendar")
})

app.get("/price",(req,res)=>{
    res.render("price")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/profile",(req,res)=>{
    res.render("profile")
})

app.get("/project",(req,res)=>{
    res.render("project")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/404_error",(req,res)=>{
    res.render("404_error")
})

app.get("/map",(req,res)=>{
    res.render("map")
})

app.get("/charts",(req,res)=>{
    res.render("charts")
})

app.get("/settings",(req,res)=>{
    res.render("settings")
})

app.get("/index",(req,res)=>{
    res.render("index")
})

app.get("/help",(req,res)=>{
    res.render("help")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started Successfully");
});