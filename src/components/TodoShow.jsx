import { useState, useContext } from "react";
import TodoEdit from "./TodoEdit";
import { TodoContext } from "../TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
function TodoShow({ id, title, todo }) {
  const { editTodo, deleteTodo } = useContext(TodoContext);
  const [showEdit, setShowEdit] = useState(false);
  console.log(todo.completed)
  const handleDoubleClick = () => {
    editTodo(id, title, !todo.completed);
  };
  const handleDelete = () => {
    deleteTodo(id)
  }
  const handleEdit = () => {
    setShowEdit(true);
  }
  const handleSubmit = (id, title) => {
    editTodo(id, title);
    setShowEdit(false);
  }
  if (showEdit) {
    return (
      <li>
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    )
  }
  return (
    <li onDoubleClick={handleDoubleClick}>
      <p className={todo.completed ? "completed": null}>{title}</p>
      <div className="todo-actions">
        <div onClick={handleEdit} className="icon">
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ color: "f6f5f4" }}
          />
        </div>
        <div onClick={handleDelete} className="icon">
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ color: "#f6f5f4" }}
          />
        </div>
      </div>
    </li>
  );
}
export default TodoShow;
