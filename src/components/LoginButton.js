import React from "react";
import { Button } from "./Button";
import styles from "./Button.module.css";
const LoginButton = ({ onClick }) => {
  return (
    <div>
      <Button name="login" onClick={onClick}></Button>
      <span className={styles.text}>Login</span>
    </div>
  );
};

export default LoginButton;
