import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [
  {
    id: "1",
    username: "Matheus",
    age: 25,
  },
  {
    id: "2",
    username: "Leticia",
    age: 32,
  },
];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsersList((prev) => [...prev, user]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
