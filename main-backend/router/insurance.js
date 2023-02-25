const express = require("express");
const claimController = require("../contoller/claim");

const router = express.Router();

router.get("/get-policies", claimController.getPolicies);
router.get("/get-claims/:employeeid", claimController.getClaims);
router.post("/post-claim", claimController.sendClaim);

module.exports = router;
