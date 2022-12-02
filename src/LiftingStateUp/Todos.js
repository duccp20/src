import React, { useState, useRef } from "react";
import { Button } from "../components/Button";
import FormInput from "../components/FormInput";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      learn: "ReactJS",
    },
    {
      id: 2,
      learn: "JavaScipt",
    },
  ]);
  const getValueRef = useRef();
  function handleUpdateTodo(todoID) {
    const cloneTodo = [...todos];
    const todoIndex = cloneTodo.findIndex((todo) => todo.id === todoID);
    cloneTodo[todoIndex].id = Date.now();
    setTodos(cloneTodo);
  }
  function handleDeleteTodo(todoID) {
    const cloneTodo = [...todos];
    const todoIndex = cloneTodo.findIndex((todo) => todo.id === todoID);
    cloneTodo.splice(todoIndex, 1);
    setTodos(cloneTodo);
  }
  function handleOnChange(e) {
    e.preventDefault();
    console.log("getvalue", getValueRef.current);
  }
  return (
    <div>
      <FormInput handleOnChange={handleOnChange} refValue={getValueRef} />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Todos;
