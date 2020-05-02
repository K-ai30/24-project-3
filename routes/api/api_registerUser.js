
const express = require("express")
const router = express.Router();
const registerUser = require("../../controllers/registerUserController");

// Matches with "/api/register"
router
  .route("/")
  .get(registerUser.findAll)
  .post(registerUser.create);



module.exports = router;
