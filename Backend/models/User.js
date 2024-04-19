const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a schema 
const UserSchema = new Schema({
    name : {
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
    role:{
        type:String,
        default:"0"
    },
    isBlock:{
        type:Boolean,
        default:false
    }    
});

module.exports = mongoose.model('user' , UserSchema)
