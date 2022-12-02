import React from "react";
import { Button } from "./Button";
import styles from "./LogoutButton.module.css";
const LogoutButton = ({ onClick }) => {
  return (
    <div>
      <Button name="logout" onClick={onClick}></Button>
      <span className={styles.text}>Logout</span>
    </div>
  );
};

export default LogoutButton;
