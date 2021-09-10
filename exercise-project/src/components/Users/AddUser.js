import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();

  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (!enteredUsername.trim().length || !enteredAge.trim().length) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (!+enteredAge || +enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (only numbers > 0).",
      });
      return;
    }

    props.onAddUser({
      id: Math.random(),
      username: enteredUsername,
      age: enteredAge,
    });

    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={usernameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
