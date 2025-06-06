import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoEdit from "./components/TodoEdit";
import TodoList from "./components/TodoList";

export default function App() {
  const [id, setId] = useState(101);
  const [todoList, setTodoList] = useState([]);
  const createTodo = (todoTitle) => {
    setTodoList((prev) => [
      ...prev,
      { id: id, title: todoTitle },
    ]);
    setId((prev) => prev + 1);
  };
  return (
    <>
      <header>
        <h1>React Todo</h1>
        <p>Streamline your day, the React Way!</p>
      </header>
      <hr></hr>
      <main>
        {todoList.length !==0 ? <TodoList todoList={todoList} />: null}
        <TodoCreate createTodo={createTodo} />
      </main>
    </>
  );
}
