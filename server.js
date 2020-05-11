const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
//for future developments we can use jwt to persist the login session longer.
//var jwt = require('jsonwebtoken');

const passport = require("./passport/passport");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}





// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/datatrak", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Add routes, both API and view
app.use('/', routes);

  // var token = jwt.sign({ id: "user._id" }, "super secret jwt secret", {
  //   expiresIn: 86400 // expires in 24 hours
  // });





// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});