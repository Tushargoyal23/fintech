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
    date: {
        type: Date,
        required: true
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    postalCode:{
        type:String
    }
     
});

module.exports = mongoose.model('user' , UserSchema)
