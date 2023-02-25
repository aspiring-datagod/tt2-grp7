const dotenv = require("dotenv");
const express = require("express");
// const sql = require("../db");

const router = express.Router();

// get config vars
dotenv.config();

const postgres = require("postgres");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: "require" });

async function userLogin(req, res) {
	// Verify that such a user exist
	// const { email, password } = req.body;

	const { email, password } = {
		email: "irene-lim@gmail.com",
		password: "iLoveTT!23",
	};
	console.log(email, password);
	if (!email || !password) {
		res.status(400).send("email or password field is missing");
		return;
	}
	try {
		// const users = await sql`SELECT * FROM public."User" WHERE Email = ${email}`;
		// if (users.length === 1) {
		// 	console.log(users[1]);
		// }
		const result = await sql`SELECT * FROM public."User"; `;
		console.log(result);
	} catch (error) {
		console.log(error);
	}
	// 	(error, result) => {
	// 		if (error) console.log(error);
	// 		if (result.rows.length === 1) {
	// 			const retrievedPassword = result.rows[0].password;

	// 			if (retrievedPassword === password) {
	// 				// Success
	// 			} else {
	// 				res.status(403).send("Password incorrect");
	// 			}
	// 		} else {
	// 			res.status(403).send("no such email found");
	// 		}
	// 	}
	// );
	return;
}

userLogin();

module.exports = {
	userLogin,
};
