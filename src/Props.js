import React from "react";
import { Button } from "./components/Button";

const Props = () => {
  function Typography() {
    return <span>This is Typography cpn</span>;
  }
  return (
    <div>
      <Button name="props nhận vào 1 Cpn" component={<Typography />}></Button>
    </div>
  );
};

export default Props;
