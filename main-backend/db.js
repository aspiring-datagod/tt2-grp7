const Pool = require("pg").Pool;

const pool = new Pool({
	host: "localhost",
	user: "postgres",
	port: 5433,
	password: "Ap4cs4pe!",
	database: "testDB",
});

module.exports = pool;
