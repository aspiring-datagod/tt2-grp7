// policies.js
const express = require("express");
const router = express.Router();

router.get("/api/get-policies/:employeeid", (req, res) => {
  const employeeid = req.params.employeeid;
  const sql = `SELECT * FROM insurancepolicies WHERE EmployeeID = ?;`;
  const values = [employeeid];
  req.con.query(sql, values, function (err, result) {
    if (err) {
      console.error(err);
      res
        .status(500)
        .send({ message: "Failed to retrieve account information" });
    }

    if (result.length > 0) {
      res.send(result);
    } else {
      res
        .status(404)
        .send({ message: "No policies  found for the given user." });
    }
  });
});

module.exports = router;
