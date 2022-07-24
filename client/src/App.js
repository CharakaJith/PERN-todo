import React, { Fragment } from "react"
import './App.css'

import InputTodo from "./components/input.todo"
import ListTodos from "./components/list.todo"

function App() {
  return <Fragment>
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>    
  </Fragment>
}

export default App
