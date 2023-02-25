const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const session = require("express-session");
const authRouter = require("./router/authentication");

// Controller Modules

// const authentication = require("./controllers/authentication");
// const account = require("./controllers/account");
// const transaction = require("./controllers/transaction");

// Do not expose your Neon credentials to the browser
// .env
// app.js
// Do not expose your Neon credentials to the browser
// .env

// app.js
const postgres = require("postgres");
require("dotenv").config();

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use(authRouter);

app.use(function (req, res, next) {
	req.pool = pool;
	next();
});

// Define a route for handling GET requests
app.get("/users", async (req, res) => {
	try {
		// Retrieve all users from the "User" table

		const users = await sql`SELECT * FROM public."User"`;

		// Send the list of users as a JSON response
		res.json(users);
	} catch (err) {
		// Send an error message as a JSON response
		res.status(500).json({ error: err.message });
	}
});

// async function getPgVersion() {
// 	const result = await sql`select version()`;
// 	console.log(result);
// }

// async function testQuery() {
// 	const result = await sql`SELECT * FROM public."User"; `;
// 	console.log(result);
// }

// getPgVersion();
// testQuery();
// app.use("/", authentication);
// app.use("/", account);
// app.use("/", transaction);

app.listen(port, () => {
	console.log(`Express Insurance Claim app listening on port ${port}`);
});
