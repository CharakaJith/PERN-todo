const Pool = require("pg").Pool     // create an instance of PostgreSQL client

// create new pool 
const pool = new Pool({
    user: "postgres",
    password: "Sandun1972?",
    database: "pern_todo",
    host: "localhost",
    port: 5432
})

module.exports = pool              // grant permission to access this file from other files