const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res){
  // console.log(req.body.crypto);
  crypto = req.body.crypto;
  fiat = req.body.fiat;
  baseUrl ="https://apiv2.bitcoinaverage.com/indices/global/ticker/"
  finalUrl = baseUrl+ crypto+fiat
  request(baseUrl+finalUrl, function(error,response,body){
    var data = JSON.parse(body);
    var price = body.last;
    res.send("the" +crypto + "price is " +fiat+ price)
  });
});

app.listen(3000, function(){
  console.log("server started running at port 3000.")
})
