// authentication.js
const express = require("express");
const router = express.Router();

router.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM User WHERE email = ? AND password = ?`;
  const values = [email, password];
  req.con.query(sql, values, function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      req.session.userId = result[0].id;
      res.status(200).send({
        success: true,
        message: "Authentication successful!",
        EmployeeID: result[0].EmployeeID,
        FirstName: result[0].FirstName,
      });
    } else {
      res.status(401).send({
        success: false,
        message: "Authentication failed. Invalid username or password.",
      });
    }
  });
});

module.exports = router;
