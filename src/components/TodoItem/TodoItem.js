import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../store/todoSlice";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import Button from "../shared/Button/Button";
import "./TodoItem.scss";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = () => {
    dispatch(updateTodo({ id, text, completed: !completed }));
  };

  const itemClass = `todo-item ${completed ? "completed" : ""}`;

  return (
    <li className={itemClass}>
      <input
        type="checkbox"
        className="todo-item-checkbox"
        checked={completed}
        onChange={handleToggleComplete}
      />
      <span className="todo-item-text">{text}</span>
      <Button className="delete-btn" onClick={handleDeleteTodo}>
        <CrossIcon />
      </Button>
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
