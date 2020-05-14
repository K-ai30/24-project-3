const express = require("express")
const router = express.Router();
const registerUser = require("./api_registerUser");
const updateUser = require("./api_updateUser");
const admin = require("./api_registerAdmin");
const community = require("./api_community");
const UpdateCommunity = require("./api_UpdateCommunity");
const event = require("./api_events");
const chart = require("./api_chart");
const auth = require("./api_auth");
// App routes
router.use("/user", registerUser);
router.use("/update_user", updateUser);
router.use("/admin", admin);
router.use("/community", community);
router.use("/update_community", UpdateCommunity);
router.use("/event", event);
router.use("/chart", chart );
router.use("/auth",auth);
// console.log('this is our router in api/indx.js', router)

module.exports = router;
