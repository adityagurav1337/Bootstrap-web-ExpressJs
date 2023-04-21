var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/pages/index.html")
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/pages/about.html")
});

app.get("/courses", (req, res)=>{
    res.sendFile(__dirname + "/pages/courses.html")
});

app.get("/trainers", (req, res)=>{
    res.sendFile(__dirname + "/pages/trainers.html")
});

app.get("/Events", (req, res)=>{
    res.sendFile(__dirname + "/pages/Events.html")
});

app.get("/Pricing", (req, res)=>{
    res.sendFile(__dirname + "/pages/Pricing.html")
});

app.get("/Contact", (req, res)=>{
    res.sendFile(__dirname + "/pages/Contact.html")
});

app.listen(8081,()=>{
    console.log("Welcome running on http://localhost:8081/"); 
});