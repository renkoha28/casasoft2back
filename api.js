var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var EventModel = require('./eventschema');
var UserModel = require('./userschema');
  
// Connecting to database
var query = "mongodb+srv://MEAN_USER:llXeM6dc7spivH9s@cluster0.vh8rm.mongodb.net/test"
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});

//::::::::::::::::::: EVENTS FUNCTIONS ::::::::::::::::::::::::::::::

// INSERT EVENT ::::::::::::

router.post('/save', function(req, res) {
    var newEvent = new EventModel();
       newEvent.name = req.body.name;
       newEvent.date = req.body.date;
       newEvent.location = req.body.location;
       newEvent.weather = req.body.weather;
       
       newEvent.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });


// LIST ALL EVENTS  ::::::::::::::::::::::::::::::::::

router.get('/findall', function(req, res) {
        EventModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });



// DELETE EVENT  ::::::::::::::::::::::::::::::

router.get('/delete', function(req, res) {
        EventModel.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });



// UPDATE EVENT ::::::::::::::::::::::::::::::::::::

router.post('/update', function(req, res) {
        EventModel.findByIdAndUpdate(req.body.id, 
        {
         name:req.body.name,
         date:req.body.date,
         location:req.body.location,
         weather:req.body.weather
        }, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });

//::::::::::::::::::::::::::  USER FUNCTIONS  :::::::::::::::::::::::::::::::


// INSERT USER ::::::::::::

router.post('/save2', function(req, res) {
   var newUser = new UserModel();
       newUser.name = req.body.name;
       newUser.email = req.body.email;
       newUser.password = req.body.password;
       
       newUser.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });


// LIST ALL USERS  ::::::::::::::::::::::::::::::::::

router.get('/findall2', function(req, res) {
        UserModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });



// DELETE USER  ::::::::::::::::::::::::::::::

router.get('/delete2', function(req, res) {
        UserModel.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });



// UPDATE USER ::::::::::::::::::::::::::::::::::::

router.post('/update2', function(req, res) {
        UserModel.findByIdAndUpdate(req.body.id, 
        {
         name:req.body.name,
         email:req.body.email,
         password:req.body.password
        }, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });

//  END OF FUCTIONS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

module.exports = router;

