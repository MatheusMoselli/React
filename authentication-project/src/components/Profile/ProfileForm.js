import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newPassword = password.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBV7VW_ChVtRVTkHZHXqprwdRCEhCsN3ac",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={password} type="password" id="new-password" minLength="6" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
