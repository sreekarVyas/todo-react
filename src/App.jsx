import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import ToDoCount from "./components/ToDoCount";

function App() {
  let [todos, setTodos] = useState([]);

  let addNewTodo = (todo) => {
    if (!todos.includes(todo)) setTodos([...todos, todo]);
  };

  let deleteTodo = (index) => {
    let newTodos = todos;
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };

  console.log(todos);
  return (
    <>
      <AddTodo todos={todos} addNewTodo={addNewTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
      <ToDoCount />
    </>
  );
}

export default App;
