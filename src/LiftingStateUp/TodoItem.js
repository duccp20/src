import React from "react";
import { Button } from "../components/Button";

const TodoItem = ({ todos, handleUpdateTodo, handleDeleteTodo }) => {
  return (
    <div>
      ID : {todos.id} - Title: {todos.learn}
      <br />
      <Button
        name="Update Todo"
        onClick={() => {
          handleUpdateTodo(todos.id);
        }}
      />
      <Button
        name="Delete Todo"
        onClick={() => {
          handleDeleteTodo(todos.id);
        }}
      />
      <br />
    </div>
  );
};

export default TodoItem;
