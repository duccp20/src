import React, { useState } from "react";

export default function StatefulComponents() {
  //state
  const [count, setCount] = useState(1);
  //action
  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }
  //ui
  return (
    <div>
      {count}
      <br />
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}
