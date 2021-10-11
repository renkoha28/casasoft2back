var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var EventModel = require('./eventschema');
  
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

router.post('/update', function(req, res) {
        EventModel.findByIdAndUpdate(req.body.id, 
        {name:req.body.name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });

module.exports = router;

