//REST API demo in Node.js
var express = require('express'); // requre the express framework
const mongoose=require('mongoose');
var app = express();
var fs = require('fs'); //require file system object
import { Router } from 'express';
const Users=require('./model/user');
const { Router } = require('express');
//mongodb+srv://savior:<password>@cluster0.bgdeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//username: saviour
//Pass:krZ289nkkWzQMX7Y
mongoose.connect('mongodb+srv://savior:krZ289nkkWzQMX7Y@cluster0.bgdeo.mongodb.net/rkt?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true }).then(() =>{
//mongoose.connect('mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net/__CONCOX__?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true }).then(() =>{
    console.log('mongodb connected');
});
/*
const data=new Users({
    _id:new mongoose.Types.ObjectId(),
    name:"sam",
    email:'sam@stark.com',
    address:'sam tower'
})
data.save().then((result)=>{
    console.warn(result);
})
.catch(err=>console.warn(err))

//used for printing the data on the console if successful
Users.find({},function(err,devices){
    if(err) console.warn(err);
    console.warn(devices);
})
*/
//getting data using api
app.get('/add',function(req,res){
    Users.find().then((data)=>{
        res.json(data)
    })
})
Router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Users.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
        Users:result
    })
}).catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})
/*
// Endpoint to Get a list of users from json file using GET
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data); // you can also use res.send()
    });
})
//Step 1: Create a new user variable
var user = {
    "user5": {
        "id":5,
        "firstname":"Liudmyla",
        "lastname":"Nagorna",
        "email":"mila@gmail.com"
      },
} 

//The addUser endpoint to the json
app.post('/addUser', function(req, res){
    //Step 2: read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})*/
// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})