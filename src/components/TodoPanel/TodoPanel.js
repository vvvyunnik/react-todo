import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../../store/todoSlice";
import { selectActiveTodosCount } from "../../store/selectors";
import TodoFilterPanel from "../TodoFilter/TodoFilterPanel";
import Button from "../shared/Button/Button";
import "./TodoPanel.scss";

function TodoPanel() {
  const dispatch = useDispatch();
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="todo-panel">
      <span className="todo-active-count">{activeTodosCount} items left</span>
      <TodoFilterPanel />
      <Button onClick={handleClearCompleted}>Clear completed</Button>
    </div>
  );
}

export default TodoPanel;
