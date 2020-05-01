const path = require("path");
const express = require("express")
const router = express.Router();
const apiRoutes = require("./api/index.js");

//console.log('this is our router in index.js!!!', router)
////console.log('this is our api routes imported in index.js', apiRoutes)

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;