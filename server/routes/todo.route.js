const express = require("express")                             // create an instance of express framework
const router = express.Router()   

const { addTodo, getAllTodo, getTodoById, updateTodo, deleteTodo } = require("../controller/todo.controller")

router.post("", addTodo)
router.get("", getAllTodo)
router.get("/:id", getTodoById)
router.put("/:id", updateTodo)
router.delete("/:id", deleteTodo)

module.exports = router