import React from "react";
import TodosItem from "./TodosItem";
import classes from "./Todos.module.css";
import useTodo from "../context/todos-context";

const Todos: React.FC = () => {
  const { items, removeTodo } = useTodo();

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodosItem
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
