
const express = require("express")
const router = express.Router();
const registerUser = require("../../controllers/registerUserController");

// Matches with "/api/books"
router
  .route("/")
  .get(registerUser.findAll)
  .post(registerUser.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(registerUser.findById)
//  // .put(registerUser.update)
//   .delete(registerUser.remove);

module.exports = router;
