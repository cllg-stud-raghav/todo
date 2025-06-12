import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import TodoShow from "./TodoShow";
function TodoList() {
    const { todos } = useContext(TodoContext)
    const renderList = todos.map(todo => {
        return <TodoShow key={todo.id} id={todo.id} title={todo.title} />
    })
    return (
        <section>
            <ul className="todoList">
                {renderList}
            </ul>
        </section>
    )
}
export default TodoList;