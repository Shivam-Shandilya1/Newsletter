const express= require ("express");
const bodyParser = require("body-parser");
const request = require ("request");
const https =require("https");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
        res.sendFile(__dirname+"/sign-up.html");
})

app.post("/",function(req,res)
{
    const firstName=req.body.namefirst;
    const lastName=req.body.namelast;
    const emailADD=req.body.emailadd;
    const data = {
        members: [
            {
                email_address:emailADD,
                status : "subscribed",
                merge_fields :
                {
                    FNAME: firstName,
                    LNAME: lastName,

                }
            }
        ]
    };
    const jsondata = JSON.stringify(data);
    const url = "https://us1.api.mailchimp.com/3.0/lists/61b19c53e6";
    const options=
    {
        method: "POST",
        auth:"shivam1:206a87710377b2d1e04ed40310fa3b5e-us1"
    }
   const request = https.request(url,options,function(response)
    {
        if(response.statusCode === 200)
        {
            res.sendFile(__dirname+"/success.html");
        }else 
        {
            res.sendFile(__dirname+"/failure.html")
        }
       
        response.on("data",function(data)
        {
            console.log(JSON.parse(data));
        })
    
    });    
    request.write(jsondata);
    request.end();
});
app.post("/failure",function(req,res)
{
res.redirect("/");
});
app.listen(process.env.PORT|| 3000,function(){
    console.log("Server is running on port 3000.");
});
// API key MailChimp
// 206a87710377b2d1e04ed40310fa3b5e-us1
// unique List id 61b19c53e6