import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddTodo(props) {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [found, setFound] = useState(false);

  let adding = (data) => {
    let f = props.todos.includes(data.task);
    if (f) {
      setFound(true);
    } else {
      setFound(false);
    }
    if (!found) props.addNewTodo(data.task);
  };

  return (
    <div className="container">
      <h1 className="text-center">ToDoBee</h1>
      <p className="text-center">Your Favourite ToDo List Website</p>
      <form onSubmit={handleSubmit(adding)}>
        <div className="mb-3">
          <label htmlFor="user_task" className="form-label">
            Enter a Task
          </label>
          <input
            type="text"
            className="form-control border border-dark"
            id="user_task"
            {...register("task", { required: true })}
          />
          {errors.task?.type === "required" && (
            <p className="text-warning">* Enter a Task </p>
          )}
          {found && <p className="text-warning">* Task Already Exists</p>}
        </div>
        <button type="submit" className="btn btn-success mb-5">
          Add
        </button>
      </form>
      <h3>TASKS</h3>
    </div>
  );
}

export default AddTodo;
