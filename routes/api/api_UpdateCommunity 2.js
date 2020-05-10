const express = require("express")
const router = express.Router();
const updatecommunity = require("../../controllers/updateCommunityController");

// Matches with "/api/update_community/:id"
router
  .route("/:id")
  .get(updatecommunity.findById)
  .put(updatecommunity.update)
  .delete(updatecommunity.remove);

module.exports = router;
