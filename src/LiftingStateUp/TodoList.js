import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todos={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
