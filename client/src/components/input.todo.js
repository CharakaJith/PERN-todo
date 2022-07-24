import React, { Fragment, useState } from "react"

// add new todo function
const InputTodo = () => {
    const [todo, setTodo] = useState("")

    const onFormSubmit = async e => {
        e.preventDefault()

        try {
            const body = { todo }

            const response = await fetch("http://localhost:5000/todo", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/"
        } 
        catch (err) {
            console.log(err.message)
        }
    }

    return <Fragment>
        <h1 className="text-center mt-5">PERN task list</h1>
        <form className="d-flex mt-5" onSubmit={onFormSubmit}>
            <input type="text" className="form-control" placeholder="Your task" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
}

export default InputTodo