const isAuthenticated = require("./isAuthenticated")

//var jwt = require('jsonwebtoken');
//var bcrypt = require('bcryptjs');
// Requiring passport as we've configured it
const passport = require("./passport");


  // var token = jwt.sign({ id: "user._id" }, "super secret jwt secret", {
  //   expiresIn: 86400 // expires in 24 hours
  // });

//api/login
app.post('/login',passport.authenticate("local"),(req,res)=>{

  res.send("created sesssion!");
   // res.send("test!");

})

app.get('/isUserLoggedIn',(req,res)=>{

  if(req.user){
    res.status(200).send("successfully logged in");
  }
  else{
    res.send("you need to log in");
  }
 
   // res.send("test!");

})

app.get('/testlogout', (req,res)=>{
  req.logout();
  res.send("logged out");
})

