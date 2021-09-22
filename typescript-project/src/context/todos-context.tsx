import React, { useState } from "react";
import Todo from "../models/Todos";

interface TodosContextProps {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

const TodosContext = React.createContext<TodosContextProps>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => prev.concat(new Todo(text)));
  };

  const removeTodoHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const value: TodosContextProps = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodo = () => React.useContext(TodosContext);
export default useTodo;
