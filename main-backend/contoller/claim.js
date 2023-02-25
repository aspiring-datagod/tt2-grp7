const dotenv = require("dotenv");
const express = require("express");
// const pool = require("../database/psqlDb");

const router = express.Router();

// get config vars
dotenv.config();

function getPolicies(req, res) {
  // Verify that such a user exist
  const { employeeid } = req.body;

  req.pool.query(
    `SELECT * FROM public."insurancepolicies" WHERE employeeid = $1`,
    [employeeid],
    (error, result) => {
      if (error) console.log(error);
      if (result.length > 0) {
        res.send(result);
      } else {
        res.status(404).send({
          message: "No policies found for the given user.",
        });
      }
    }
  );
}

// router.get("/api/get-account-information-account/:accountId", (req, res) => {

function getClaims(req, res) {
  const employeeid = req.params.employeeid;
  const sql = `
    SELECT c.*
    FROM public."InsuranceClaims" c
    JOIN public."insurancepolicies" p ON c.insuranceid = p.insuranceid
    JOIN public."User" e ON p.employeeid = e.employeeid
    WHERE e.employeeid = $1;
  `;
  const values = [employeeid];
  req.con.query(sql, values, function (err, result) {
    if (err) {
      console.error(err);
      res
        .status(500)
        .send({ message: "Failed to retrieve Claims for EmployeeID" });
    }

    if (result.length > 0) {
      res.send(result);
    } else {
      res.status(404).send({ message: "No Claims  found for the given user." });
    }
  });
}

function sendClaim(req, res) {
  // Verify that such a user exist
  const { insuranceid, firstname, lastname, expensedate, amount, purpose } =
    req.body;
  console.log(insuranceid, firstname, lastname, expensedate, amount, purpose);

  const sql = `INSERT INTO public."InsuranceClaims(insuranceid, firstname, lastname, expensedate, amount, purpose) VALUES($1, $2, $3, $4, $5, $6)`;
  const insertValues = [
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
      res.status(500).send({ message: "Failed to create Claim transaction" });
      return;
    }
    console.log("Claim has been successfully posted to the database");
    res.send({
      message: `Claim has been successfully posted to the database with Debit = ${debit}, Credit = ${credit}, Amount = ${amount}`,
    });
  });
}

module.exports = {
  getPolicies,
  getClaims,
  sendClaim,
};
