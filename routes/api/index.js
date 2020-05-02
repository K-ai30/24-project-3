

const express = require("express")
const router = express.Router();
const register = require("./api_registerUser");
const update = require("./api_updateUser");
const admin = require("./api_registerAdmin");

// Book routes
router.use("/register", register);
router.use("/update", update);
router.use("/admin", admin);

console.log('this is our router in api/indx.js', router)

module.exports = router;
