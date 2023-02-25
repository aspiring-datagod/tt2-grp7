const express = require("express");
const loginController = require("../controllers/auth");

const router = express.Router();

router.post("/login", loginController.userLogin);

module.exports = router;
