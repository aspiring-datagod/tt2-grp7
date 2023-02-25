const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const express = require("express");
const pool = require("../db");

const router = express.Router();

// get config vars
dotenv.config();

// access config var
function generateAccessToken(email) {
	return jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
		expiresIn: 60 * 60,
	});
}

function userLogin(req, res) {
	// Verify that such a user exist
	const { email, password } = req.body;
	console.log(email, password);
	if (!email || !password) {
		res.status(400).send("email or password field is missing");
		return;
	}
	pool.query(
		"SELECT * FROM users where email = $1",
		[email],
		(error, result) => {
			if (error) console.log(error);
			if (result.rows.length === 1) {
				const retrievedPassword = result.rows[0].password;

				if (retrievedPassword === password) {
					res.json(generateAccessToken(email));
				} else {
					res.status(403).send("Password incorrect");
				}
			} else {
				res.status(403).send("no such email found");
			}
		}
	);
}

function verifyUser(req, res) {
	const { token, secret } = req.body;
	if (!token || !secret) {
		res.status(400).send("Missing token or secret field");
		return;
	}
	try {
		console.log("valid token");
		res.status(200).send("Valid token");
	} catch {
		console.log("invalid token");
		res.status(403).send("Invalid token");
	}
}

module.exports = {
	userLogin,
	verifyUser,
};
