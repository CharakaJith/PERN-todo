const express = require("express");     // create an instance of express framework
const cors = require("cors");           // create an instance of connect/express middleware
const todoRouter = require("./routes/todo.route")

require("dotenv").config()

const { createLogger, format, transports } = require("winston")      // create an instance of Winston logger module

// create a logger
const logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: "logs/serviceLogs.log"
        })
    ]
})

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());                // grants permission to access request body

app.use("/todo", todoRouter)              

app.listen(PORT, () => {
    //logger.info("server started on " + PORT)
    //logger.info("server started on $1", [PORT])
    logger.info(`server started on server ${PORT}`)
})