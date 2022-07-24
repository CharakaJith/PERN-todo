const pool = require("../db")                                           // create an instance from the file db.js
const { createLogger, format, transports } = require("winston")         // create an instance of Winston logger module

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

// endpoint to add a new todo into the system
exports.addTodo = async (req, res) => {
    try{    
        logger.info("request to add new issue")

        const { todo } = req.body

        const newTodo = await pool.query("INSERT INTO todos (todo_desc) VALUES ($1) RETURNING *", [todo])

        res.status(201).json(newTodo.rows[0])
    }
    catch(err) {
        logger.error(err.message)
        res.status(500).json(err.message)       
    }
}


// endpoint to get all todos in the system
exports.getAllTodo = async(req, res) => {
    try {
        logger.info("request to get all todos")

        const allTodo = await pool.query("SELECT * FROM todos")

        res.status(200).json(allTodo.rows)
    }
    catch(err) {
        logger.error(err.message)
        res.status(500).json(err.message) 
    }
}

// endpoint to get a todo in the system using the primary key
exports.getTodoById = async(req, res) => {
    try {        
        const { id } = req.params

        logger.info(`request to get todo by id ${id}`)

        const TodoById = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id])

        res.status(200).json(TodoById.rows)
    }
    catch(err) {
        logger.error(err.message)
        res.status(500).json(err.message)
    }
}

// endpoint to update a todo in the system
exports.updateTodo = async(req, res) => {
    try {
        const { id } = req.params
        const { todo } = req.body

        logger.info(`request to update todo ${id}`)

        const updateTodo = await pool.query("UPDATE todos SET todo_desc = $1 WHERE todo_id = $2", [todo, id])

        res.status(200).json("todo updated")
    }
    catch(err) {
        logger.error(err.message)
        res.status(500).json(err.message)
    }
}

// endpoint to delete a todo in the system
exports.deleteTodo = async(req, res) => {
    try {
        const { id } = req.params

        logger.info(`request to delete todo ${id}`)

        const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id])

        res.status(200).json("todo deleted")
    }
    catch(err) {
        logger.error(err.message)
        res.status(500).json(err.message)
    }
}