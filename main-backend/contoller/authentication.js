const dotenv = require("dotenv");
const express = require("express");
// const sql = require("../db");

const router = express.Router();

function test(req, res) {
	console.log("Working");
	res.send("Hi");
}

module.exports = {
	test,
};
