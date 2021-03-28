var express= require ("express");
var bodyParser = require("body-parser");
var request = require ("request");
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/sign-up.html");
})
app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});