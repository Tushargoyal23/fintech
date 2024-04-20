const express = require('express');
const router = express.Router();
const Trans = require('../models/transaction') 
const User = require('../models/User') 
router.post('/add-transaction/:email' , async (req , res)=> {   
    try {
        const e=req.params.email
        const item = new Trans({
            userEmail:e,
            name: req.body.name,
            type :req.body.type,
            amount :req.body.amount,
            paymentMethod:req.body.paymentMethod,
            description: req.body.description,
            date:req.body.date
        })
        const temp=await item.save();
        res.json({success: true})
        
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})


router.get('/get-transactions/:email' , async (req , res)=> {
    try {
        const e=req.params.email
        const items=await Trans.find({userEmail:e});
        res.send({
             success:true,
             data:items
        })
        
    } catch (error) {
        
        res.json({success: false})
    }
})
module.exports = router;