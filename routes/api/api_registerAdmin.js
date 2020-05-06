
const express = require("express")
const router = express.Router();
const registerAdmin = require("../../controllers/registerAdminController");

// Matches with "/api/admin/register"
router
  .route("/register")
  .get(registerAdmin.findAll)
  .post(registerAdmin.create);


module.exports = router;
