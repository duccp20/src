import React from "react";
import { Button } from "./components/Button";

export default function StateLessComponents({ name }) {
  return (
    <div>
      <Button name={name} />
    </div>
  );
}
