import React, { Fragment, useState } from "react"

const EditTodo = ({ todo }) => {
    const[todoDesc, setTodoDesc] = useState(todo.todo_desc)

    // edit todo funtion
    const updateTodo = async(e) => {
        e.preventDefault()

        try {
            const body = { todoDesc }

            const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response)

            window.location = "/"
        } 
        catch(err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div class="modal" id={`id${todo.todo_id}`} onClick={() => setTodoDesc(todo.todo_desc)}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit task</h4>
                            <button type="button" class="close" data-dismiss="modal" onClick={() => setTodoDesc(todo.todo_desc)}>&times;</button>
                        </div>

                        <div class="modal-body">
                            <input type="text" className="form-control" value={todoDesc} onChange={e => setTodoDesc(e.target.value)
                            }/>
                        </div>

                        <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal" onClick={e => updateTodo(e)}>Save</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setTodoDesc(todo.todo_desc)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo