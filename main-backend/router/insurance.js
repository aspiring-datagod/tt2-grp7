const express = require("express");
const claimController = require("../contoller/claim");

const router = express.Router();

router.get("/api/get-policies", claimController.getPolicies);
router.get("/api/get-claims/:employeeid", claimController.getClaims);
router.post("/api/post-claim", claimController.sendClaim);

module.exports = router;
