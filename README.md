# PERN todo tracker
### PERN todo tracker simple web application to track tasks using PostgreSQL, Express, React and Node.Js. 

![PERN-todo demo](https://github.com/CharakaJith/PERN-todo/blob/b8f64ff3b7ce2b37b26629cf1cad491b696a79f8/Animation.gif)

This project is from the course "PERN Stack Course - Postgres, Express, React, and Node" by freeCodeCamp.org.<br/>
Watch this course on youtube: [PERN Stack Course - Postgres, Express, React, and Node](https://www.youtube.com/watch?v=ldYcgPKEZC8&t=4293s)

## Getting started
```
git clone https://github.com/CharakaJith/PERN-todo.git
cd PERN-todo/server
npm start
cd ../client
npm start
```

## Setting up database connection
Create a ``` conn.js ``` file in the server folder with the following content:
```
const Pool = require("pg").Pool

const pool = new Pool({
    user: <USER_NAME>,
    password: <USER_PASSWORD>,
    database: <DATABASE_NAME>,
    host: <DATABASE_IP>,
    port: <DATABASE_PORT>
})

module.exports = pool
```
