import React, { useState } from "react";
import { Button } from "./components/Button";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import clsx from "clsx";
const ConditionalRendering = () => {
  //state
  const [todos, setTodos] = useState([]);
  const [auth, setAuth] = useState(false);
  const [name] = useState("");
  const [age, setAge] = useState(0);
  //fn handle
  function handleToggleAuth() {
    setAuth((prevState) => !prevState);
  }
  let button = null;
  if (auth) {
    button = <LogoutButton onClick={handleToggleAuth} />;
  } else {
    button = <LoginButton onClick={handleToggleAuth} />;
  }
  const handleClickAddTodo = () => {
    const todo = {
      id: 3,
      text: "Learning English",
    };
    setTodos((prevState) => {
      console.log(prevState);
      return [...prevState, todo];
    });
  };
  return (
    <div>
      <h4>Inline If with Logical && Operator: render list item in js</h4>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <>
              <li>id: {todo.id}</li>
              <li>text: {todo.text}</li>
            </>
          ))}
        </ul>
      )}
      <Button type="button" onClick={handleClickAddTodo} name="Button"></Button>

      <br />
      <h4>Element Variable</h4>
      {button}
      <br />

      <h3>Multiple ClassName</h3>
      <div
        className={clsx(
          age > 18 ? "adults" : "children",
          name !== "" && "hasName"
        )}
      >
        This is add className by State
        <br />
        <input type="text" onChange={(e) => setAge(e.target.value)} />
      </div>
    </div>
  );
};

export default ConditionalRendering;
