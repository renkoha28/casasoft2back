var mongoose=require('mongoose');
  
var UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});
  
module.exports = mongoose.model(
    'usuario', UserSchema, 'usuarios');