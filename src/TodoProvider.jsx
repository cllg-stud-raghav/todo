import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(101);

    const createTodo = (todoTitle) => {
        setTodos((prev) => [
            ...prev,
            { id: id, title: todoTitle, completed: false },
        ]);
        setId((prev) => prev + 1);
    };
    const editTodo = (id, title, completed = false) => {
        const updateTodo = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed, title }
            }
            return todo;
        })
        setTodos(updateTodo);
    }  // will work on soon!!
    const deleteTodo = (id) => {
        const updateTodo = todos.filter(todo => (id !== todo.id));
        setTodos(updateTodo);
    }
    return (
        <TodoContext.Provider value={{ todos, id, createTodo, editTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

