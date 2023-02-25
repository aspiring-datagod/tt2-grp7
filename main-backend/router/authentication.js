const express = require("express");
const loginController = require("../contoller/auth");

const router = express.Router();

router.post("/login", loginController.userLogin);
router.post("/verifyUser", loginController.verifyUser);
module.exports = router;
