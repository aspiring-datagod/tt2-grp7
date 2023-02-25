// claim.js
const express = require("express");
const router = express.Router();

router.get("/api/get-claims/:employeeid", (req, res) => {
  const employeeid = req.params.employeeid;
  const sql = `
SELECT c.*
FROM insuranceclaims c
JOIN insurancepolicies p ON c.InsuranceID = p.InsuranceID
JOIN User e ON p.EmployeeID = e.EmployeeID
WHERE e.EmployeeID = ?;

`;
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
        .send({ message: "No account transactions found for the given user." });
    }
  });
});

router.post("/api/post-claim", (req, res) => {
  const { insuranceid, firstname, lastname, expensedate, amount, purpose } =
    req.body;
  const sql = `INSERT INTO public."InsuranceClaims(insuranceid, firstname, lastname, expensedate, amount, purpose) VALUES(?, ?, ?, ?, ?, ?)`;
  const values = [
    insuranceid,
    firstname,
    lastname,
    expensedate,
    amount,
    purpose,
  ];
  req.con.query(sql, values, function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Failed to create Claim " });
      return;
    }
    console.log("Claim has been successfully posted to the database");
    res.send({
      message: `Claim has been successfully posted to the database`,
    });
  });
});

module.exports = router;
