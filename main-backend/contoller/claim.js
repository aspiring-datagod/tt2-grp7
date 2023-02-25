const InsuranceClaims = require("../database/InsuranceClaims.js");

const dotenv = require("dotenv");
const express = require("express");
// const pool = require("../database/psqlDb");

const router = express.Router();

// get config vars
dotenv.config();

function getPolicies(req, res) {
  // Verify that such a user exist
  const { employeeid } = req.body;
  console.log(email, password);

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

  req.pool.query(sql, insertValues, (error, result) => {
    if (error) console.log(error);
    if (result.length > 0) {
      res.send(result);
    } else {
      res.status(404).send({
        message: "No policies found for the given user.",
      });
    }
  });
}

module.exports = {
  getPolicies,
};
