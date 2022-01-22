const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');  //using express-validator
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'yoloforReal';

//Create a User using POST "/api/auth/createuser". No Login Required
//Taken from https://express-validator.github.io/docs/
router.post('/createuser',[
    body('username','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a strong password(min 5 characters)').isLength({ min: 5 }),

] , async (req, res) => {
    //If there are errors then return 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
      return res.status(400).json({ errors: errors.array() });  
    }
    
    //Using bcrypt.js hashing
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);

    //Check user with this email already exists or not
    try {
    
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "A user with this email already exists."})
    }
    user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      userdata:{
        id: user.id,
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);  //JWT authtoken

    res.json({authtoken});
      
    } catch (error) {
      console.error(error.message);
    }
  })

  module.exports = router;