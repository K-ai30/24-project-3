

const express = require("express")
const router = express.Router();
const register = require("./api_registerUser");
const update = require("./api_updateUser");

// Book routes
router.use("/register", register);
router.use("/update", update);

console.log('this is our router in api/indx.js', router)

module.exports = router;
