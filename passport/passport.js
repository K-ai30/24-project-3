const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs    
    db.Admin.findOne({email:email},function(err,user){
      if(err){console.log(err)}
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if(!user.comparePassword(password)){
        return done(null,false, {message: "incorrect password"})
      }
      done(null, user);
    })

  }
))


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
