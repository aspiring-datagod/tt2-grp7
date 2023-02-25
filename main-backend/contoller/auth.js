const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const express = require("express");
// const pool = require("../database/psqlDb");

const router = express.Router();

// get config vars
dotenv.config();

function userLogin(req, res) {
  // Verify that such a user exist
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    res.status(400).send("email or password field is missing");
    return;
  }
  pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email],
    (error, result) => {
      if (error) console.log(error);
      if (result.rows.length === 1) {
        const retrievedPassword = result.rows[0].password;

        if (retrievedPassword === password) {
          // Success
        } else {
          res.status(403).send("Password incorrect");
        }
      } else {
        res.status(403).send("no such email found");
      }
    }
  );
}

module.exports = {
  userLogin,
};
