const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const session = require("express-session");

// Controller Modules
const authentication = require("./controllers/authentication");
// const account = require("./controllers/account");
// const transaction = require("./controllers/transaction");

const claim = require("./controllers/claim");
const policies = require("./controllers/policies");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password2@",
  database: "insurance-data",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
const port = process.env.PORT || 4000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(function (req, res, next) {
  req.con = con;
  next();
});

app.use("/", authentication);
// app.use("/", account);
// app.use("/", transaction);
app.use("/", claim);
app.use("/", policies);

app.listen(port, () => {
  console.log(`Express Bank app listening on port ${port}`);
});
