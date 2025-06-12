import { useState,useContext } from "react";
import { TodoContext } from "../TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
function TodoShow({ id, title }) {
  const {editTodo,deleteTodo}=useContext(TodoContext);
  const [status, setStatus] = useState(false);
  const handleDoubleClick = () => {
    setStatus((prev) => !prev);
  };
  const handleDelete = () => {
    deleteTodo(id)
  }

  return (
    <li
      onDoubleClick={handleDoubleClick}
      style={
        status ? { textDecoration: "line-through" } : { textDecoration: "none" }
      }
    >
      {title}
      <div className="todo-options">
        <div onClick={editTodo}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ color: "f6f5f4" }}
            className="icon"
          />
        </div>
        <div onClick={handleDelete}>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ color: "#f6f5f4" }}
            className="icon"
          />
        </div>
      </div>
    </li>
  );
}
export default TodoShow;
