
const express = require("express")
const router = express.Router();
const createChart = require("../../controllers/chartController");

// Matches with "/chart/create"
router
  .route("/create")
  .post(createChart.create);

  // Matches with "/chart/getall"
router
.route("/getall")
.get(createChart.findAll)

  // Matches with "/chart/findone"
  router
  .route("/:id")
  .get(createChart.findById)



// Matches with "/chart/:id"

router
  .route("/:id")
  .get(createChart.findById)
  .put(createChart.update)
  .delete(createChart.remove);


module.exports = router;
