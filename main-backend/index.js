const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const postgres = require("postgres");
const session = require("express-session");

//Routers
const authRouter = require("./router/authentication");
const insuranceRouter = require("./router/insurance");

require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: "require" });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

async function testQuery() {
  try {
    const result = await sql`SELECT email FROM public."User"`;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getPgVersion();
testQuery();

const app = express();
const port = process.env.PORT || 5432;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
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

// Use the router for authentication routes
app.use("/auth", authRouter);
app.use("/insurance", insuranceRouter);

app.listen(port, () => {
  console.log(`Express Insurance Claim app listening on port ${port}`);
});
