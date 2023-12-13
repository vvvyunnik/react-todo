import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../store/todoSlice";
import { setFilter } from "../../store/filterSlice";
import { FilterType } from "../../constants/filters";
import "./TodoInput.scss";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleEnterPressed = (keyCode) => {
    if (keyCode === "Enter" && todo.trim()) {
      dispatch(addTodo(todo.trim()));
      dispatch(setFilter(FilterType.None));
      setTodo("");
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="Add a new todo"
      value={todo}
      onChange={handleChange}
      onKeyUp={(event) => handleEnterPressed(event.key)}
    />
  );
}
