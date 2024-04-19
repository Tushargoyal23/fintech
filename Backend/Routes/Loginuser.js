const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretkey="abhishekshuklafromnnitallahabad";
const userModel = require('../models/User');
const bcrypt = require("bcryptjs");
router.post('/login', async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Invlid EMail or Password", success: false });
      }
      if(user.isBlock){
        return res.status(200).send({message: "Temporarily blocked", success: false})
      }
      const role=user.role;
      //console.log(user.role)
      const name=user.name;
      const token = jwt.sign({ id: user._id }, secretkey, {
        expiresIn: '24h',
      });
      res.status(200).send({ message: "Login Success", success: true, token ,role,user,name});
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  }
);
module.exports = router;