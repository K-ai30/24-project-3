
//var jwt = require('jsonwebtoken');
//var bcrypt = require('bcryptjs');
// Requiring passport as we've configured it
const express = require("express")
const router = express.Router();
const passport = require("../../passport/passport");


  // var token = jwt.sign({ id: "user._id" }, "super secret jwt secret", {
  //   expiresIn: 86400 // expires in 24 hours
  // });

//api/auth/login
router.post('/',passport.authenticate("local"),function(req,res){
  res.json(req.user);
})

//api/auth/isUserLoggedIn
router.get('/isUserLoggedIn',(req,res)=>{
  // console.log(req.user);
  if(req.user){
    res.json({loggedIn:true});
  }
  else{
    res.json({loggedIn:false})
  }
})

router.get('/testlogout', (req,res)=>{
  req.logout();
  res.send("logged out");
})

module.exports =  router;
