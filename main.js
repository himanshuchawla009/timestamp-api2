
var express=require('express')
var d=require('./dateconvo.js')
var app=express()
var port=process.env.port || 8080

app.get('/:dat',function(req,res){
    
 var paramDate=new Date(req.params.dat)
 
 
 
 var newd=d.dateToNatural(paramDate);
 
 
 var arrayDate=newd.split('-')
 var naturalDate=arrayDate[0];
 
 var unix=arrayDate[1];

 
 
 
 var obj={
    unixstamp:unix,
    natural:naturalDate
}
 
 

 res.send(obj);
 
 

})
app.listen(port)

