import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: isNameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
    classes: nameClasses,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
    classes: lastNameClasses,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    classes: emailClasses,
  } = useInput((value) => value.includes("@"));

  const isFormValid = isNameValid && isLastNameValid && isEmailValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    nameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameHasError && <p className="error-text">Name can not be empty.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="l_name">Last Name</label>
          <input
            type="text"
            id="l_name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Last name can not be empty.</p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
