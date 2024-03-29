const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const JWT_SECRET = 'yoloforReal';


//ROUTE 1: Create a User using POST "/api/auth/createuser". No Login Required
//Taken from https://express-validator.github.io/docs/
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    //If there are errors then return 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
      return res.status(400).json({ success:false, errors: errors.array() });  
    }  
    //Using bcrypt.js hashing
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);

    //Check user with this email already exists or not
    try {
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({ success:false, error: "A user with this email already exists."})
    }
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    //For Auth token
    const data = {
      user:{
        id: user.id,
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);  //JWT authtoken
    res.json({ success:true, authtoken});
      
    } catch (error) {
      console.error(error.message);
      res.status(500).json({success:false, message:"Some internal server error occured"})
    }
  })


  //ROUTE 2: Autenticate a user using POST: "api/auth/login" 
  router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password should not be blank').exists(),
  ] , async (req, res) => {

    //If there are errors then return 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
      return res.status(400).json({errors: errors.array()});  
    }

    const {email,password} = req.body;

    try {
      let user = await User.findOne({email});
      if(!user){
        success = false;
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
      }

      const passwordCheck = await bcrypt.compare(password, user.password);
      if(!passwordCheck){
        success = false;
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
      }

      //For JWT authToken
      const data = {
        user:{
          id: user.id,
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);  //JWT authtoken
      success = true;
      res.json({success, authtoken});
        
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })




  //ROUTE 3: Getting the LoggedIn user details using POST: "api/auth/getuser" . Login Required
  router.post('/getuser', fetchUser , async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

  module.exports = router;