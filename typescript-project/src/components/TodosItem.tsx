import React from "react";
import classes from "./TodosItem.module.css";

interface Props {
  text: string;
  onRemoveTodo: () => void;
}
const TodosItem: React.FC<Props> = ({ text, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodosItem;
