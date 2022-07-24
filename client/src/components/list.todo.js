import React, { Fragment, useEffect, useState } from "react"
import EditTodo from "./edit.todo"

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    // get all todos function
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todo")
            const jsonData = await response.json()

            setTodos(jsonData)
        } 
        catch(err) {
            console.log(err.message)
        }
    }

    // delete a todo function
    const deleteTodo = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/todo/${id}`, {
                method: "DELETE"
            }) 

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } 
        catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return <Fragment>
        {" "}
        <table className="table text-center mt-5">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key = {todo.todo_id}>
                        <td>{todo.todo_desc}</td>
                        <td>
                            <EditTodo todo = {todo}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
}

export default ListTodos