import React from "react";
import { Button } from "../components/Button";
import MultipleInput from "./MultipleInput";

function Form() {
  const [firtName, setFirstName] = React.useState("");
  const lastNameRef = React.useRef();
  const selectRef = React.useRef();

  function handleSubmit(event) {
    console.log(event.preventDefault());
    console.log("handleSubmit firstName", firtName);

    console.log("lastNameRef: ", lastNameRef.current.value);
    console.log("age: ", selectRef.current.value);
  }

  console.log("re-render form");

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        First name:{" "}
        <input
          type="text"
          value={firtName}
          onChange={(e) => setFirstName(e.target.value)}
        />{" "}
        <br />
        Last name: <input ref={lastNameRef} type="text" defaultValue="" />{" "}
        <br />
        Age:
        <select defaultValue="3" ref={selectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Button type="submit" name="Submit" />
        <br />
        <h3>Multiple Input</h3>
        <MultipleInput></MultipleInput>
      </form>
    </div>
  );
}

export default Form;
