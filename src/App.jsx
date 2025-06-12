import { useContext } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoEdit from "./components/TodoEdit";
import TodoList from "./components/TodoList";
import { TodoContext } from "./TodoContext";

export default function App() {
  const {todos}=useContext(TodoContext);
  return (
    <>
      <header>
        <h1>React Todo</h1>
        <p>Streamline your day, the React Way!</p>
      </header>
      <hr></hr>
      <main>
        {todos.length !== 0 ? <TodoList /> : null}
        <TodoCreate />
      </main>
    </>
  );
}
