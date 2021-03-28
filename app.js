var express= require ("express");
var bodyParser = require("body-parser");
var request = require ("request");
var https =require("https");
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
   
        res.sendFile(__dirname+"/sign-up.html");
    
})
app.post("/",function(req,res)
{
    var firstName=req.body.namefirst;
    var lastName=req.body.namelast;
    var emailADD=req.body.emailadd;
    console.log(firstName);
})
app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});