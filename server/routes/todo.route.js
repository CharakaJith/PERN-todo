const express = require("express")              // create an instance of express framework
const router = express.Router()                 // create an express router      

const { addTodo, getAllTodo, getTodoById, updateTodo, deleteTodo } = require("../controller/todo.controller")       // declare routing paths

router.post("", addTodo)                        // set up routing path to add a new todo
router.get("", getAllTodo)                      // set up routing path to get all todos in the system
router.get("/:id", getTodoById)                 // set up routing path to get a todo in the systme using id
router.put("/:id", updateTodo)                  // set up routing path to update a todo in the system 
router.delete("/:id", deleteTodo)               // set up routing path to delete a todo from the system

module.exports = router                         // grant permission to access this file from other files