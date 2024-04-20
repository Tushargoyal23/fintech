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

router.get('/transactions/:timeRange', async (req, res) => {
    try {
        const timeRange  = req.params.timeRange;

        // Calculate start date based on time range
        let startDate = new Date();
        if (timeRange === 'monthly') {
            startDate.setMonth(startDate.getMonth() - 1);
        } else if (timeRange === 'weekly') {
            startDate.setDate(startDate.getDate() - 7);
        } else if (timeRange === 'yearly') {
            startDate.setFullYear(startDate.getFullYear() - 1);
        }

        // Find transactions within the specified time range
        const transactions = await Trans.find({
            date: { $gte: startDate }
        });

        // Organize transactions into debit and credit categories
        const groupedTransactions = transactions.reduce((acc, curr) => {
            if (curr.type === 'debit') {
                if (!acc.debit) {
                    acc.debit = {};
                }
                acc.debit[curr.date] = (acc.debit[curr.date] || 0) + curr.amount;
            } else if (curr.type === 'credit') {
                if (!acc.credit) {
                    acc.credit = {};
                }
                acc.credit[curr.date] = (acc.credit[curr.date] || 0) + curr.amount;
            }
            return acc;
        }, {});

        res.json(groupedTransactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;