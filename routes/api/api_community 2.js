
const express = require("express")
const router = express.Router();
const registerCommunity = require("../../controllers/communityController");

// Matches with "/api/community"
router
  .route("/")
  .get(registerCommunity.findAll)
  .post(registerCommunity.create);



module.exports = router;
