import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { selectFilteredTodos } from "../../store/selectors";
import "./TodoList.scss";

function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodos);
  const renderTodos = () => {
    if (filteredTodos?.length === 0) {
      return <p className="no-item-text">No todos</p>;
    }

    return (
      <ul className="todo-list">
        {filteredTodos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    );
  };

  return <div className="todos">{renderTodos()}</div>;
}

export default TodoList;
