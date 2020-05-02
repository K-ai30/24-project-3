
const express = require("express")
const router = express.Router();
const registerAdmin = require("../../controllers/registerAdminController");

// Matches with "/api/books"
router
  .route("/register")
  .get(registerAdmin.findAll)
  .post(registerAdmin.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(registerUser.findById)
//  // .put(registerUser.update)
//   .delete(registerUser.remove);

module.exports = router;
