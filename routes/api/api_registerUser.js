
const express = require("express")
const router = express.Router();
const registerUser = require("../../controllers/registerUserController");

// Matches with "/api/user/register"
router
  .route("/register")
  // .get(registerUser.findAll)
  .post(registerUser.create);
  
  // Matches with "/api/user/getall"
  router
  .route("/getall")
  .get(registerUser.findAll)
  .post(registerUser.create);



module.exports = router;
