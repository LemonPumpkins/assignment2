var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var jsonData = require('./pages/todo.json')
app.use(bodyParser());

app.use(express.json());
app.set('')

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+"/pages/index.html"));
})
app.get('/todo', function(req,res){
    res.send(JSON.stringify(jsonData));
    //res.sendFile(path.join(__dirname+"/pages/todo.html"))
    //res.write(JSON.stringify(jsonData));
})
app.get('/readtodo',function(req,res){


    res.sendFile(path.join(__dirname+"/pages/readtodo.html"));

});
app.listen(5000, function(){

    console.log("Server running, port 5000");

});