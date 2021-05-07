const Pool = require("pg").Pool

const pool = new Pool({
    user: "root",
    password: "pingeso",
    host: "159.65.230.54",
    port: 1425,
    database: "pingeso"
});

module.exports = pool;