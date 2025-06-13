import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function TodoEdit({ todo, onSubmit }) {
    const [title, setTitle] = useState(todo.title);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(todo.id, title);
    }
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    return (
        <form>
            <div className="todo-actions">
                <input id="todoInput" type="text" value={title} name="todoTitle" onChange={handleChange} />
                <button onClick={handleSubmit}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f6f5f4" }} /></button>
            </div>
        </form>
    )
}
export default TodoEdit;