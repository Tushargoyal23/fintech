const express = require('express');
const router = express.Router();
const loan = require('../models/Loan')
let date = new Date();
const year = date.getFullYear();
const month = `0${date.getMonth() + 1}`.slice(-2);
const day = `0${date.getDate()}`.slice(-2);
function calculateEMI(loanAmount, annualInterestRate, loanTenureYears) {
    let monthlyInterestRate = annualInterestRate / (12 * 100);
    let loanTenureMonths = loanTenureYears;
    let emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths) /
      (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);

    emi = Math.round(emi * 100) / 100;
  
    return emi;
  }
  
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
        const email=req.query.email;
      
        console.log(email)
        let data = await loan.find({email:email})
        
       for(let i=0;i<data.length;i++){
        if (data[i].amount <1) {
        
            await loan.deleteOne({ _id: data[i]._id });
            // Remove the element from the array
            data.splice(i, 1);
            
            
        }
         else if(data[i].lastmonth<month||data[i].lastyear<year){
                data[i].paid=false;
                await data[i].save();
            }
           
            
       }
       
       console.log(data)
       
       
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
        await data.save()
        const fulldata=await loan.find({})
        console.log(data)
        res.status(200).send({
            success: true,
            message: "EMI Paid",
            data: fulldata,
        });
      
    }

    catch (error) {
        console.log(error)
    }

})
router.post('/custompay/:id',async(req,res)=>{
    try{

    
    const id=req.params.id;
    console.log(id)
    const data=await loan.findById({_id:id})
    let cost=Number(req.body.amount);
    console.log(cost)
    const emi=calculateEMI(data.amount,data.rate,data.timeperiod-(year-data.loanyear)*12-(month-data.loanmonth))
    console.log(emi)
    if(cost>=emi){
        data.lastmonth=month;
        data.lastyear=year;
        data.paid=true;
        
        data.amount=data.amount-cost+emi- (data.amount / (data.timeperiod - (year - data.loanyear) * 12 - (month - data.loanmonth)));
    }
    else{
        data.lastmonth=month;
        data.lastyear=year;
        data.paid=true;
        data.amount = data.amount - (data.amount / (data.timeperiod - (year - data.loanyear) * 12 - (month - data.loanmonth)))
    }
    await data.save();
    const fulldata=await loan.find({email:req.body.email})
  
    res.status(200).send({
        success: true,
        message: "EMI Paid",
        data: fulldata,
    });
}
catch(error){
    console.log(error)
    res.status(500).send({
        success: false,
        message: "erorr while fetching users",
        error,
    });
}
    
})
module.exports = router;