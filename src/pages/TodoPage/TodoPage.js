import TodoList from "../../components/TodoList/TodoList";
import TodoInput from "../../components/TodoInput/TodoInput";
import Header from "../../components/Header/Header";
import TodoPanel from "../../components/TodoPanel/TodoPanel";
import "./TodoPage.scss";

function TodoPage() {
  return (
    <div className="todo-page">
      <Header />
      <div className="todo-container">
        <TodoInput className="todo-input" />
        <div className="todo-area">
          <TodoList />
          <TodoPanel />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
