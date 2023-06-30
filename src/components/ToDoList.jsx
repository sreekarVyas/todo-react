import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  console.log(props);
  return (
    <>
      <div className="container">
        <ul className="list-group">
          {props.todos.map((task, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-primary mr-4"
            >
              <span className="taskk">{task}</span>

              <span className="icons" onClick={() => props.deleteTodo(index)}>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
