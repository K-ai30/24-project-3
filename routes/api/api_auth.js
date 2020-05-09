
//var jwt = require('jsonwebtoken');
//var bcrypt = require('bcryptjs');
// Requiring passport as we've configured it
const express = require("express")
const router = express.Router();
const passport = require("../../passport/passport");


  // var token = jwt.sign({ id: "user._id" }, "super secret jwt secret", {
  //   expiresIn: 86400 // expires in 24 hours
  // });

//api/login
router.post('/login',passport.authenticate("local"),(req,res)=>{
  res.json(req.user);
})

//api/isUserLoggedIn
router.get('/isUserLoggedIn',(req,res)=>{
  if(req.user){
    res.json(req.user);
  }
  else{
    res.json({})
  }
})

router.get('/testlogout', (req,res)=>{
  req.logout();
  res.send("logged out");
})

