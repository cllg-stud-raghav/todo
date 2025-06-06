import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
function TodoShow({ title }) {
  const [status, setStatus] = useState(false);
  const handleDoubleClick = () => {
    setStatus((prev) => !prev);
  };
  return (
    <li
      onDoubleClick={handleDoubleClick}
      style={
        status ? { textDecoration: "line-through" } : { textDecoration: "none" }
      }
    >
      {title}
      <div className="todo-options">
        <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ color: "f6f5f4" }}
        className="icon"
      />
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ color: "#f6f5f4" }}
        className="icon"
      />
      </div>
    </li>
  );
}
export default TodoShow;
