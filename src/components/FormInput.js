import React from "react";
import { Button } from "./Button";

const FormInput = ({ type = "text", handleOnChange, refValue }) => {
  return (
    <div>
      <form onSubmit={handleOnChange}>
        <input type={type} defaultValue="" ref={refValue} />
        <Button type={"submit"} name={"Add todo"}></Button>
      </form>
    </div>
  );
};

export default FormInput;
