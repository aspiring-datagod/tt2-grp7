const express = require("express");
const claimController = require("../contoller/claim");

const router = express.Router();

router.get("/api/get-policies", claimController.getPolicies);
router.post();

module.exports = router;
