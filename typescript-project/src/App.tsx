import React from "react";
import { TodosContextProvider } from "./context/todos-context";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
