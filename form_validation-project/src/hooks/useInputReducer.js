// another example of a custom hook, this time with the useReducer
import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
      return initialInputState;
    default:
      return initialInputState;
  }
};

const useInput = (validateValue) => {
  const [input, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(input.value);
  const hasError = !valueIsValid && input.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET " });
  };

  const classes = hasError ? "form-control invalid" : "form-control";

  return {
    value: input.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    classes,
  };
};

export default useInput;
