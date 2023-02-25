const express = require("express");
const loginController = require("../contoller/auth");
const loginTest = require("../contoller/authentication");

const router = express.Router();

router.post("/login", loginController.userLogin);
router.post("/loginTest", loginTest.test);

module.exports = router;
