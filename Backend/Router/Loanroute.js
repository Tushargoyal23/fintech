const express = require('express');
const router = express.Router();
const loan = require('../models/Loan')
let date = new Date();
const year = date.getFullYear();
const month = `0${date.getMonth() + 1}`.slice(-2);
const day = `0${date.getDate()}`.slice(-2);
router.post('/loans', async (req, res) => {

    try {
        await loan.create({
            amount: req.body.amount,
            email: req.body.email,
            rate: req.body.rate,
            loanname: req.body.loanname,
            timeperiod: req.body.timeperiod,
            loanyear: year,
            loanmonth: month,
            lastmonth: month,
            lastyear: year,

        })
        res.status(201).send({ message: "loan added", success: true });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.get('/get-loans', async (req, res) => {
    try {
        let email = req.body.email
        let data = await loan.find({})

        // data.timeperiod=data.timeperiod-(year-loanyear)*12-(mont-loanmonth)
        // console.log(data);
        res.status(200).send({
            success: true,
            message: "users data list",
            data: data,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "erorr while fetching users",
            error,
        });
    }
})
router.post('/repay/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await loan.findById({ _id: id })

        data.lastmonth = month;
        data.lastyear = year;
        data.paid = true;
        data.amount = data.amount - (data.amount / (data.timeperiod - (year - data.loanyear) * 12 - (month - data.loanmonth)))
        console.log(data.amount)
        res.status(200).send({
            success: true,
            message: "EMI Paid",
            data: data,
        });
        console.log(data);
    }

    catch (error) {
        console.log(error)
    }

})
module.exports = router;