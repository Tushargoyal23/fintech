const mongoose = require('mongoose');
const { Schema } = mongoose;
const Loanschema = new Schema({
 
    loanmonth:{
        type:Number,
        default:0
    },
    loanyear:{
        type:Number,
        default:0
    },
    loanname : {
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
   
    timeperiod:{
        type:Number,
        required:true,
    },
    lastyear:{
        type:Number,
        default:0
    },
    lastmonth:{
        type:Number,
        deafault:0
    },
    repayamount:{
        type:Number,
        default:0,
    },
    amount:{
        type:Number,
        required:true,
    },
    rate:{
        type:Number,
        required:true,
    },
    paid:{
        type:Boolean,
        default:false,
    }
});

module.exports = mongoose.model('loan' ,Loanschema )