const express = require('express');
const router = express.Router();
const userModel = require('../models/User');
const bcrypt = require("bcryptjs");
router.post('/createuser', async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
   
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Registered", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
});

router.get('/finduser/:email' , async (req , res)=> {
  try {
      const e=req.params.email
      const items=await userModel.findOne({email:e}).select('-password');
      res.send({
           success:true,
           data:items
      })
      
  } catch (error) {
      
      res.json({success: false})
  }
})



router.put('/updateuser/:email', async (req, res) => {
  try {
    const email = req.params.email;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }


    user.name = req.body.name || user.name; 
    user.email=email;
    user.address=req.body.name || user.name
    user.address=req.body.name || user.name
    user.address=req.body.name || user.name
    user.address=req.body.name || user.name
    user.address=req.body.name || user.name
    


    await user.save();
    res.status(200).json({ success: true, message: 'User details updated successfully' });
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
module.exports = router;
